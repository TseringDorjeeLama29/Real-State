import React from 'react'
import ReactDOM from "react-dom";
import Banner from './Home/Banner'
import BannerMid from './Home/BannerMid'
import FeatureItem from './Home/FeatureItem'
import StaffMembers from './Home/StaffMembers'
import SwiperPlace from './Home/SwiperPlace'
import "swiper/css/bundle";
import "../Assets/css/Swiper.css";


export default function Home() {
  return (
    <>
        <Banner />
        <FeatureItem />
        <BannerMid />
        <StaffMembers />
        <SwiperPlace />
    </>
  )
}
