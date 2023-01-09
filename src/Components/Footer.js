import React from 'react'
import Submit from './ui/Submit'

export default function Footer() {
  return (
    <>  
        <div className="container-fluid bg-black py-5">
            <div className="container py-5">
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img src={require('../Assets/img/Logo.png')} alt="Logo" className="footer-logo " />
                                <p className='text-light'>Lorem ipsum dolor sit amet, consect adipiscing elit est pellen</p>       
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 text-light">
                                <h5>Contact</h5>
                                <p>754 NE 60th St Miami, FL 33879</p>
                                <p>754 NE 60th St Miami, FL 33879</p>
                                <p>754 NE 60th St Miami, FL 33879</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-12 text-light">
                        <p>Newsletter Subscribe</p>
                        <Submit />
                        <p className='mt-4'>Don’t forget to follow us on:</p>
                        <ul className='ps-0'>
                            <li className='d-inline'><a href="" className='text-decoration-none text-light me-3'><i class="bi bi-twitter"></i></a></li>
                            <li className='d-inline'><a href="" className='text-decoration-none text-light me-3'><i class="bi bi-pinterest"></i></a></li>
                            <li className='d-inline'><a href="" className='text-decoration-none text-light me-3'><i class="bi bi-facebook"></i></a></li>
                            <li className='d-inline'><a href="" className='text-decoration-none text-light me-3'><i class="bi bi-instagram"></i></a></li>
                            <li className='d-inline'><a href="" className='text-decoration-none text-light me-3'><i class="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <p className='mt-4 text-light text-center'>© 2018 <span><a href='' className='text-light text-decoration-none'>Qode Interactive</a></span>, All Rights Reserved</p>
            
        </div>
    </>
  )
}
