import React, { useState } from "react";
import "./Nav.css";
import { Route, Routes } from "react-router-dom";

function Nav() {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const HandleInput = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Open the NextPage in a new tab
      window.open("/NextPage", "_blank");
    },2000);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-2 ">
        <h6 className="rounded-5 fs-7 ps-2 pe-2 border border-2 bg-warning text-secondary">
          Your Partner in Practice
        </h6>
      </div>

      <div className=" d-flex justify-content-between fs-4">
        <ul className=" list1 list-unstyled text-dark-blue">
          <li className="ms-3">
            VKONNECT <sup className="fs-6">TM</sup> <br />{" "}
            <li className="ms-5 ps-5 fs-6">HEALTH</li>
          </li>
        </ul>

        <button
          className="rounded-pill ps-4 pe-4 fs-6 h-50 pt-2 pb-2 w-70 bg-dark text-white"
          onClick={HandleInput}
          disabled={loading}
        > 
      {loading ? "Loading..." : "Sign In"}
   
        </button>
      </div>
      <div className="justify-content-between mt-4">
        <div className="row ">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  ps-5">
            <h1 className="text-primary">
              Welcome to the <br />
              Future of Healthcare,
            </h1>
            <p className="fs-5">
              Where every second counts and knowledge is <br /> power! Vkonnect
              Health isn’t just an app;it's a <br /> revolution in the palm of
              your hands, tailored for
              <br /> the heroes in white coats <br />
              Transform Healthcare with Vkonnect Health. Your <br />
              Ultimate Digital Companion!
            </p>
            <button className="rounded-pill ps-3 pe-3 mt-2 pt-2 pb-2 bg-primary text-white fs-6">
              Getting Started
            </button>
          </div>

        
  <div className='col-12 col-sm-6 mt-2'>
    <img src='./Picture/image.webp' alt="" className='img-fluid' height={480} />
  </div>
</div>

        </div>
      </div>

    


        

 
    
  );
}

export default Nav;
