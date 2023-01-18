import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/cart.css"

export default function Cart({cart, setCart, handleChange}) {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

  return (
    <>
       <article>
        {
            cart?.map((item) => (
                <div className="cart_box">
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
            </div>
            <div className="d-flex justify-content-between  my-4">
            <Link to={"/shop"} className="btn btn-danger  p-2 ">Return to the shop</Link>
            <button class="btn btn-success px-4 py-1" type="submit">Submit</button>
            </div>
                                
       </article>
    </>
  )
}


