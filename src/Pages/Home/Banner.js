import React from 'react'
import Button from '../../Components/ui/Button'

export default function Banner() {
    return (
        <>
            <div className="container-fluid banner_bg_img text-center py-5">               
                    <h1 className='text-white pt-5'>All you need is one click away.</h1>
                    <div className="items my-4">
                        <ul>
                            <li><a href=""><i class="bi bi-buildings"></i> Apartment</a></li>
                            <li className='border-start'><a href=""><i class="bi bi-people-fill"></i> Condominium</a></li>
                            <li className='border-start'><a href=""><i class="bi bi-house"></i> House</a></li>
                            <li className='border-start'><a href=""><i class="bi bi-printer"></i> Office</a></li>
                            <li className='border-start'><a href=""><i class="bi bi-bag"></i> Shop</a></li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <div className="flex-left me-5">
                        <div className="dropdown">
                            <button className="btn btn-light py-2 px-5 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu py-2 px-5">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        </div>
                        <div className="flex-right">
                        <div className="dropdown">
                            <button className="btn btn-light py-2 px-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu py-2 px-5">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <Button />
            </div>
        </>
    )
}
