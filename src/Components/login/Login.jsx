import './login.css';
import loginImage from "../../assets/loginImage.png";



 function Login(){
    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };
 return (
    
 <div >

<h2 className='login-title'> Welcome to our community</h2>
<div className='container'>
<div className='login-image'>
<img src={loginImage} alt="avatar"/>
</div>
<div className='rectangle-style-login'>
<form className='form-style'>
    <div className='container-input'>
<p>
                    <label className='username-label'>Username</label><br/>
                    <input className='username-input' type="text" name="first_name" required />
                </p>
              
                <p>
                    <label className='password-label'>Password</label><br/>
                    <input className='password-input' type="password" name="password" requiredc />
                </p>
                <p className='forget-password-container'>
                    <input type="checkbox" className='checkbox' name="checkbox" id="checkbox" required /> <span className='remember-password'>Remember password </span>.
                </p>
                <p>
                    <button className='login-button' id="sub_btn" type="submit">Register
                        </button>
                </p>
                <p className='forget-password'>
                    Forget Password ?
                </p>
                <p className='forget-password'>Don't have account?   </p>
                <a href="/register" className="register-text">Register</a>       
                </div>
            </form>
            
            </div>

</div>
 </div>
 


 )


}
export default Login;



