import React from 'react'
import './Section3.css'
function Section3() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items center mt-5'>
            <h2 className='text-primary'>What’s Hot in Vkonnect Health?</h2>
        </div>

       

<div className='row mt-3  justify-content-center align-items-center'>
  <div className='col-12 col-sm-6'>
    <img src='./Picture/image (1).webp' alt="" className='img-fluid' height={480} />
  </div>
</div>

            <div className=' pt-3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  ps-2 '>
               <h1 className='text-primary'>Read</h1>
               <p className='fs-5'>In an era where 44% of physicians dedicate 1 to 2 hours a <br /> week to reading medical news online, we acknowledge <br /> the importance of digital engagement. The feature <br /> provides a user-friendly and immersive digital platform <br /> for accessing valuable medical insights.</p>

            </div>


        </div>
    // </div>
  )
}

export default Section3