import React from 'react'
import AboutUsBanner from '../../Components/Forms/AboutUsBanner'
import StaffAgency from '../../Components/Forms/StaffAgency'
import Button from '../../Components/ui/Button'


export default function AboutUs() {
  return (
    <>
        <AboutUsBanner />
        <div className="container-fluid bg-light p-5">
          <div className="container p-5"> 
            <div className="row g-5 align-items-center">
              <div className="phone col-lg-6 col-12">
                <img src={require("../../Assets/img/about-us-img-1.jpg")} alt="" className='w-100' />
               </div>
               <div className='col-lg-6 col-12'>
                <p className='text-secondary lh-1'>SEARCH PLACES</p>
                <h2 className='fs-1 fw-normal lh-base'>People's Experiences</h2>
                <p className='text-secondary lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas. Nisl vel pretium.</p>
                <Button />
               </div>
            </div>
          </div>
        </div>
        <StaffAgency />
        <div className="container-fluid bg-light p-5">
          <div className="container p-5"> 
            <div className="row g-5 align-items-center">       
               <div className='col-lg-6 col-12'>
                <p className='text-secondary lh-1'>SEARCH PLACES</p>
                <h2 className='fs-1 fw-normal lh-base'>People's Experiences</h2>
                <p className='text-secondary lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas. Nisl vel pretium.</p>
                <Button />
               </div>
               <div className="phone col-lg-6 col-12">
                <img src={require("../../Assets/img/about-us-img-2.jpg")} alt="" className='w-100' />
               </div>
            </div>
          </div>
        </div>
    </>
  )
}
