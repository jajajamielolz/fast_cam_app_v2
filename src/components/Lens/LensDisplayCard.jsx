import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {LENS_IMAGE_MAP} from '../../lib/lens_images';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { BORDER_COLOR, PRIMARY_BACKGROUND_COLOR, SECONDARY_BACKGROUND_COLOR } from '../../lib/Styles';

const useStyles = makeStyles(() => ({
  displayCard: {
    height: props => props.previewSize ? '200px' : null,
    width: props => props.previewSize ? '220px' : null,
    cursor: props => props.previewSize ? 'pointer' : null,
    borderColor: BORDER_COLOR,
    border: '1px solid',
    backgroundColor: props => props.previewSize ? PRIMARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR,
    padding: '16px',
    borderRadius: '20px',
    gap: '12px',
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center',
    paddingBottom: '25px',

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
    marginRight: '4px',
    marginTop: '10px',

  },
  modelText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 1)',
    marginTop: '10px',

  },
  displayImage: {
    height: props => props.previewSize ? '150px' : '300px',
    width: '100%'

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


const LensDisplayCard = ({manufacturer, modelName, lensMount, focalLength, minAperture, maxAperture, uuid, hideMount=false, previewSize=false}) => {
  const classes = useStyles({hideMount, previewSize});
  const defaultImgURL = 'https://icons.veryicon.com/png/o/internet--web/digital-equipment-topics/camera-lens-1.png'
  const displayImgURL = LENS_IMAGE_MAP.hasOwnProperty(modelName) ? LENS_IMAGE_MAP[modelName] : defaultImgURL
  const displayImgAlt = 'img-'+manufacturer+modelName
  let navigate = useNavigate(); 

  const handleClickButton = () => {
    const destination = '/lens/'+uuid
    navigate(destination)
  };


  return (
      <button className={classes.displayCard} onClick={handleClickButton}>
        <div className={classes.displayHeader}>
            <div className={classes.manufacturerText}>{manufacturer}</div>
            <div className={classes.modelText}>{modelName}</div>
        </div>
        <img src={displayImgURL} alt={displayImgAlt} className={classes.displayImage}></img>
        <div className={classes.mountText}>
        Mount: {lensMount}
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
      </button>
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
