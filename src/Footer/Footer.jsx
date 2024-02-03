import React from 'react'

export default function Footer() {
  return (
    <>
   <div className='bg-secondary-color'>
     <div className='container p-5 text-light'>
      <div className='row text-center'>
        <div className="col-md-4 ">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className=''>
            <i className="fa-brands fa-facebook border rounded-circle p-2 m-1"></i>
            <i className="fa-brands fa-twitter border rounded-circle p-2 m-1"></i>
            <i className="fa-brands fa-linkedin border rounded-circle p-2 m-1"></i>
            <i className="fa-solid fa-globe border rounded-circle p-2 m-1"></i>
            </div>
        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
   </div>
   <div className='bg-footer'>
    <p className='text-light text-center p-3 m-0'>Copyright © Your Website 2021</p>
   </div>
   </>
  )
}
