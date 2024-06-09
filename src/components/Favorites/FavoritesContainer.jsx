import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import LensDisplayCard from '../Lens/LensDisplayCard'
import CameraDisplayCard from '../Camera/CameraDisplayCard'


const commonTextStyles = {
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
  lineHeight: '20px',
  fontWeight: '600',
  color: 'rgba(0, 44, 62, 1)',
};
const useStyles = makeStyles(() => ({
  favoritesHeader: {
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
    justifyContent: 'center'
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
  avatar: {
    width: '24px',
    height: '24px',
  },

  favoriteCardContainer: {
    gap: '12px', 
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '650px',
},
}));

const FavoritesContainer = ({displayItems, carouselIconSource, displayType, titleText}) => {
  const classes = useStyles();

  const displayItemCards =
    displayItems?.length > 0
      ? displayItems.map((displayedItem) => {
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
  
  return (
    <div>
      <div className={classes.favoritesHeader}>
        <Grid container direction="row" className={classes.titleContainer}>
          <Avatar src={carouselIconSource} className={classes.avatar} alt={'FavoritesContainer Avatar'} />
          <Grid item className={classes.titleText}>
            {titleText ? titleText : defaultText}
          </Grid>
        </Grid>

      </div>
      <Grid container direction="row" className={classes.favoriteCardContainer}>
        {displayItemCards}
      </Grid>
    </div>
  );
};

export default FavoritesContainer;
