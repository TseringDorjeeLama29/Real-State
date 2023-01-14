import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <>
        <button type="submit" className="btn-component btn btn-success mx-4 text-uppercase d-inline-block py-2 px-4 my-4"><Link to={'/location'} className='text-decoration-none text-light'>Seach Places</Link> </button>
    </>
  )
}
