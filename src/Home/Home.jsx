import React from 'react'
import avatar from '../avataaars.svg'
export default function Home() {
  return (
    <div className='bg-main d-flex justify-content-center text-light vh-100 align-items-center flex-column'>
        <img className='w-img' src={avatar} />
        <h1 className='fw-bold '>START FRAMEWORK</h1>
        <div className="d-flex justify-content-center">
          <div className="bg-light title mt-1"></div>
        <i className="fa-solid fa-star px-3"></i>
        <div className="bg-light title  mt-1"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
