import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import CamerasList from './components/CamerasList'
import CameraPage from './components/CameraPage'
import LensPage from './components/LensPage'
import AddLens from './components/AddLens'
import { fetchFromAPI } from './utils/fetchFromAPI'



function App() {
    const [camerasLoading, setCamerasLoading] = useState(true);
    const [cameraList, setCameraList] = useState([]);
    useEffect(() => {
        setCameraList(null);



        fetchFromAPI(`cameras`)
          .then((data) => {
            console.log(data)
            setCameraList(data?.map(v => ({...v, id: v?.uuid, manufacturer_name: v?.manufacturer?.name, lens_mount: v?.lens_mount?.name})));
          setCamerasLoading(false)})
        }, [camerasLoading]);

        if (!camerasLoading) {

 return (

    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
        
            <AddLens />
            <Routes>
                <Route path="/" exact element={null} />
                <Route path="/camera/:uuid" element={<CameraPage />} />                
                <Route path="/lens/:uuid" element={<LensPage />} />                
            </Routes>

            
        </Box>

        
        <CamerasList cameraList={cameraList} camerasLoading={camerasLoading} setCamerasLoading={setCamerasLoading}/>

    </BrowserRouter>
  )}}


export default App