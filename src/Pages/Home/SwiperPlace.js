import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperData from "../../Data/SwiperData";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";

export default function SwiperPlace() {      
  return (
    <>
        <div className="container-fluid">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    loop = { true }
                    loopFillGroupWithBlank = {true}
                    autoplay={{
                      delay:2500,
                      disableOnInteraction:false,
                  }}
                  modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                     {SwiperData.map((value) => (
                            <div className="row">
                                <div className="col-lg-3 py-5">
                        <SwiperSlide>
                                
                                <img src={value.img} alt={value.title} className="" />
                                    
                        </SwiperSlide>
                                </div>
                            </div>
                     ))}                                
                  </Swiper>
        </div>
        <div className="container-fluid  p-5">
          <div className="container d-xl-flex flex-row  d-lg-flex align-items-center ">
            <div className="col-lg- fs-4 fw-bolder mx-5"><h4>Find a New Palace</h4></div>
            <div className="palace col-lg-">
                        <ul className="mb-0  ">
                            <li className="d-md-block d-xl-inline d-lg-inline "><a href=""><i className="bi bi-buildings  "></i> Apartment</a></li>
                            <li className='border-start d-md-block d-xl-inline d-lg-inline '><a href=""><i className="bi bi-people-fill "></i> Condominium</a></li>
                            <li className='border-start d-md-block d-xl-inline d-lg-inline '><a href=""><i className="bi bi-house "></i> House</a></li>
                            <li className='border-start d-md-block d-xl-inline d-lg-inline '><a href=""><i className="bi bi-printer "></i> Office</a></li>
                            <li className='border-start d-md-block d-xl-inline d-lg-inline '><a href=""><i className="bi bi-bag "></i> Shop</a></li>
                        </ul>
                    </div>
          </div>
        </div>

    </>
  )
}
