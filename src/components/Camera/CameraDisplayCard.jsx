import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CAMERA_IMAGE_MAP} from '../../lib/camera_images';
import { useNavigate } from "react-router-dom";
import FavoriteButton from '../Favorites/FavoriteButton';

const useStyles = makeStyles(() => ({
  displayCard: {
    // height: '200px',
    // width: '200px',
    height: props => props.previewSize ? '200px' : null,
    width: props => props.previewSize ? '200px' : null,
    cursor: props => props.previewSize ? 'pointer' : null,
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
    // height: '150px'
    height: props => props.previewSize ? '150px' : '300px',
    width: '100%'

  },
  mountText: {
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 44, 62, 1)',
  }

}));


const CameraDisplayCard = ({manufacturer, modelName, lensMount, uuid, previewSize=false, isFavorited}) => {
  const classes = useStyles({previewSize});
  const defaultImgURL = 'https://cdn2.iconfinder.com/data/icons/camera-56/48/23_questionmark_ask_camera_photo_mobile_phone_video-1024.png'
  const displayImgURL = CAMERA_IMAGE_MAP.hasOwnProperty(modelName) ? CAMERA_IMAGE_MAP[modelName] : defaultImgURL
  const displayImgAlt = 'img-'+manufacturer+modelName
  let navigate = useNavigate(); 

  const handleClickButton = () => {
    const destination = '/camera/'+uuid
    navigate(destination)
  };



  return (
      <button className={classes.displayCard} onClick={handleClickButton}>
        <div className={classes.displayHeader}>
            <div className={classes.manufacturerText}>{manufacturer}</div>
            <div className={classes.modelText}>{modelName}</div>
            <FavoriteButton cameraUUID={uuid} isFavorited={isFavorited}/>

        </div>
        <img src={displayImgURL} alt={displayImgAlt} className={classes.displayImage}></img>
        <div className={classes.mountText}>
        {lensMount}
        </div>
      </button>
  );
};

CameraDisplayCard.propTypes = {

};

export default CameraDisplayCard;
