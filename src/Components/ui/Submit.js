import React from 'react'
import { Link } from 'react-router-dom'

export default function Submit() {
  return (
    <>
        <form >
              <div className="mb-3 d-inline-block">
                  <input type="email"   className="form-control d-inline-block" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
              </div>
              <button type="submit" className="btn btn-success border-dark mx-4 text-uppercase d-inline-block"><Link className='text-decoration-none text-light'>Subscribe</Link> </button>
          </form>
    </>
  )
}
