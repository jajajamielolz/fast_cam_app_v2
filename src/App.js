import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CamerasPage from './components/CamerasPage'
import LensesPage from './components/LensesPage'

import NavBar from './components/NavBar'



function App() {

 return (

    <BrowserRouter>
          <NavBar></NavBar>
            <Routes>
                <Route path="/" exact element={<CamerasPage />} />
                <Route path="/camera/:uuid" element={<CamerasPage />} />                
                <Route path="/lenses/" element={<LensesPage />} />                
            </Routes>

            

        
    </BrowserRouter>
  )}


export default App