import React from 'react'
import FullFeaturedCrudGrid from './FullFeaturedCrudGrid'
import {getGridNumericOperators} from '@mui/x-data-grid'
const SHUTTER_SPEEDS=[15, 8, 4, 2, 1, 1/2, 1/4, 1/8, 1/15, 1/30, 1/60, 1/125, 1/250, 1/500, 1/1000, 1/2000]

const CamerasList = ({cameraList, camerasLoading, setCamerasLoading}) => {


    if (!camerasLoading) {
      console.log(cameraList)

      return (
      <div>
    <FullFeaturedCrudGrid
    initialRows={cameraList}
    tableColumns={tableColumns}
    setUpdate={setCamerasLoading}
    />
    </div>
  )}

}

const tableColumns =  [
  { field: 'name', headerName: 'Camera Name', width: 180, editable: true },
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
  field: 'min_shutter_speed',
  headerName: 'Min Shutter',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: SHUTTER_SPEEDS,
  filterOperators: getGridNumericOperators()
},
{
  field: 'max_shutter_speed',
  headerName: 'Max Shutter',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: SHUTTER_SPEEDS.reverse(),
  filterOperators: getGridNumericOperators()
},
{
  field: 'aperture_priority',
  headerName: 'Aperture Prio',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: ['true', 'false'],
},
{
  field: 'shutter_priority',
  headerName: 'Shutter Prio',
  width: 110,
  editable: true,
  type: 'singleSelect',
  valueOptions: ['true', 'false'],
},
{
  field: 'battery_required',
  headerName: 'Battery',
  width: 80,
  editable: true,
  type: 'singleSelect',
  valueOptions: ['true', 'false'],
},
{
  field: 'bulb_mode',
  headerName: 'Bulb',
  width: 80,
  editable: true,
  type: 'singleSelect',
  valueOptions: ['true', 'false'],
},
{
  field: 'manual',
  headerName: 'Manual',
  width: 80,
  editable: true,
  type: 'singleSelect',
  valueOptions: ['true', 'false'],
},


]


export default CamerasList