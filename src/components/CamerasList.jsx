import React from 'react'
import FullFeaturedCrudGrid from './FullFeaturedCrudGrid'

const CamerasList = ({cameraList, camerasLoading, setCamerasLoading}) => {


    if (!camerasLoading) {return (
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
  width: 80,
  align: 'left',
  headerAlign: 'left',
  editable: false,
},
{
  field: 'manufacturer_name',
  headerName: 'Manufacturer',
  width: 220,
  editable: false,
  // could add this in if I wanted to be able to select and quick change the value ?
  // type: 'singleSelect',
  // valueOptions: ['Market', 'Finance', 'Development'],
}]


export default CamerasList