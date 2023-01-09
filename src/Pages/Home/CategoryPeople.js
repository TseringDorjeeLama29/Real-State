import React from 'react'
import CategoryPeopleData from '../../Data/CategoryPeopleData'

export default function CategoryPeople() {
  return (
    <>
        <div className="container mt-5 py-5">
          <div className="row g-3">
            {CategoryPeopleData.map((value) => (
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                      <img src={value.img} alt="" className='' />
                      <h5 className=''>{value.title}</h5>
                      <p className='text-secondary'>{value.body}</p>
                    </div>
                  ))}
                  </div>
        </div>
    </>
  )
}
