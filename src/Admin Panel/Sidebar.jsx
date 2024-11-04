import React, { useState } from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import Dahsboard from "./Pages/Dahsboard";
// import Articel from "./Pages/Articals";
import Report from "./Pages/Report";
import Contact from "./Pages/Contact";
import Articals from "./Pages/Articals";


function Sidebar() {
  return (
   

    <div className="">
      <nav className="nav d-flex justify-content-between mt-3 pe-3 bg-dark">
        <h3 className="text-white ps-4 ">Welcome</h3>
        <button 
        className="navbar-toggler"
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 

        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse" id="navbarNav">
        <ul className=" list d-flex gap-4 fs-6 mt-2 list-unstyled">
          <li className="">Home</li>
          <li className="">New blog</li>
          <li className="">Services</li>
          <li className="">Contact</li>
        </ul>
        </div>
      </nav>

      <div className="sidebar_content d-flex pt-5 bg-dark ps-4 fs-4 ">
     
          <div className="Sidebar-container">
            <div className="nav-option option1 d-flex gap-2">
              <i className="bi bi-speedometer2"></i>
              <ul className="list-unstyled">
              <Link to="/Dashboard" className=" fs-5 text-white text-decoration-none ">Dashboard</Link>
              </ul>
            </div>


            <div className="nav-option option1 d-flex gap-3 mt-4">
              <i className="bi bi-clipboard-pulse"></i>
              <ul className="list-unstyled">
              <Link to="/Articals" className=" fs-5 text-white text-decoration-none">Articals</Link>
              </ul>
            </div>
            <div className="nav-option option1 d-flex gap-3 mt-4">
              <i className="bi bi-chat-square-text"></i>
              <ul className="list-unstyled">
              <Link to="/Report" className=" fs-5 text-white text-decoration-none">Report</Link>
              </ul>
            </div>
            <div className="nav-option option1 d-flex gap-3 mt-4">

              <i className="bi bi-gear"></i>
              <ul className="list-unstyled">
              <Link to='/Contact' className=" fs-5 text-white text-decoration-none">Contact</Link>
              </ul>
            </div>
           
            <div className="nav-option option1 d-flex gap-3 mt-4">
              <i className="bi bi-power"></i>
              <ul className="list-unstyled">
              <Link to="/logout" className="fs-5 text-white text-decoration-none
              
              ">logout</Link>
              </ul>
            </div>
          </div>
        </div>

           
          <Routes>
        <Route path="/" element={<Dahsboard/>}/>
        <Route path="/Articals" element={<Articals/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      
      </div>
      
 
  );
}

export default Sidebar;
