import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import AuthService from "../../services/auth.service";
import "./profileinformation.css"

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    const [name, setName] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
    };
     
    const submitHandler = (e) => {
      e.preventDefault();
      navigate("/technicienrealisations")
      console.log(currentUser.token);
     
    };
  
    return (
      <div className="">
        {error && (
          <div className="">
            <strong>{error}</strong>
          </div>
        )}
        {success && (
          <div className="">
            <strong>{success}</strong>
          </div>
        )}
        <div className="profile-container">
          <div className="">
            <div className="profile-info">
              <img
                className="profile-picture"
                width=""
                src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
              />
              <span className="profile-username">{currentUser.username}</span>
              <span className="profile-email">{currentUser.email}</span>
              <span></span>
            </div>
          </div>
          <div className="">
            <div className="profile-form">
              <div className="">
                <h4 className="">Profile Settings</h4>
              </div>
              <div className="">
                <div className="">
                  <label className="form-field">Username</label>
                  <input
                    type=""
                    className=""
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <label className="form-field">Password</label>
                  <input
                    type="text"
                    className=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
  
                <div className="">
                  <label className="form-field">Email </label>
                  <input
                    type="email"
                    className=""
                    placeholder="Votre Email "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <button
                    className=""
                    type="button "
                    onClick={submitHandler}
                    
                  >
                    My Acheivements  
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;