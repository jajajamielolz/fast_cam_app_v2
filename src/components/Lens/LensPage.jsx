import React, {useState, useEffect} from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import LensDisplayCard from './LensDisplayCard';
import Carousel from '../Carousel/Carousel';
import {ICON_LINKS} from '../../static/icons/icon_links'
import { BORDER_COLOR, SECONDARY_BACKGROUND_COLOR, PRIMARY_BACKGROUND_COLOR } from '../../lib/styles';
import {makeStyles} from '@material-ui/core/styles';


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
  }

}));

const LensPage = () => {
  const classes = useStyles();

  const [camerasLoading, setCamerasLoading] = useState(true);
  const [camerasItemsList, setCamerasItemsList] = useState([]);
  const [lensLoading, setLensLoading] = useState(true);
  const [activeLens, setActiveLens] = useState(null);
  useEffect(() => {
    const lensUUID = window.location.pathname.split('/')[2]
    setActiveLens(null);
      fetchFromAPI(`lenses?uuid=${lensUUID}`)
        .then((data) => {
        setActiveLens(data?.[0])
        setLensLoading(false)})
      }, [lensLoading]);

  useEffect(() => {
    setCamerasItemsList(null);
    const lensMountName = activeLens?.lens_mount?.name
    if (lensMountName){
        fetchFromAPI(`cameras?lens_mount_name=${lensMountName}`)
        .then((data) => {
        setCamerasItemsList(data)
        setCamerasLoading(false)})
    }
      }, [lensLoading, activeLens]);
      
      if (!lensLoading && !camerasLoading) {

  return (
    <div className={classes.page}>
      <div className={classes.displayAndMetadataRow}>
        <div className={classes.displayCard} >
          <LensDisplayCard hideMount={false} lensMount={activeLens?.lens_mount?.name} manufacturer={activeLens?.manufacturer.name} modelName={activeLens?.name} minAperture={activeLens?.min_aperture} maxAperture={activeLens?.max_aperture}></LensDisplayCard>
        </div>
        <div className={classes.metadataCardContainer}>
        </div>
      </div>
      <div className={classes.carouselContainer}>
        <div className={classes.carousel}>
          <Carousel displayItems={camerasItemsList} carouselIconSource={ICON_LINKS.carouselIconSourceCamera} displayType={'Cameras'}/>
        </div>
      </div>
    </div>
  )
}}
export default LensPage