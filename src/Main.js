import React, { useState } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import RealStateAgency from './Pages/Forms/RealStateAgency';
import AboutUs from './Pages/Forms/AboutUs';
import Location from './Pages/Forms/Location';
import FeatureItemsDetails from './Pages/Details/FeatureItemsDetails';
import Shop from './Pages/Forms/Shop';
import ShopItem from './Pages/Details/ShopItem';
import Cart from './Components/ui/Cart';
// import Login from './Components/ui/Login';

export default function Main() {
  const [cart, setCart] = useState([]);

    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id)
        isPresent = true;
      })
      if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000)
        return;
      }
        setCart([...cart, item]);
    }

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
    
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
      };

    let size = cart.length;
  return (
    <>

      <Navbar size = {size} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realState" element={<RealStateAgency />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/featureItem/:featureId" element={<FeatureItemsDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopItem/:shopId" element={<ShopItem handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart = {setCart} handleChange = {handleChange} />} />
        {/* <Route path="/login" element={<Login/>} /> */}
      </Routes>
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </>
  )
}
