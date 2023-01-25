import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({size}) {
  return (
    <>
      <div className="Navbar-container container-fluid bg-black p-4 sticky-top">
        <div className="Navbar-flex row navbar-bar text-white align-items-center">
          <div className="navbar-img col-lg-2 text-lg-start text-center">
            <Link to={"/"} className=""><img src={require("../Assets/img/Logo.png")} alt="Logo" className='footer-logo ' /></Link>
          </div>
          <div className="col-lg-2 border-start d-none d-lg-block">
            <p className='mb-0 ms-4 '>Unique Places to Stay</p>
          </div>
          <div className="col-lg-5 navbar-bar">
            <nav className="navbar navbar-expand-lg bg-black ">
              <div className="container-fluid ">
                <button className="navbar_togglerid navbar-toggler bg-white fs-6 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-main collapse navbar-collapse ms-5" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
                      <Link className=" nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li className=''><hr className="dropdown-divider" /></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-white lh-lg" to="#">Main Home</Link></li>
                        <li className='border-bottom pb-1'><Link to={"/realState"} className="dropdown-item text-secondary lh-lg" >Real State Agency</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Apartments Home</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Map Home</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">City Properties</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-white" to={"/aboutus"}>About Us</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary" to="#">Process</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary" to="#">Pricing Packages</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary" to="#">Contact Us</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary" to="#">404 page</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listings
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider" /></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-white lh-lg" to={'/location'}>Property List</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Profiles</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Agency</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Agent</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Owner</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">User Dashboard</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
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
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-white lh-lg" to={'/shop'}>Shop List</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Single</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Layouts</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Shop Pages</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav  ms-2 mb-2 mb-lg-0 ">     
                    <li className="nav-item dropdown navbar-dropdown border-bottom lh-lg pb-1 nav-bottom">
                      <Link className="nav-link active text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elements
                      </Link>
                      <ul className="dropdown-menu navbar-dropdown-item bg-black p-3">
                        <li><hr className="dropdown-divider lh-lg" /></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-white lh-lg" to="#">Property</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Presentation</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Infographic</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Classic</Link></li>
                        <li className='border-bottom pb-1'><Link className="dropdown-item text-secondary lh-lg" to="#">Typographic</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 text-end d-lg-block">
            <div className="navbar-right"></div>
             <ul className='mb-0'>
                 <li className='border-start d-inline cart'><Link to={'/cart'} className=' text-decoration-none px-4'><i className="bi bi-basket3 text-white"></i><span>{size}</span></Link></li>
                 <li className='d-inline d-none d-lg-inline-block'><Link className='btn btn-dark text-decoration-none px-4' to="">Add Listings +</Link></li>
                <li className='d-inline px-4'><button type='button' className='bg-dark' data-bs-target='#exampleModalToggle' data-bs-toggle='modal'>  <i className="bi bi-person-fill text-white"></i></button></li>
              </ul>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn w-50 p-2 bg-success " ata-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
              <button className="btn w-50 bg-dark text-white p-2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>
            </div>
            <div className="modal-body px-4">
              <input type="email" placeHolder='Email*' className='w-100 p-2' />
              <input type="password" placeHolder='Password*' className='w-100 p-2 mt-4' />
              <div className="dflex justify-content-between">
                <div className="input-group my-3 d-flex justify-content-between align-items-center">
                  <div className="input-group-text ">
                    <input className="form-check-input mt-0 me-2 " type="checkbox" value="" aria-label="Checkbox for following text input" />
                    <p className='mt-3'>Remember me?</p>
                  </div>
                  <p className='mt-2'>Forgot Password?</p>
                </div>
              </div>
            </div>
            <div className="modal-footer p-3 text-center">
              <button className='btn bg-success text-white  w-100 p-2' >LOGIN</button>
              <p className='w-100'>or Connect with Social Networks</p>
              <div className='w-100'><i className="bi bi-facebook"></i></div>
              <p className='w-100'>By creating an account you are accepting our Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn text-white bg-dark w-50 p-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
              <button className="btn btn-primary w-50 w-50 bg-success text-white p-2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>

            </div>
            <div className="modal-body px-5">
              <input type="text" placeHolder='Username*' className='w-100 p-2 my-3' />
              <input type="email" placeHolder='Email*' className='w-100 p-2' />
              <input type="password" placeHolder='Password*' className='w-100 p-2 my-3' />
              <input type="password" placeHolder='Re-enter Password*' className='w-100 p-2 ' />
            </div>
            <div className="modal-footer">
              <p class='p-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" className='text-info-emphasis'>privacy policy.</a> </p>
              <div className="options1 w-100 px-3">
                <select className='m-3 p-2'>
                  <option value="All Locations">Agency</option>
                  <option value="Paris">Owner/Buyer</option>
                  <option value="Amsterdam">Agent</option>
                </select>
              </div>
              <button className="btn bg-success text-white w-100 p-2 mb-3">Login</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
