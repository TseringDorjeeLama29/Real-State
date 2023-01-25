import React, { useEffect, useState } from 'react'

export default function Scroll() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
          if(window.scrollY > 120)  {
            setBackToTopButton(true)
          }
          else{
            setBackToTopButton(false)
          }
        })
    }, [])
    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })
    }
  return (
    <div className='scroll'>
      {BackToTopButton && (
        <button onClick={scrollUp} className='bg-success px-2 py-1 text-white fw-bolder fs-2' style={{position:"fixed",bottom:"50px", right:"40px", border:"none"}}><i class="bi bi-arrow-up"></i></button>
      )}
    </div>
  )
}
