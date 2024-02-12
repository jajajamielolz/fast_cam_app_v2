import React, {useState, useEffect} from 'react'
import CamerasList from './CamerasList'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const CamerasPage = () => {

  const [camerasLoading, setCamerasLoading] = useState(true);
  const [cameraList, setCameraList] = useState([]);
  useEffect(() => {
      setCameraList(null);



      fetchFromAPI(`cameras`)
        .then((data) => {
        setCameraList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
        setCamerasLoading(false)})
      }, [camerasLoading]);

      if (!camerasLoading) {
  return (
    <CamerasList cameraList={cameraList} camerasLoading={camerasLoading} setCamerasLoading={setCamerasLoading}/>

  )
}}

export default CamerasPage