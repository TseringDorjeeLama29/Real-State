import React from 'react'
import Button from '../../Components/ui/Button'
import BestPlaces from '../../Data/BestPlaces'
import CheckBoxData from '../../Data/CheckBoxData'

export default function Location() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.792367921258!2d85.36529494999999!3d27.74203545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1670229335808!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-flex align-items-center justify-content-between">

              <div className="location-right my-4">
                <ul className='mb-0'>
                  <li><a href=""><i class="bi bi-buildings"></i> Apartment</a></li>
                  <li className='border-start'><a href=""><i className="bi bi-people-fill"></i> Condominium</a></li>
                  <li className='border-start'><a href=""><i className="bi bi-house"></i> House</a></li>
                  <li className='border-start'><a href=""><i className="bi bi-printer"></i> Office</a></li>
                  <li className='border-start'><a href=""><i className="bi bi-bag"></i> Shop</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-light border-dark border py-1 px-3 dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <div className="row px-3 align-items-center">
              <div className="col-lg-4">
                <div>
                  <label htmlFor="customRange1" className="form-label">Example range</label>
                  <input type="range" className="form-range" id="customRange1" />
                </div>

              </div>
              <div className="col-lg-4">
                <p className='mb-0'>Choose a Location</p>
                <div className="dropdown">
                  <button className="btn btn-light border-dark border  btn-sm px-4 dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Location
                  </button>
                  <ul className="dropdown-menu py-1 px-3">
                    <li><a className="dropdown-item" href="#">All Location</a></li>
                    <li><a className="dropdown-item" href="#">Amseterdam</a></li>
                    <li><a className="dropdown-item" href="#">London</a></li>
                    <li><a className="dropdown-item" href="#">Lucerne</a></li>
                    <li><a className="dropdown-item" href="#">New york</a></li>
                    <li><a className="dropdown-item" href="#">Paris</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <label htmlFor="inputPassword5" className="form-label">Size</label>
                  <input type="text" id="inputPassword5" className="form-control Location-input" placeholder='Max' aria-describedby="passwordHelpBlock" />
                  <input type="text" id="inputPassword5" className="form-control Location-input" placeholder='Min' aria-describedby="passwordHelpBlock" />
                </div>

              </div>
            </div>
            <div className='container py-4'>
              <div className="row">
                {
                  CheckBoxData.map((val) => (
                <div className="col-lg-3 lh-lg">
                  <div className="form-check ">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      {val.title}
                    </label>
                  </div>
                </div>
                  ))
                }
              </div>
            </div>
            <Button />

            <div className="container  my-5">
            <h1 className='my-3'>Searching for the Best Places?</h1>
            <div className="row g-3">
              {BestPlaces.slice(0,6).map((value) => ( 
                  <div className="col-12 col-md-6 col-lg-6 my-4 ">
                <div className="Feature-card position-relative card mx-3" >
                  <p className='position-absolute top-0 end-0 bg-success text-light p-1 b-3'>{value.condition}</p>
                  <img src={value.image} className="card-img-top w-100" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mb-1 fw-bolder">{value.title}</h5>
                    <p className="card-text mb-1 fw-semibold">{value.body}</p>
                    <p className="card-text">{value.price}</p>
                  </div>
                </div>
                  </div>
              ))}
              </div>
            </div>    




          </div>
        </div>
      </div>
    </>
  )
}
