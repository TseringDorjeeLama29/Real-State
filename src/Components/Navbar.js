import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <div className="Navbar-container container-fluid bg-black p-4 position-sticky top-0">
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
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-white lh-lg" to="#">Main Home</Link></li>
                        <li><Link to={"/realState"} className="dropdown-item text-secondary lh-lg" >Real State Agency</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Apartments Home</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Map Home</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">City Properties</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-white" to={"/aboutus"}>About Us</Link></li>
                        <li><Link className="dropdown-item text-secondary" to="#">Process</Link></li>
                        <li><Link className="dropdown-item text-secondary" to="#">Pricing Packages</Link></li>
                        <li><Link className="dropdown-item text-secondary" to="#">Contact Us</Link></li>
                        <li><Link className="dropdown-item text-secondary" to="#">404 page</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listings
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-white lh-lg" to="#">Property List</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Profiles</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Agency</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Agent</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Owner</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">User Dashboard</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black ">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><Link className="dropdown-item text-white lh-lg" to="#">Right Sidebar</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Left Sidebar</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">No Sidebar</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Single Post</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><Link className="dropdown-item text-white lh-lg" to="#">Shop List</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Single</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Layouts</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Pages</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elements
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li><Link className="dropdown-item text-white lh-lg" to="#">Property</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Presentation</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Infographic</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Classic</Link></li>
                        <li><Link className="dropdown-item text-secondary lh-lg" to="#">Typographic</Link></li>
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
                 <li className='border-start d-inline'><Link to="" className=' text-decoration-none px-4'><i className="bi bi-basket3 text-white"></i></Link></li>
                 <li className='d-inline'><Link className='btn btn-dark text-decoration-none px-4' to="">Add Listings +</Link></li>
                <li className='d-inline'><Link to="" className=' text-decoration-none px-4'><i className="bi bi-person-fill text-white"></i></Link></li>
              </ul>
          </div>
        </div>
      </div>

      
    </>
  )
}
