import React from 'react'
import Staff from '../../Data/Staff'

export default function StaffMembers() {
  return (
    <>
        <div className="container p-5 mt-5">
            <p className='text-secondary'>SEARCH PLACES</p>
            <h2 className='fw-light fs-1'>People's Experiences</h2>
            <div className="row g-lg-5 g-2">
                {Staff.map((value) => (
                <div className="col-lg-6">
                    <div className="d-flex mb-3 mt-5 align-items-center " >
                        <div className='me-5'>
                            <img src={value.img} />
                        </div>
                        <div>
                            <h5>{value.name}</h5>
                            <p>{value.title}</p>
                        </div>
                    </div>
                    <p className='text-secondary'>{value.body}</p>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}
