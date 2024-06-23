import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as ArrowBack} from '../../static/icons/navigate_before.svg';
import {ReactComponent as ArrowForward} from '../../static/icons/navigate_next.svg';
import LensDisplayCard from '../Lens/LensDisplayCard'
import CameraDisplayCard from '../Camera/CameraDisplayCard'
import CarouselFilter from '../Filter/CarouselFilter'; 
import { SECONDARY_BACKGROUND_COLOR } from '../../lib/Styles';

const commonTextStyles = {
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
  lineHeight: '20px',
  fontWeight: '600',
  color: 'rgba(0, 44, 62, 1)',
};
const useStyles = makeStyles(() => ({
  mainContainer: {
    background: SECONDARY_BACKGROUND_COLOR
  },
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

const Carousel = ({filterType, setAddedFilter, addedFilter, displayItems, carouselIconSource, displayType, titleText, showFilters = false}) => {
  const classes = useStyles();
  const activeDisplaySize = 3;
  const progressStartNumber = activeDisplaySize <= displayItems?.length ? activeDisplaySize : displayItems?.length
  const [currentProgressNumber, setCurrentProgressNumber] = useState(progressStartNumber);
  const [showNextButton, setShowNextButton] = useState(progressStartNumber >=activeDisplaySize);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [activeDisplayItems, setActiveDisplayItems] = useState(displayItems?.slice(0, activeDisplaySize));
  // console.log(activeDisplayItems)

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
   
    setCurrentProgressNumber(progressStartNumber)
    setActiveDisplayItems(displayItems?.slice(0, activeDisplaySize));
    setShowPreviousButton(false)
}
  };


  const displayItemCards =
    activeDisplayItems?.length > 0
      ? activeDisplayItems.map((displayedItem) => {
        const carouselCards = displayType==='Lenses' ? <LensDisplayCard
        key={displayedItem?.uuid}
        uuid={displayedItem?.uuid}
        manufacturer={displayedItem?.manufacturer?.name}
        modelName={displayedItem?.name}
        lensMount={displayedItem?.lens_mount?.name} 
        focalLength={displayedItem?.min_focal_length} 
        minAperture={displayedItem?.max_aperture} 
        maxAperture={displayedItem?.min_aperture} 
        hideMount={true}
        previewSize={true}
        ></LensDisplayCard> : <CameraDisplayCard
        isFavorited={displayedItem?.self_timer} // USING SELF TIMER BOOL AS FAV BC LAZY
        manufacturer={displayedItem?.manufacturer?.name} 
        modelName={displayedItem?.name} 
        lensMount ={displayedItem?.lens_mount?.name}
        key={displayedItem?.uuid}
        uuid={displayedItem?.uuid}
        previewSize={true}
        ></CameraDisplayCard>

          return (
            carouselCards
          );
        })
      : [null];

  
  const defaultText = 'Compatible ' + displayType

  const manufacturerFilterOptions= displayItems?.map(v => ({field: 'manufacturer_name', uuid: v?.manufacturer?.uuid, name: v?.manufacturer?.name})).reduce((unique, o) => {
    if(!unique.some(obj => obj?.uuid === o?.uuid)) {
      unique.push(o);
    }
    return unique;
},[])
  const mountFilterOptions= displayItems?.map(v => ({field: 'lens_mount_name', uuid: v?.lens_mount_uuid, name: v?.lens_mount})).reduce((unique, o) => {
    if(!unique.some(obj => obj?.uuid === o?.uuid)) {
      unique.push(o);
    }
    return unique;
},[])



  return (
    <div className={classes.mainContainer}>
      <div className={classes.carouselHeader}>
        <Grid container direction="row" className={classes.titleContainer}>
          <Avatar src={carouselIconSource} className={classes.avatar} alt={'Carousel Avatar'} />
          <Grid item className={classes.titleText}>
            {titleText ? titleText : defaultText}
          </Grid>
          {showFilters && (
          <>
            <CarouselFilter filterType={filterType} addedFilter={addedFilter} setAddedFilter={setAddedFilter} filterTitle="Manufacturer" filterOptions={manufacturerFilterOptions}/>
            <CarouselFilter filterType={filterType} addedFilter={addedFilter} setAddedFilter={setAddedFilter} filterTitle="Mount"  filterOptions={mountFilterOptions}/>
            {displayType==='Cameras' &&(
              <CarouselFilter filterType={filterType} addedFilter={addedFilter} setAddedFilter={setAddedFilter} filterTitle="Favorites"/>
            )}
          </>
        )}
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
