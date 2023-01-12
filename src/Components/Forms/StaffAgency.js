import React from 'react'
import StaffAgencyData from '../../Data/StaffAgencyData'

export default function StaffAgency() {
  return (
    <>
      <div className="container-fluid  my-5">
        <h1 className='my-3'>Check out our featured items</h1>
        <div className="row  g-0">
          {StaffAgencyData.map((value) => (
            <div className="col-12 col-md-6 col-lg col-xl col-sm-12 my-4 ">
              <div className="Feature-card position-relative card mx-3" >
                <img src={value.image} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mb-1 fw-bolder">{value.title}</h5>
                  <p className="card-text mb-1 fw-semibold">{value.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
