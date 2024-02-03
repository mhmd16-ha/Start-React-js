import React, { useState } from 'react'
import p1 from '../images/poert1.png'
import p2 from '../images/port2.png'
import p3 from '../images/port3.png'
import Modal from '../Modal/Modal.jsx'
export default function Portfolio() {
  let [img,setImg]=useState(p1)
  let [layer,setLayer]=useState(false)
function closeModal(){
  setImg();
  setLayer()
}
return (
  <div>
    {layer?<Modal images={img} close={closeModal}/>:""}
    <div className='container overflow-hidden'>
      <h2 className='sec-color text-center portfolio_title fw-bold'>PORTFOLIO COMPONENT</h2>
      <div className="d-flex justify-content-center">
          <div className="bg-secondary-color title mt-1"></div>
        <i className="fa-solid fa-star px-3"></i>
        <div className="bg-secondary-color title  mt-1"></div>
        </div>
      <div className='py-4'>  
        <div className='row g-4'>
           <div onClick={()=>{setImg(p1);setLayer(true)}}  className='col-md-4  item'>
           <div className='position-relative'>
           <img src={p1} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div>
           <div onClick={()=>{setImg(p2);setLayer(true)}} className='col-md-4 item'>
           <div className='position-relative'>
           <img src={p2} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div>
           <div onClick={()=>{setImg(p3);setLayer(true)}} className='col-md-4 item'>
           <div className='position-relative'>
           <img src={p3} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div>
           <div onClick={()=>{setImg(p1);setLayer(true)}} className='col-md-4 item'>
           <div className='position-relative'>
           <img src={p1} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div>
           <div onClick={()=>{setImg(p2);setLayer(true)}} className='col-md-4 item'>
           <div className='position-relative'>
           <img src={p2} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div>
           <div onClick={()=>{setImg(p3);setLayer(true)}} className='col-md-4 item'>
           <div className='position-relative'>
           <img src={p3} className='w-100 rounded-3'/>
            <div className='layer w-100 rounded-3 start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-plus text-light display-1'></i>
            </div>
           </div>
           </div> 
        </div>
      </div>
    </div>
     </div>
  )
}
