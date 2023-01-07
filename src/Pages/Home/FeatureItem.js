import React from 'react'
import FeauredItemData from '../../Data/FeaturedItemData'

export default function FeatureItem() {
  return (
    <>
            <div className="container  my-5">
            <h1 className='my-3'>Check out our featured items</h1>
            <div className="row g-3">
              {FeauredItemData.map((value) => ( 
                  <div className="col-12 col-md-6 col-lg-4 my-4 ">
                <div className="card mx-3" >
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
    </>
  )
}
