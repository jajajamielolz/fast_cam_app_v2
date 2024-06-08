import React, {useState, useEffect} from 'react'
import CamerasList from './CamerasList'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {makeStyles} from '@material-ui/core/styles';
import Carousel from './Carousel';
import {ICON_LINKS} from '../static/icons/icon_links'
const useStyles = makeStyles(() => ({

  carouselContainer: {
    justifyContent: 'center', 
    display: 'flex',
  },
  carousel: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: "center",
    borderRadius: '20px',
    borderColor: 'rgba(194,201,209, 0.5)',
    border: '2px solid',
    padding: '10px'
  },

}));


const DashboardPage = () => {
  const classes = useStyles();

  const [lensesLoading, setLensesLoading] = useState(true);
  const [lensList, setLensList] = useState([]);
  const [camerasLoading, setCamerasLoading] = useState(true);
  const [cameraList, setCameraList] = useState([]);
  useEffect(() => {
      setCameraList(null);
      fetchFromAPI(`cameras`)
        .then((data) => {
        setCameraList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
        setCamerasLoading(false)})
      }, [camerasLoading]);

  useEffect(() => {
    setLensList(null);
      fetchFromAPI(`lenses`)
        .then((data) => {
        setLensList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
        setLensesLoading(false)})
      }, [lensesLoading]);
      
      if (!camerasLoading && !lensesLoading) {
  return (
    <div>
      <div className={classes.carouselContainer}>
        <div className={classes.carousel}>
          <Carousel displayItems={cameraList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Cameras'} titleText={'Cameras'}/>
        </div>
      </div>
      <div className={classes.carouselContainer}>
        <div className={classes.carousel}>
          <Carousel displayItems={lensList} carouselIconSource={ICON_LINKS.carouselIconSourceLens} displayType={'Lenses'} titleText={'Lenses'}/>
        </div>
      </div>

    </div>
  )
}}

export default DashboardPage