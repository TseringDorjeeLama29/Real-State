import React from 'react'
import BannerEndData from '../../Data/BannerEndData'

export default function BannerEnd() {
    return (
        <>
            <div className="container-fluid bg-light py-5 my-5">
                <div className="container banner-end  py-5 position-relative">
                    <h2 className='my-5 fw-light fs-1'>Featured</h2>
                    {
                        BannerEndData.map((val) => (
                            <div className="row g-5 z">
                                <div className="col-lg-8">
                                    <div className="position-relative">
                                        <img src={val.image} alt={val.title}  className='w-100'/>
                                        <div className="banner-end-absolute position-absolute">
                                            <img src={val.img} alt={val.title} className='w-100' />
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
                    <p className='heaven-text position-absolute '>from Heaven Apartments </p>
                </div>
            </div>
        </>
    )
}
