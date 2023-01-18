import React, { useState } from 'react';

export default function CartCount() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="d-inline-block">

            <div className='d-flex'>
                <div className="col-lg-6 align-self-center justify-self-center">
                    <p className='border border-dark p-3 text-center'>{count}</p>

                </div>
                <div className="col-lg-6">

                    <button onClick={() => setCount(count + 1)} className="">
                    <i class="bi bi-plus"></i>
                    </button>
                    <button onClick={() => setCount(count - 1)}>
                    <i class="bi bi-dash"></i>
                    </button>
                </div>
            </div>
            </div>
        </>
    );
}
