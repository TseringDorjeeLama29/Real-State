import React from 'react'
import BannerEndData from '../../Data/BannerEndData'

export default function BannerEnd() {
  return (
    <>
        <div className="container banner-end py-5">
            <h2 className='my-5 fw-light fs-1'>Featured</h2>    
            {
                BannerEndData.map((val) => (
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="position-relative">
                                <img src={val.image} alt="" />
                            <div className="banner-end-absolute position-absolute">
                                <img src={val.img} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 banner-end-details">
                            <p className='fs-2 text-secondary fw-bold'>{val.price}</p>
                            <h5>{val.title}</h5>
                            <p>Property size:<br /> {val.Property}</p>
                            <p>Structure:<br />  {val.Structure}</p>
                            <p>Accommodation:<br />  {val.Accommodation}</p>
                            <p>Heating:<br />  {val.Heating}</p>
                        </div>
                    </div>
                ))
            }
        </div>  
    </>
  )
}
