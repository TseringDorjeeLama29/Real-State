import React from 'react'
import CategoryBestPlaces from '../../Components/Forms/CategoryBestPlaces'
import StaffAgency from '../../Components/Forms/StaffAgency'
import Button from '../../Components/ui/Button'

export default function RealStateAgency() {
  return (
    <>
      <div className="container-fluid realState_bg_img text-center py-5 position-relative">
        <div className="container position-absolute top-50 start-50 translate-middle">

          <h1 className='text-white pt-5'>Looking for a home made fun.</h1>
          <div className="items my-4">
            <ul>
              <li><a href=""><i class="bi bi-buildings"></i> Apartment</a></li>
              <li className='border-start'><a href=""><i className="bi bi-people-fill"></i> Condominium</a></li>
              <li className='border-start'><a href=""><i className="bi bi-house"></i> House</a></li>
              <li className='border-start'><a href=""><i className="bi bi-printer"></i> Office</a></li>
              <li className='border-start'><a href=""><i className="bi bi-bag"></i> Shop</a></li>
            </ul>
          </div>
          <div className="banner-button d-flex justify-content-center my-3">
            <div className="flex-left me-1">
              <div className="dropdown">
                <button className="btn btn-light py-2 px-5 dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Location
                </button>
                <ul className="dropdown-menu py-2 px-5">
                  <li><a className="dropdown-item" href="#">All Location</a></li>
                  <li><a className="dropdown-item" href="#">Amseterdam</a></li>
                  <li><a className="dropdown-item" href="#">London</a></li>
                  <li><a className="dropdown-item" href="#">Lucerne</a></li>
                  <li><a className="dropdown-item" href="#">New york</a></li>
                  <li><a className="dropdown-item" href="#">Paris</a></li>
                </ul>
              </div>

            </div>
            <div className="flex-right">
              <div className="dropdown">
                <button className="btn btn-light py-2 px-5 dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Statuses
                </button>
                <ul className="dropdown-menu py-2 px-5">
                  <li><a className="dropdown-item" href="#">All Statuses</a></li>
                  <li><a className="dropdown-item" href="#">For Rent</a></li>
                  <li><a className="dropdown-item" href="#">For Sale</a></li>
                  <li><a className="dropdown-item" href="#">Just Sold</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </div>
      <CategoryBestPlaces />
      <StaffAgency />

    </>
  )
}
