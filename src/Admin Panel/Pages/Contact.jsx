
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [Firstname, setFirstname] = useState("");
  const [Email, setEmail] = useState("");

  const handleFirstInput = (event) => {
    setFirstname(event.target.value);
    console.log(event.target.value); // Logging the current input value
  };

  const handleSecondInput = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value); // Logging the current input value
  };

  const handleClick = () => {
    alert(`Button Clicked!\nFirst Name: ${Firstname}\nEmail: ${Email}`);
  };

  return (
    <div className="border border-round mt-5 justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <input
          type="text"
          placeholder="Enter your First name"
          className="label1 text-center"
          value={Firstname}
          onChange={handleFirstInput} // Corrected function reference
        />
      </div>
      <div className="d-flex justify-content-center align-items-center pt-3">
        <input
          type="email" // Changed to email type for better validation
          placeholder="Enter your Email Address"
          className="label2 text-center"
          value={Email}
          onChange={handleSecondInput} // Corrected function reference
        />
      </div>

      <div className="d-flex justify-content-center align-items-center pt-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            Please, Accept and Agree to the Terms and Conditions
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center pt-3">
        <button className="btn btn-success" onClick={handleClick}>
          Submit here
        </button>
      </div>
    </div>
  );
}

export default Contact;
