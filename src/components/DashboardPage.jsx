import React, {useState, useEffect, useCallback} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
// import FavoritesContainer from './Favorites/FavoritesContainer';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from './Carousel/Carousel';
import {ICON_LINKS} from '../static/icons/icon_links'
import DashboardPieChart from './Charts/DashboardPieChart';
import { BORDER_COLOR, PRIMARY_BACKGROUND_COLOR, SECONDARY_BACKGROUND_COLOR } from '../lib/styles';
const useStyles = makeStyles(() => ({
  mainLayout: {
    background: PRIMARY_BACKGROUND_COLOR,
    paddingTop: '10px',
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
    background: SECONDARY_BACKGROUND_COLOR,
    display: 'flex',
    marginTop: '20px',
    justifyContent: "center",
    borderRadius: '20px',
    borderColor: BORDER_COLOR,
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
    // borderColor: BORDER_COLOR,
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
  // const [favoritesList, setFavoritesList] = useState([]);
  const [addedLensFilter, setAddedLensFilter] = useState(null);
  const [addedCameraFilter, setAddedCameraFilter] = useState(null);

  const buildURLWithFilter = useCallback(() => {
    let cameraURL = 'cameras'
    let lensURL = 'lenses'
    let cameraFavorites = null
    if (addedCameraFilter) {
      addedCameraFilter.field === 'Favorites' ? cameraFavorites = true :cameraURL = cameraURL + '?' + addedCameraFilter.field + '=' + addedCameraFilter.name
      
    } 
    if (addedLensFilter) {
      lensURL = lensURL + '?' + addedLensFilter.field + '=' + addedLensFilter.name
    } 

    return ({cameraURL:cameraURL, lensURL:lensURL, cameraFavorites: cameraFavorites})

  }, [addedLensFilter, addedCameraFilter]);

  useEffect(() => {
      setCameraList(null);
      fetchFromAPI(buildURLWithFilter().cameraURL)
        .then((data) => {
          const cams = data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name, lens_mount_uuid: v?.lens_mount?.uuid}))

          // USING SELF TIMER BOOL AS FAV BC LAZY
          // displayedItem?.self_timer
          const favs = cams.filter(function (fav) {
            return fav?.self_timer
          });

          buildURLWithFilter().cameraFavorites ? setCameraList(favs) : setCameraList(cams)


          // setFavoritesList(favs)

          setCamerasLoading(false)})
      }, [buildURLWithFilter, camerasLoading]);

  useEffect(() => {
    setLensList(null);
      fetchFromAPI(buildURLWithFilter().lensURL)
        .then((data) => {
        setLensList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
        setLensesLoading(false)})
      }, [buildURLWithFilter, lensesLoading]);
      
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

              {cameraList && (<Carousel filterType='cameras' setAddedFilter={setAddedCameraFilter} addedFilter={addedCameraFilter} showFilters={true} displayItems={cameraList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Cameras'} titleText={'Cameras'}/>)}
            </div>
          </div>
          <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
              {lensList &&(<Carousel filterType='lenses' setAddedFilter={setAddedLensFilter}  addedFilter={addedLensFilter} showFilters={true} displayItems={lensList} carouselIconSource={ICON_LINKS.carouselIconSourceLens} displayType={'Lenses'} titleText={'Lenses'}/>)}
            </div>
          </div>
        </div>
          {/* <div className={classes.favoritesContainer}>
            <FavoritesContainer displayItems={favoritesList} carouselIconSource='../static/icons/CamFavIcon.svg' displayType={'Cameras'} titleText={'Favorite Cameras'}/>
          </div> */}
        
      </div>

    </div>
  )
}}

export default DashboardPage