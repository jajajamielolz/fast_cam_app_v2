import React, {useState, useEffect} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import FavoritesContainer from './Favorites/FavoritesContainer';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from './Carousel/Carousel';
import {ICON_LINKS} from '../static/icons/icon_links'
import DashboardPieChart from './Charts/DashboardPieChart';

const useStyles = makeStyles(() => ({
  mainLayout: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartContainer: {

  },
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
  camerasAndLensesContainer: {

  },
  camerasLensesAndFavsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoritesContainer: {
    marginTop: '20px',
    marginLeft: '20px'
    // display: 'flex',
    // marginTop: '20px',
    // justifyContent: "center",
    // borderRadius: '20px',
    // borderColor: 'rgba(194,201,209, 0.5)',
    // border: '2px solid',
    // padding: '10px'
  },

}));


const DashboardPage = () => {
  const classes = useStyles();

  const [lensesLoading, setLensesLoading] = useState(true);
  const [lensList, setLensList] = useState([]);
  const [camerasLoading, setCamerasLoading] = useState(true);
  const [cameraList, setCameraList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(() => {
      setCameraList(null);
      fetchFromAPI(`cameras`)
        .then((data) => {
          const cams = data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name}))
          setCameraList(cams);

          // USING SELF TIMER BOOL AS FAV BC LAZY
          // displayedItem?.self_timer
          const favs = cams.filter(function (fav) {
            return fav?.self_timer
          });
          setFavoritesList(favs)

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
    <div className={classes.mainLayout}>
      <div className={classes.chartContainer}>
      {cameraList && (<DashboardPieChart itemsList={cameraList} titleText="Camera Distribution"/>)}
      {lensList && (<DashboardPieChart itemsList={lensList} titleText="Lens Distribution"/>)}
      </div>
      <div className={classes.camerasLensesAndFavsContainer}>
        <div className={classes.camerasAndLensesContainer}>
          <div className={classes.carouselContainer}>
            <div className={classes.carousel}>

              {cameraList && (<Carousel displayItems={cameraList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Cameras'} titleText={'Cameras'}/>)}
            </div>
          </div>
          <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
              {lensList &&(<Carousel displayItems={lensList} carouselIconSource={ICON_LINKS.carouselIconSourceLens} displayType={'Lenses'} titleText={'Lenses'}/>)}
            </div>
          </div>
        </div>
          <div className={classes.favoritesContainer}>
            <FavoritesContainer displayItems={favoritesList} carouselIconSource='../static/icons/CamFavIcon.svg' displayType={'Cameras'} titleText={'Favorite Cameras'}/>
          </div>
        
      </div>

    </div>
  )
}}

export default DashboardPage