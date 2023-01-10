import React from 'react'
import Button from '../../Components/ui/Button'
import CategoryPeopleData from '../../Data/CategoryPeopleData'

export default function CategoryPeople() {
  return (
    <>
        <div className="container mt-5 py-5">
          <div className="row g-3">
            {CategoryPeopleData.map((value) => (
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                      <img src={value.img} alt="" className='w-100' />
                      <h5 className=''>{value.title}</h5>
                      <p className='text-secondary'>{value.body}</p>
                    </div>
                  ))}
                  </div>
        </div>
        <div className="container-fluid bg-light">
          <div className="container p-5"> 
            <div className="row g-5 align-items-center">
              <div className="phone col-lg-6 col-12">
                <img src={require("../../Assets/img/mobile.png")} alt="" className='w-100' />
               </div>
               <div className='col-lg-6 col-12'>
                <p className='text-secondary lh-1'>SEARCH PLACES</p>
                <h2 className='fs-1 fw-normal lh-base'>People's Experiences</h2>
                <p className='text-secondary lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas. Nisl vel pretium.</p>
                <Button />
               </div>
            </div>
          </div>
        </div>
    </>
  )
}
