import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid bg-black p-4">
        <div className="row text-white align-items-center">
          <div className="col-lg-2 text-lg-start text-center">
            <Link to={"/"} className=""><img src={require("../Assets/img/Logo.png")} alt="Logo" className='w-50 ' /></Link>
          </div>
          <div className="col-lg-2 border-start d-none d-sm-block">
            <p className='mb-0 ms-4 '>Unique Places to Stay</p>
          </div>
          <div className="col-lg-5 ">
            <nav className="navbar  navbar-expand-lg bg-black ">
              <div className="container-fluid ">
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon " />
                </button>
                <div className="navbar-main collapse navbar-collapse ms-5" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listings
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown ">
                      <a className="nav-link active text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elements
                      </a>
                      <ul className="dropdown-menu bg-black ">
                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                        <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
          <div className="col-lg-3 d-none d-sm-block">
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
