import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import RealStateAgency from './Pages/Forms/RealStateAgency';

export default function Main() {
  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realState" element={<RealStateAgency />} />
      </Routes>
      
    </>
  )
}
