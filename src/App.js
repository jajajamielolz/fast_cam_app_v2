import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CamerasPage from './components/CamerasPage'
import LensesPage from './components/LensesPage'



function App() {

 return (

    <BrowserRouter>
        
            <Routes>
                <Route path="/" exact element={<CamerasPage />} />
                <Route path="/camera/:uuid" element={<CamerasPage />} />                
                <Route path="/lenses/" element={<LensesPage />} />                
            </Routes>

            

        
    </BrowserRouter>
  )}


export default App