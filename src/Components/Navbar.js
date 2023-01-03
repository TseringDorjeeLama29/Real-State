import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid bg-black p-4">
        <div className="row text-white align-items-center">
          <div className="col-lg-2">
            <Link to={"/"}><img src={require("../Assets/img/Logo.png")} alt="Logo" className='w-50' /></Link>
          </div>
          <div className="col-lg-2 border-start ">
            <p className='mb-0 ms-4'>Unique Places to Stay</p>
          </div>
          <div className="col-lg-5">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
                    <li className="nav-item dropdown">
                      <a className="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  )
}
