import React, {useState, useEffect} from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import CameraDisplayCard from './CameraDisplayCard';
import CameraMetadataCard from './CameraMetadataCard'
import Carousel from '../Carousel';
import {ICON_LINKS} from '../../static/icons/icon_links'

const CameraPage = () => {
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
      }, [cameraLoading]);
      
      if (!cameraLoading && !lensesLoading) {

  return (
    <div>
        <CameraDisplayCard lensMount={activeCamera?.lens_mount?.name} manufacturer={activeCamera?.manufacturer.name} modelName={activeCamera?.name}></CameraDisplayCard>
        <CameraMetadataCard 
        minShutterSpeed={activeCamera?.min_shutter_speed} 
        maxShutterSpeed={activeCamera?.max_shutter_speed} 
        hasAperturePriority={activeCamera?.aperture_priority} 
        hasShutterPriority={activeCamera?.shutter_priority} 
        hasBulbMode={activeCamera?.bulb_mode} 
        requiresBattery={activeCamera?.battery_required} 
        />
        <Carousel displayItems={lensItemsList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Lenses'}/>
    </div>
  )
}}
export default CameraPage