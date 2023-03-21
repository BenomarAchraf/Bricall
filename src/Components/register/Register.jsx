import React, { useState } from "react";
import './register.css';
import registerImage from "../../Assets/registerImage.png";

export default function Register(){
    
        const [fullName, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [username, setUsername] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
        
    };
 return (
    
 <div className='register-page'>

<h2 className='create-account-title'> Register Now</h2>
<div className='container'>
<div className='register-image'>
<img src={registerImage} alt="avatar"/>
</div>
<div   >
      
      <form onSubmit={ handleSubmit } className="form-style-register" >
        <div className="form-container">
      <div className="form-row">
          <div className="form-column">
            <label  className="label-style" htmlFor="full-name">Full Name</label>
            <input  className="rectangle-style" type="text" id="full-name" name="full-name" />
          </div>
          <div  className="form-column">
            <label className="label-style" htmlFor="email">Email Adress</label>
            <input className="rectangle-style" type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label className="label-style"  htmlFor="username">Username</label>
            <input className="rectangle-style" type="text" id="username" name="username" />
          </div>
          <div className="form-column">
            <label className="label-style" htmlFor="phone-number">Phone Number</label>
            <input className="rectangle-style" type="tel" id="phone-number" name="phone-number" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label className="label-style" htmlFor="password">Password</label>
            <input className="rectangle-style" type="password" id="password" name="password" />
          </div>
          <div className="form-column">
            <label className="label-style" htmlFor="confirm-password">Confirm Password</label>
            <input  className="rectangle-style" type="password" id="confirm-password" name="confirm-password" />
          </div>
        </div>
        </div>
        <div >
          <button type="submit" className="submit-button">Register</button>
        </div>
        <div className="already-have-account">
        <p className="have-account-text">Already have an account?</p>
        <a href="/login" className="register-link">Log In</a>
      </div>
      </form>
     
    </div>

</div>
 </div>

 


 )


}




