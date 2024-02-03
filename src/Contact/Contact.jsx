import React, { useState } from 'react'

export default function Contact() {
let [label,setLabel]=useState("bottom-0")
let [labelAge,setLabelAge]=useState("bottom-0")
let [labelEmail,setLabelEmail]=useState("bottom-0")
let [labelPassword,setLabelPassword]=useState("bottom-0")
  return (
    <div className='p-3 overflow-hidden container d-flex flex-column align-items-center'>
       <h2 className='sec-color text-center portfolio_title fw-bold'>CONATCT SECTION</h2>
       <div className="d-flex justify-content-center">
          <div className="bg-secondary-color title mt-1"></div>
        <i className="fa-solid fa-star px-3"></i>
        <div className="bg-secondary-color title  mt-1"></div>
        </div>
       <div className='w-75'>
      <div className='position-relative'>
      <label htmlFor="userName" className={'position-absolute '+label}>user Name :</label>
       <input onKeyUp={()=>setLabel("top-0")} type='text' className='w-100 mt-5 border-0 border-bottom rounded position-relative' name='userName' placeholder='userName'/>
      </div>
      <div className='position-relative'>
      <label htmlFor="userAge" className={'position-absolute '+labelAge}>user Age :</label>
       <input onKeyUp={()=>setLabelAge("top-0")} type='text' className='w-100 mt-5 border-0 border-bottom rounded position-relative' name='userAge' placeholder='userAge'/>
      </div>
      <div className='position-relative'>
      <label htmlFor="userEmail" className={'position-absolute '+labelEmail}>user Email :</label>
       <input onKeyUp={()=>setLabelEmail("top-0")} type='text' className='w-100 mt-5 border-0 border-bottom rounded position-relative' name='userEmail' placeholder='userEmail'/>
      </div>
      <div className='position-relative'>
      <label htmlFor="userPassword" className={'position-absolute '+labelPassword}>user Password :</label>
       <input onKeyUp={()=>setLabelPassword("top-0")} type='text' className='w-100 mt-5 border-0 border-bottom rounded position-relative' name='userPassword' placeholder='userPassword'/>
      </div>
      <button className='btn btn-success mt-4'>send Message</button>
       </div>
    </div>
  )
}
