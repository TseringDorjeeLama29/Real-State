import React from 'react'

export default function Login() {
  return (
    <>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn w-50 p-2" ata-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
                            <button className="btn1 w-50 " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>
                        </div>
                        <div className="modal-body px-4">
                            <input type="email" placeHolder='Email*' className='w-100 p-2' />
                            <input type="password" placeHolder='Password*' className='w-100 p-2 mt-4' />
                            <div className="dflex justify-content-between">
                                <div className="input-group my-3 d-flex justify-content-between align-items-center">
                                    <div className="input-group-text ">
                                        <input className="form-check-input mt-0 me-2 " type="checkbox" value="" aria-label="Checkbox for following text input" />
                                        <p className='mt-3'>Remember me?</p>
                                    </div>
                                    <p className='mt-2'>Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer p-3 text-center">
                            <button className='btn  w-100 p-2' >LOGIN</button>
                            <p className='w-100'>or Connect with Social Networks</p>
                            <i className="fa fa-facebook-official w-100" aria-hidden="true"></i>
                            <p className='w-100'>By creating an account you are accepting our Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn btn-primary w-50 p-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
                            <button className="btn1 btn-primary w-50" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Register</button>

                        </div>
                        <div className="modal-body px-5">
                            <input type="text" placeHolder='Username*' className='w-100 p-2 my-3' />
                            <input type="email" placeHolder='Email*' className='w-100 p-2' />
                            <input type="password" placeHolder='Password*' className='w-100 p-2 my-3' />
                            <input type="password" placeHolder='Re-enter Password*' className='w-100 p-2 ' />
                        </div>
                        <div className="modal-footer">
                            <p class='p-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" className='text-info-emphasis'>privacy policy.</a> </p>
                            <div className="options1 w-100 px-3">
                                <select className='m-3 p-2'>
                                    <option value="All Locations">Agency</option>
                                    <option value="Paris">Owner/Buyer</option>
                                    <option value="Amsterdam">Agent</option>
                                </select>
                            </div>
                        <button className="btn w-100 p-2 mb-3">Login</button>    
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
