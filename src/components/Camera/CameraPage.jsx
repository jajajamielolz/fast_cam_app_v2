import React, {useState, useEffect} from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import CameraDisplayCard from './CameraDisplayCard';
import CameraMetadataCard from './CameraMetadataCard'
import Carousel from '../Carousel/Carousel.jsx';
import {ICON_LINKS} from '../../static/icons/icon_links'
import GoogleDrivePickerButton from '../GoogleDrivePickerButton.jsx';
import {makeStyles} from '@material-ui/core/styles';
import { BORDER_COLOR, SECONDARY_BACKGROUND_COLOR, PRIMARY_BACKGROUND_COLOR } from '../../lib/Styles';

const useStyles = makeStyles(() => ({
  page: {
    background: PRIMARY_BACKGROUND_COLOR
  },
  displayAndMetadataRow: {
    display: 'flex',
    paddingTop: '20px',
    justifyContent: "center",
  },
  metadataCardContainer: {
    alignContent:'center',
    maxWidth: '300px',
    marginLeft: '20px'
  },
  displayCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
      },
  carouselContainer: {
    justifyContent: 'center', 
    display: 'flex',
  },
  carousel: {
    background: SECONDARY_BACKGROUND_COLOR,
    display: 'flex',
    marginTop: '20px',
    justifyContent: "center",
    borderRadius: '20px',
    borderColor: BORDER_COLOR,
    border: '2px solid',
    padding: '10px'
  },

}));

const CameraPage = () => {
  const classes = useStyles();

  const [lensesLoading, setLensesLoading] = useState(true);
  const [lensItemsList, setLensItemsList] = useState([]);
  const [cameraLoading, setCameraLoading] = useState(true);
  const [activeCamera, setActiveCamera] = useState(null);
  useEffect(() => {
    const cameraUUID = window.location.pathname.split('/')[2]
    setActiveCamera(null);
      fetchFromAPI(`cameras?uuid=${cameraUUID}`)
        .then((data) => {
        setActiveCamera(data?.[0])
        setCameraLoading(false)})
      }, [cameraLoading]);

  useEffect(() => {
    setLensItemsList(null);
    const lensMountName = activeCamera?.lens_mount?.name
    if (lensMountName){
        fetchFromAPI(`lenses?lens_mount_name=${lensMountName}`)
        .then((data) => {
        setLensItemsList(data)
        setLensesLoading(false)})
    }
      }, [cameraLoading, activeCamera]);
      
      if (!cameraLoading && !lensesLoading) {

  return (
    <div className={classes.page}>
      
      <div className={classes.displayAndMetadataRow}>
        <div className={classes.displayCard} >
          <CameraDisplayCard lensMount={activeCamera?.lens_mount?.name} manufacturer={activeCamera?.manufacturer.name} modelName={activeCamera?.name} uuid={activeCamera?.uuid} isFavorited={activeCamera?.self_timer}></CameraDisplayCard>
          <GoogleDrivePickerButton/>
        </div>
        <div className={classes.metadataCardContainer}>
          <CameraMetadataCard 
          minShutterSpeed={activeCamera?.min_shutter_speed} 
          maxShutterSpeed={activeCamera?.max_shutter_speed} 
          hasAperturePriority={activeCamera?.aperture_priority} 
          hasShutterPriority={activeCamera?.shutter_priority} 
          hasBulbMode={activeCamera?.bulb_mode} 
          requiresBattery={activeCamera?.battery_required} 
          />
        </div>
      </div>
      <div className={classes.carouselContainer}>
        <div className={classes.carousel}>
          <Carousel displayItems={lensItemsList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Lenses'}/>
        </div>
      </div>
    </div>
  )
}}
export default CameraPage