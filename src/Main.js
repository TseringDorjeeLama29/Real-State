import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import RealStateAgency from './Pages/Forms/RealStateAgency';
import AboutUs from './Pages/Forms/AboutUs';

export default function Main() {
  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realState" element={<RealStateAgency />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      
    </>
  )
}
