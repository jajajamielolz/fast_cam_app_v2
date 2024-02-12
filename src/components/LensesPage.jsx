import React, {useState, useEffect} from 'react'
import LensesList from './LensesList'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const LensesPage = () => {

  const [lensesLoading, setLensesLoading] = useState(true);
  const [lensList, setLensList] = useState([]);
  useEffect(() => {
      setLensList(null);



      fetchFromAPI(`lenses`)
        .then((data) => {
        setLensList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
        setLensesLoading(false)})
      }, [lensesLoading]);

      if (!lensesLoading) {
  return (
    <LensesList lensList={lensList} lensesLoading={lensesLoading} setLensesLoading={setLensesLoading}/>

  )
}}

export default LensesPage