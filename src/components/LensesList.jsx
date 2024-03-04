import React from 'react'
import LensFullFeatureCrudGrid from './LensFullFeatureCrudGrid'
import {getGridNumericOperators} from '@mui/x-data-grid'
const APERTURE_VALUES=[1.2, 1.4, 1.7, 1.9, 2.0, 2.8, 3.5, 4.0, 5.6, 8.0, 11.0, 16.0, 22.0]

const LensesList = ({lensList, lensesLoading, setLensesLoading}) => {


    if (!lensesLoading) {
      console.log(lensList)

      return (
      <div>
    <LensFullFeatureCrudGrid
    initialRows={lensList}
    tableColumns={tableColumns}
    setUpdate={setLensesLoading}
    />
    </div>
  )}

}

const tableColumns =  [
  { field: 'name', headerName: 'Lens Name', width: 180, editable: true },
{
  field: 'lens_mount',
  headerName: 'Lens Mount',
  width: 110,
  align: 'left',
  headerAlign: 'left',
  editable: false,
},
{
  field: 'manufacturer_name',
  headerName: 'Manufacturer',
  width: 110,
  editable: false,
  // could add this in if I wanted to be able to select and quick change the value ?
  // type: 'singleSelect',
  // valueOptions: ['Market', 'Finance', 'Development'],
},
{
  field: 'min_aperture',
  headerName: 'Min Aperture',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: APERTURE_VALUES,
  filterOperators: getGridNumericOperators()
},
{
  field: 'max_aperture',
  headerName: 'Max Aperture',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: APERTURE_VALUES.reverse(),
  filterOperators: getGridNumericOperators()
},

]


export default LensesList