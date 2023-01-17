import React from 'react'
import { useParams } from 'react-router'
import ShopComponents from '../../Components/Forms/ShopComponents';
import SocialMedia from '../../Components/ui/SocialMedia';
import ShopData from '../../Data/ShopData';


export default function ShopItem() {
    let {shopId} = useParams();

    let shopValue = ShopData.find((item) => item.id == shopId);

  return (
    <>
        <ShopComponents />
        <div className="container p-5">
            <div className="row g-5 ">
                <div className="col-lg-6">
                    <div>
                        <img src={shopValue.img} alt='shopItem' className='w-100' />    
                    </div>  
                </div>
                <div className="col-lg-6 py-5">
                    <h3 className='fs-1 fw-normal'>{shopValue.title}</h3>
                    <p className='fs-2 text-success lh-lg'>{shopValue.price}</p>
                    <p className='fs-6 lh-base text-secondary'>{shopValue.body}</p>
                    <p className='mb-0 lh-lg text-secondary'>SKU: 00{shopValue.id}</p>
                    <p className='mb-0 lh-lg text-secondary'>Category: {shopValue.category}</p>
                    <p className='mb-0 lh-lg text-secondary'>tags: {shopValue.tags}</p>
                    <p className='mb-0 lh-lg text-secondary'>Share: <span><SocialMedia /></span> </p>
                      <div>
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Additional Information</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Reviews</button>
                              </li>
                          </ul>
                          <div className="tab-content mt-4" id="myTabContent">
                              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>{shopValue.body}</div>
                              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}><ul>
                                    <li>Weight: {shopValue.Weight}</li>
                                    <li>Dimensions: {shopValue.Dimensions}</li>
                                </ul></div>
                              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                <p>No review for {shopValue.title}</p>
                                <p>Add a review</p>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                  <form>
                                      <div>
                                          <p><label htmlFor="w3review">Your review *</label></p> 
                                          <textarea id="w3review" name="w3review" rows={4} cols={50} />
                                      </div>

                                      <div className="mb-3">
                                          <label htmlFor="exampleInputEmail1" className="form-label">Name *</label>
                                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>                               
                                      <div className="mb-3">
                                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                      </div>                               
                                      <div className="mb-3 form-check">
                                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                      </div>
                                      <button type="submit" className="btn btn-primary">Submit</button>
                                  </form>

                              </div>
                          </div>
                      </div>

                </div>
            </div>
        </div>
    </>
  )
}
