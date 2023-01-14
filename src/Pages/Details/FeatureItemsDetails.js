import React from 'react'
import { useParams } from 'react-router'
import FeauredItemData from '../../Data/FeaturedItemData';
import SwiperEnd from "../Home/SwiperEnd"


export default function FeatureItemsDetails() {
  let {featureId} = useParams();

  let featureItem = FeauredItemData.filter((item) => item.id == featureId);

  return (
    <>
      <div className="container-fluid p-3">
          {
            featureItem.map((val) => (
              <div className="row">
              <div className="col-lg-3">
                <h3 className='fw-normal fs-2'>{val.title}</h3>
                <ul className='mb-0 ps-0'>
                  <li className='d-inline pe-4'>28.06.2017</li>
                  <li className='d-inline px-4 text-success border-start border-end'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
                  <li className='d-inline px-4 '><i class="bi bi-eye-fill"></i> 3497</li>
                </ul>
              </div>
              <div className="col-lg-5">
                <ul className='mb-0 border-start border-end '>
                  <li className='d-inline-block px-2'><span className='fw-semibold'>Property size:</span> <br /> {val.Property}</li>
                  <li className='d-inline-block px-2'><span className='fw-bolder'>Structure:</span> <br />{val.Structure}</li>
                  <li className='d-inline-block px-2'><span className='fw-bolder'>Accommodation:</span> <br />{val.Accommodation}</li>
                  <li className='d-inline-block px-2'><span className='fw-bolder'>Heating:</span> <br />{val.Heating}</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <p className='fs-2 text-success fw-bold'>{val.price}</p>
              </div>
              <div className="col-lg-1">
                <p className='btn btn-success me-0'>{val.condition}</p>
              </div>
        </div>
            ))
          }
      </div>

      <SwiperEnd />
    </>
  )
}
