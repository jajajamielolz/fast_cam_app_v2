import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {LENS_IMAGE_MAP} from '../../lib/lens_images';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  displayCard: {
    height: '200px',
    width: '200px',
    borderColor: 'rgba(194,201,209, 0.5)',
    border: '1px solid',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '20px',
    gap: '12px',
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center',
    paddingBottom: '25px'

  },
  displayHeader: {
    height: '25px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'

  },
  manufacturerText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 0.7)',
    marginRight: '4px'
  },
  modelText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 1)',
  },
  displayImage: {
    height: '150px'
  },
  mountText: {
    visibility: (props) => props.hideMount ? 'hidden' : 'visible',
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 1)',
  },
  lensInfoContainer: {
    display: 'flex',
    justifyContent: "space-between",

  },
  apertureText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(217, 17, 17, 1)',

  }
}));


const LensDisplayCard = ({manufacturer, modelName, lensMount, focalLength, minAperture, maxAperture, hideMount=false}) => {
  const classes = useStyles({hideMount});


  const defaultImgURL = 'https://icons.veryicon.com/png/o/internet--web/digital-equipment-topics/camera-lens-1.png'
  const displayImgURL = LENS_IMAGE_MAP.hasOwnProperty(modelName) ? LENS_IMAGE_MAP[modelName] : defaultImgURL
  const displayImgAlt = 'img-'+manufacturer+modelName


  return (
      <div className={classes.displayCard}>
        <div className={classes.displayHeader}>
            <div className={classes.manufacturerText}>{manufacturer}</div>
            <div className={classes.modelText}>{modelName}</div>
        </div>
        <img src={displayImgURL} alt={displayImgAlt} className={classes.displayImage}></img>
        <div className={classes.mountText}>
        {lensMount}
        </div>
        <div className={classes.lensInfoContainer}>
          <div className={classes.apertureText}>
            f/{minAperture}
          </div>
          <div>
            {focalLength}mm
          </div>
          <div className={classes.apertureText}>
            f/{maxAperture}
          </div> 
        </div>
      </div>
  );
};

LensDisplayCard.propTypes = {
  manufacturer: PropTypes.string, 
  modelName: PropTypes.string, 
  lensMount: PropTypes.string, 
  focalLength: PropTypes.number,
  minAperture: PropTypes.number, 
  maxAperture: PropTypes.number, 
  hideMount: PropTypes.bool
};


export default LensDisplayCard;
