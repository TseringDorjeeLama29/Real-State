import React from 'react'
import ReactDOM from "react-dom";
import Banner from './Home/Banner'
import BannerMid from './Home/BannerMid'
import FeatureItem from './Home/FeatureItem'
import StaffMembers from './Home/StaffMembers'
import SwiperPlace from './Home/SwiperPlace'
import "swiper/css/bundle";
import "../Assets/css/Swiper.css";
import BannerEnd from './Home/BannerEnd';
import CategoryPeople from './Home/CategoryPeople';
import SwiperEnd from './Home/SwiperEnd';


export default function Home() {
  return (
    <>
        <Banner />
        <FeatureItem />
        <BannerMid />
        <StaffMembers />
        <SwiperPlace />
        <BannerEnd />
        <CategoryPeople />  
        <SwiperEnd />

        
    </>
  )
}
