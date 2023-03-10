import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import SwiperEndData from '../../Data/SwiperEndData';
import LogoData from '../../Data/LogoData';
import { Link } from 'react-router-dom';

export default function SwiperEnd() {
  return (
    <>
        <div className="container-fluid mt-5">
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    loop = { true }
                    loopFillGroupWithBlank = {true}
                    autoplay={{
                      delay:2500,
                      disableOnInteraction:false,
                  }}
                  breakpoints={{
                    420: {
                      slidesPerView : 1,
                      spaceBetween : 20,
                    },
                    650: {
                      slidesPerView : 2,
                      spaceBetween : 20,
                    },
                    1024: {
                      slidesPerView : 3,
                      spaceBetween : 50,
                    },
                  }}
                  modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                     {SwiperEndData.map((value) => (
                            <div className="row">
                                <div className="col-lg-3 py-5">
                        <SwiperSlide>
                                
                                <img src={value.img} alt={value.title} className="w-100" />
                                <p className="position-absolute btn btn-dark px-3 py-2 start-0 bottom-0"><Link to={'/location'} className="text-decoration-none text-white fw-light">{value.title}</Link></p>
                                    
                        </SwiperSlide>
                                </div>
                            </div>
                     ))}                                                 
                  </Swiper>
        </div>
        <div className="container-fluid">
        <Swiper className='py-3 text-dark'
                    spaceBetween={0}
                    slidesPerView={7}
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
                     {LogoData.map((item) => (
                            <div className="row  text-dark">
                                <div className=" py-5">
                        <SwiperSlide className='py-5'>
                                
                                <img src={item.img} alt={item.title} className="" />
                                    
                        </SwiperSlide>
                                </div>
                            </div>
                     ))}                                                 
                  </Swiper>
        </div>
    </>
  )
}
