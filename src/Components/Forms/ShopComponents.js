import React from 'react'

export default function ShopComponents() {
  return (
    <>
        <div className="container-fluid position-relative gx-0 ">
        <div className="">
          <img src={require('../../Assets/img/Banner-shop1.jpg')} alt="Shop" className='w-100' />
        </div>
        <h2 className='bg-dark text-white px-4 position-absolute top-50 start-50 translate-middle '>Shop</h2>
      </div>
    </>
  )
}
