import './login.css';
import loginImage from "../../Assets/loginImage.png";
import { useState } from 'react';
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';




 function Login(){
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();





 
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage = error.response.data;

        }
      );
    
  };
   

 return (
    
 <div >

<h2 className='login-title'> Welcome to our community</h2>
<div className='container1'>
<div className='login-image'>
<img src={loginImage} alt="avatar"/>
</div>
<div className='rectangle-style-login'>
  <div className='taille'>
<form className=''>
    <div className='container-input'>
<p className='onerow'>
                    <label className='username-label'>Username</label><br/>
                    <input className='username-input' type="text" name="first_name" 
  value={username}
  onChange={onChangeUsername}
                    required />
                </p>
              
                <p className='onerow'>
                    <label className='password-label'>Password</label><br/>
                    <input className='password-input' type="password" name="password" 
                    
                    value={password}
                    onChange={onChangePassword}
                    requiredc />
                </p>
                <p className='forget-password-container'>
                    <input type="checkbox" className='checkbox' name="checkbox" id="checkbox" required /> <span className='remember-password'>Remember password </span>.
                </p>
                <p>
                    <button className='login-button' id="sub_btn" type="submit" onClick={handleLogin
                    }>Login
                        </button>
                </p>
                <p className='forget-password'>
                    Forget Password ?
                </p>
                <p className='forget-password'>Don't have account? <a href="/register" >Register</a>    </p>
                     
                </div>
            </form>
            </div>
            </div>

</div>
 </div>
 


 )


}
export default Login;


