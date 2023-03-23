import React, { useState, useRef } from "react";
import './register.css';
import registerImage from "../../Assets/registerImage.png";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";




export default function Register(){
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vfullname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The fullname must be between 3 and 20 characters.
        </div>
      );
    }
  };
 

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
  const vphone = (value) => {
    if (value.length == 10 ) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be 10 characters.
        </div>
      );
    }
  };vphone
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [fullname, setFullname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [phonenumber, setPhoneNumber] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhoneNumber(phone);
  };
  const onChangeFullName = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(fullname,email,username, phonenumber, password).then(
        (response) => {
        
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/login");
          window.location.reload();

        
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
 return (
  

<div className=''>

<h2 className='create-account-title'> Register Now</h2>
<div className='container123'>
<div className='register-image'>
<img src={registerImage} alt="avatar"/>
</div>
      
      
        <div className="form123-container">
    
      <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div> 
      
          <div className="form-row">
          <div className="form-column">
            <label  className="label-style" htmlFor="full-name">Full Name</label>
            <input  className="rectangle-style" type="text" id="full-name" name="full-name"
             value={fullname}
             onChange={onChangeFullName}
             validations={[required,vfullname]} />
             </div>
         
          <div  className="form-column">
            <label className="label-style" htmlFor="email">Email Adress</label>
            <input className="rectangle-style" type="email" id="email" name="email"  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}/>
          </div>
          </div>
       
        <div className="form-row">
          <div className="form-column">
            <label className="label-style"  htmlFor="username">Username</label>
            <input className="rectangle-style" type="text" id="username" name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]} />
          </div>
          <div className="form-column">
            <label className="label-style" htmlFor="phone-number">Phone Number</label>
            <input className="rectangle-style" type="tel" id="phone-number" name="phone-number" 
             value={phonenumber}
             onChange={onChangePhone}
             validations={[required, vphone]}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label className="label-style" htmlFor="password">Password</label>
            <input className="rectangle-style" type="password" id="password" 
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required, vpassword]}
            

            />
                      

          </div>
          <div className="form-column">
          <label className="label-style" htmlFor="password">Confirm Password</label>
                        <input className="rectangle-style" type="password" id="confirm-password" 
            name="confirm-password"
           
            

            />
            </div>
        </div>
     
        <div >
          <button type="submit" className="submit-button " >Register</button>
        </div>
        <div className="already-have-account">
        <p className="have-account-text">Already have an account?
        <a href="/login" className="register-link">Log In</a></p>
        
      </div>
      </div>
       )}

      
<br></br>
          {message && (
            <div >
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>     
     
    </div>

 </div>
 </div>

            );
          };
          
    
 

 




