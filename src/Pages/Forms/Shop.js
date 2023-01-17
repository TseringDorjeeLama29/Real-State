import React from 'react'
import { Link } from 'react-router-dom'
import BestPlaces from '../../Data/BestPlaces'
import ShopData from '../../Data/ShopData'
import ShopComponents from '../../Components/Forms/ShopComponents'

export default function Shop() {
  return (
    <>
      <ShopComponents />
      <div className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-lg-9">
            <div className="row g-1">
              {ShopData.map((value) => (
                <div className="col-12 col-md-6 col-lg-4 my-4 ">
                  <div className="  card mx-3" >
                    <img src={value.img} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title mb-1 fw-normal d-inline me-2"><Link to={`/shopItem/${value.id}`} className="text-hover text-decoration-none text-dark">{value.title}</Link></h5>
                      <p className="card-text d-inline fw-bolder fs-5 text-success ms-1">{value.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          <div className="col-lg-3">
            <div className="list-group">
              <h5 className=" list-group-item list-group-item-action bg-dark text-light " aria-current="true">
              Product categories
              </h5>
              <a href="#" className="list-group-item list-group-item-action">Design</a>
              <a href="#" className="list-group-item list-group-item-action">Furniture</a>
              <a href="#" className="list-group-item list-group-item-action">Interior</a>
              <a href="#" className="list-group-item list-group-item-action">Lifestyle</a>
              <a href="#" className="list-group-item list-group-item-action">Modern</a>
              <a href="#" className="list-group-item list-group-item-action">Style</a>
            </div>
            <div className='my-5'>
              <img src={require("../../Assets/img/Banner-shop.jpg")} alt="banner" className='w-100'  />
            </div>
          </div>       
        </div>
      </div>

    </>
  )
}
