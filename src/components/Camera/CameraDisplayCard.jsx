import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CAMERA_IMAGE_MAP} from '../../lib/camera_images';

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
    textAlign: 'center'

  },
  displayHeader: {
    height: '25px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'

  },
  manufacturerText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 0.5)',
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
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 1)',
  }

}));


const CameraDisplayCard = ({manufacturer, modelName, lensMount}) => {
  const classes = useStyles();


  const defaultImgURL = 'https://cdn2.iconfinder.com/data/icons/camera-56/48/23_questionmark_ask_camera_photo_mobile_phone_video-1024.png'
  const displayImgURL = CAMERA_IMAGE_MAP.hasOwnProperty(modelName) ? CAMERA_IMAGE_MAP[modelName] : defaultImgURL
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
      </div>
  );
};

CameraDisplayCard.propTypes = {

};

export default CameraDisplayCard;
