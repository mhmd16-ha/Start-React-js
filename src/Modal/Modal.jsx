import React from 'react'

export default function Model({images,close}) {
  return (
    <div onClick={close} className='d-flex justify-content-center z-3 position-fixed bg-blue w-100  h-100 align-items-center'>
      <img src={images} className='w-50 position-fixed'/>
    </div>
  )
}
