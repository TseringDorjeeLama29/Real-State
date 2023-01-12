import React from 'react'

export default function AboutUsBanner() {
  return (
    <>
        <div className="container-fluid position-relative gx-0">
                <img src={require('../../Assets/img/about-us-title-img.jpg')} alt='image' className='img-fluid ' />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-light ">
                <h2 className='fs-1 fw-normal'>About Us</h2>
                <p className='fs-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eveniet sed eligendi, itaque atque soluta </p>
            </div>
        </div>
    </>
  )
}
