import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';
import { BORDER_COLOR, SECONDARY_BACKGROUND_COLOR, ACTIVATED_COLOR, LIGHT_RED } from '../../lib/styles';

const useStyles = makeStyles(() => ({
  displayCard: {
    width: '150px',
    borderColor: BORDER_COLOR,
    border: '1px solid',
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
    padding: '16px',
    borderRadius: '20px',
    gap: '12px',
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center'

  },
  shutterText:{marginBottom: '4px'},
  shutterSpeeds:{
    display: 'flex', 
    justifyContent: "space-between",
    paddingLeft: '8px',
    paddingRight: '8px'
    },

  greenRedHighlight: {
    borderColor: 'rgba(201,201,209, 0.75)',
    border: '1px solid',
    minWidth: '51px',
    height: '20px',
    borderRadius: '8px',
    padding: '0px, 8px, 0px, 8px',
    gap: '4px',
    textAlign: 'center',
    marginTop: '4px'
  },
  

}));


const CameraMetadataCard = ({minShutterSpeed, maxShutterSpeed, hasAperturePriority, hasShutterPriority, hasBulbMode, requiresBattery}) => {
  const classes = useStyles();


  const greenOrRed = (isGreen) => {
    return isGreen ? ACTIVATED_COLOR : LIGHT_RED
  };

  return (
      <div className={classes.displayCard}>
        <div className={classes.shutterText}>
          Shutter Speeds
        </div>
        <div className={classes.shutterSpeeds}>
          <div>{minShutterSpeed}</div>
          <div>{maxShutterSpeed}</div>
        </div>
        <Divider></Divider>
        <div className={classes.greenRedHighlight} style={{background: greenOrRed(requiresBattery)}} > Requires Battery</div>
        <div className={classes.greenRedHighlight} style={{background: greenOrRed(hasAperturePriority)}} > Aperture Priority</div>
        <div className={classes.greenRedHighlight} style={{background: greenOrRed(hasShutterPriority)}} > Shutter Priority</div>
        <div className={classes.greenRedHighlight} style={{background: greenOrRed(hasBulbMode)}} > Bulb Mode</div>

      </div>
  );
};

CameraMetadataCard.propTypes = {

};

export default CameraMetadataCard;
