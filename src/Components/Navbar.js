import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="Navbar-container container-fluid bg-black p-4 position-fixed ">
        <div className="Navbar-flex row text-white align-items-center">
          <div className="navbar-img col-lg-2 text-lg-start text-center">
            <Link to={"/"} className=""><img src={require("../Assets/img/Logo.png")} alt="Logo" className='footer-logo ' /></Link>
          </div>
          <div className="col-lg-2 border-start d-none d-lg-block">
            <p className='mb-0 ms-4 '>Unique Places to Stay</p>
          </div>
          <div className="col-lg-5">
            <nav className="navbar navbar-expand-lg bg-black ">
              <div className="container-fluid ">
                <button className="navbar-toggler bg-white fs-6 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-main collapse navbar-collapse ms-5" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-white lh-lg" href="#">Main Home</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Real State Agency</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Apartments Home</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Map Home</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">City Properties</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-white" href="#">About Us</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Process</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Pricing Packages</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Contact Us</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">404 page</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listings
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-white lh-lg" href="#">Property List</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Profiles</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Agency</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Agent</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Owner</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">User Dashboard</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black ">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><a className="dropdown-item text-white lh-lg" href="#">Right Sidebar</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Left Sidebar</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">No Sidebar</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Single Post</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><a className="dropdown-item text-white lh-lg" href="#">Shop List</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Shop Single</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Shop Layouts</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Shop Pages</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elements
                      </a>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><a className="dropdown-item text-white lh-lg" href="#">Property</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Presentation</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Infographic</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Classic</a></li>
                        <li><a className="dropdown-item text-secondary lh-lg" href="#">Typographic</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="navbar-right"></div>
             <ul className='mb-0'>
                 <li className='border-start d-inline'><a href="" className=' text-decoration-none px-4'><i className="bi bi-basket3 text-white"></i></a></li>
                 <li className='d-inline'><a className='btn btn-dark text-decoration-none px-4' href="">Add Listings +</a></li>
                <li className='d-inline'><a href="" className=' text-decoration-none px-4'><i className="bi bi-person-fill text-white"></i></a></li>
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}
