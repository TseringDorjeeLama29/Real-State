import React from 'react'

export default function BannerMid() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-12 bg-light p-5">
                    <div className='p-5 ms-4'>
                        <h2 className='fw-light fs-1 my-4'>Newly-launched campaign in Whitby agencies</h2>
                        <ul className='text-secondary'>
                            <li className='lh-lg'>Ut aliquam purus sit amet luctus</li>
                            <li className='lh-lg'>Duis convallis convallis tellus id</li>
                            <li className='lh-lg'>Aliquet risus feugiat ante dictum at</li>
                            <li className='lh-lg'>Sit amet justo donec enim diam vul</li>
                            <li className='lh-lg'>Nisi vitae suscipit tellus mauris</li>
                            <li className='list-unstyled'><img src={require('../../Assets/img/signature.png')}  /></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <img src={require('../../Assets/img/Banner2.jpg')} alt="background image" />
                </div>
            </div>
        </div>
    </>
  )
}
