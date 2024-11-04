import React from "react";
import './NextPage.css'
function NextPage() {
  return (
    <>
    <div className='container mt-5 d-flex justify-content-center align-items-center gradient-background'>
      <form action="#" className="mt-5 pt-5 ">
    <div className='row '>
        <div className='col-sm-12 col-md-12 col-md-12 col-xl-12 col-xxl-12'>
        <div className='d-flex justify-content-center align-items-center mt-2 '>
        <h6 className='rounded-5 fs-7 ps-2 pe-2 border border-2 bg-warning text-secondary'>Your Partner in Practice</h6>
    </div>
    </div>
    
    </div>

    <div className='d-flex justify-content-center align-items-center fs-4'>
            <ul className=' list1 list-unstyled text-dark-blue'>
         <li className='ms-3 text-primary'>VKONNECT <sup className='fs-6'>TM</sup> <br /> <li className='ms-5 ps-5 fs-6'>HEALTH</li></li>
         </ul>
    </div>
    <div className='d-flex  justify-content-center align-items-center fs-4'>
           <label htmlFor="text" className="fs-2">Login/Sign-Up</label>
    </div>
    <div className='d-flex  mt-2 justify-content-center align-items-center fs-6 text-primary'>
           <p>Welcome to VKonnect Health</p>
    </div>
    <div className='d-flex  mt-2 justify-content-center align-items-center fs-6 text-primary '>
         <input type="number" name="Num" id="num" placeholder="+91 | Enter mobile number" className="rounded-pill text-center fs-5 pt-1 pb-2" />
    </div>
    <div className='d-flex  mt-2 justify-content-center align-items-center fs-6  text-primary pt-3 '>
       <button className="text-white bg-dark btn rounded-pill fs-6 pt-2 pb-2 mb-5">Continue</button>
    </div>


    </form>

    </div>
       
    <div className="child ms-5 ps-5 mt-5">
    <div className='row'>
    <hr />
            <div className='col-sm-12 col-md-12 col-md-12 col-xl-12 col-xxl-12'>
            <div className='d-flex justify-content-between mt-2 '>
            <h6 className='rounded-5 fs-7 ps-2 pe-2 border border-2 bg-warning text-secondary'>Your Partner in Practice</h6>
        </div>
        
        <div className='d-flex fs-4'>
            <ul className=' list1 list-unstyled text-dark-blue'>
         <li className='ms-3 text-primary'>VKONNECT <sup className='fs-6'>TM</sup> <br /> <li className='ms-5 ps-5 fs-6'>HEALTH</li></li>
         </ul>
         <p className='fs-6 ms-5'>Vkonnect Health is a primary hub for all the knowledge needs and you can reach the team at <br /> support@vkonnecthealth.com</p>
            </div>
    </div>
    </div>
    </div>
    </>
    
  );
}

export default NextPage;
