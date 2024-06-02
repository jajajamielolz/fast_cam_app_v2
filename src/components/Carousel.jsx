import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as ArrowBack} from '../static/icons/navigate_before.svg';
import {ReactComponent as ArrowForward} from '../static/icons/navigate_next.svg';
import LensDisplayCard from './Lens/LensDisplayCard'
import CameraDisplayCard from './Camera/CameraDisplayCard'


const commonTextStyles = {
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
  lineHeight: '20px',
  fontWeight: '600',
  color: 'rgba(0, 44, 62, 1)',
};
const useStyles = makeStyles(() => ({
  carouselHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '750px',
    height: '24px',
    marginBottom: '8px',
    alignItems: 'center',
  },
  titleContainer: {
    gap: '4px',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: '8px',
    ...commonTextStyles,
  },
  navigationContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  visibleButton: {
    visibility: 'visible',
  },
  hiddenButton: {
    visibility: 'hidden',
  },
  navigationText: {
    ...commonTextStyles,
  },
  progressTextContainer: {
    width: '70px',
    textAlign: 'center',
  },
  avatar: {
    width: '24px',
    height: '24px',
  },

  cardContainer: {gap: '12px'},
}));

const Carousel = ({displayItems, carouselIconSource, displayType}) => {
  const classes = useStyles();
  const activeDisplaySize = 3;
  const [currentProgressNumber, setCurrentProgressNumber] = useState(activeDisplaySize);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [activeDisplayItems, setActiveDisplayItems] = useState(displayItems?.slice(0, activeDisplaySize));


  const handleClickNext = () => {
    setShowPreviousButton(true)
    if (displayItems?.length >= currentProgressNumber +activeDisplaySize) {
        setCurrentProgressNumber(currentProgressNumber + activeDisplaySize)
        setActiveDisplayItems(displayItems?.slice(currentProgressNumber, currentProgressNumber + activeDisplaySize));
    } else {
        setShowNextButton(false)
        setActiveDisplayItems(displayItems?.slice(displayItems?.length - activeDisplaySize));
    }
    
  };

  const handleClickPrevious = () => {
    setShowNextButton(true)
    if ((currentProgressNumber > currentProgressNumber - activeDisplaySize) && currentProgressNumber > activeDisplaySize){
    setCurrentProgressNumber(currentProgressNumber - activeDisplaySize)
    setActiveDisplayItems(displayItems?.slice(currentProgressNumber - activeDisplaySize, currentProgressNumber))
} else {
   
    setCurrentProgressNumber(activeDisplaySize)
    setActiveDisplayItems(displayItems?.slice(0, activeDisplaySize));
    setShowPreviousButton(false)
}
  };


  const displayItemCards =
    activeDisplayItems?.length > 0
      ? activeDisplayItems.map((displayedItem) => {
        const carouselCards = displayType==='Lenses' ? <LensDisplayCard
        key={displayedItem?.uuid}
        manufacturer={displayedItem?.manufacturer?.name}
        modelName={displayedItem?.name}
        lensMount={displayedItem?.lens_mount?.name} 
        focalLength={displayedItem?.min_focal_length} 
        minAperture={displayedItem?.max_aperture} 
        maxAperture={displayedItem?.min_aperture} 
        hideMount={true}
        ></LensDisplayCard> : <CameraDisplayCard
        manufacturer={displayedItem?.manufacturer?.name} 
        modelName={displayedItem?.name} 
        lensMount ={displayedItem?.lens_mount?.name}
        key={displayedItem?.uuid}
        ></CameraDisplayCard>

          return (
            carouselCards
          );
        })
      : [null];

  console.log(activeDisplayItems)
  return (
    <div>
      <div className={classes.carouselHeader}>
        <Grid container direction="row" className={classes.titleContainer}>
          <Avatar src={carouselIconSource} className={classes.avatar} alt={'Carousel Avatar'} />
          <Grid item className={classes.titleText}>
            {'Compatible '}{displayType}
          </Grid>
        </Grid>

        <div className={classes.navigationContainer}>
          <IconButton
            className={!showPreviousButton ? classes.hiddenButton : classes.visibleButton}
            onClick={() => handleClickPrevious()}
          >
            <ArrowBack />
          </IconButton>
          <div className={classes.progressTextContainer}>
              <div className={classes.navigationText}>
                {currentProgressNumber} {' of '} {displayItems?.length}
              </div>
          </div>

          <IconButton
            className={!showNextButton ? classes.hiddenButton : classes.visibleButton}
            onClick={() => handleClickNext()}
          >
            <ArrowForward />
          </IconButton>
        </div>
      </div>
      <Grid container direction="row" className={classes.cardContainer}>
        {displayItemCards}
      </Grid>
    </div>
  );
};

export default Carousel;
