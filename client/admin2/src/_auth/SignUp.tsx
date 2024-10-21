import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate(); 
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form className=" overflow-y-scroll">
          <h1>Create Account</h1>
          <div className="social-icons">
          <a href="#" className="icon">
              <GoogleIcon />
            </a>
            <a href="#" className="icon">
              <LinkedInIcon/>
            </a>
            <a href="#" className="icon">
              <GitHubIcon />
            </a>
            <a href="#" >
              <FacebookIcon />
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input className='text-black font-medium' type="text" placeholder="First Name" />
          <input className='text-black font-medium' type="text" placeholder="Last Name" />

          <input className='text-black font-medium' type="email" placeholder=" Email" />
          <input className='text-black font-medium' type="password" placeholder="Password" />
          <input className='text-black font-medium' type="password" placeholder="Password" />

          <input className='text-black font-medium' type="password" placeholder="Password" />
          <input className='text-black font-medium' type="password" placeholder="Password" />
          <input className='text-black font-medium' type="password" placeholder="Password" />
          <input className='text-black font-medium' type="password" placeholder="Password" />
          <input className='text-black font-medium' type="password" placeholder="Password" />


          <button>Sign Up</button>
        </form>
      </div>
     
      <div className="toggle-container">
        <div className="toggle">
        <div className="toggle-panel toggle-right">
        <h1 className="font-semibold text-[30px]">Welcome back</h1>
            <p>Enter your personal details to use all of site features</p>
            <button onClick={()=>{
              navigate('/auth/signIn')
            }} className="" id="login">
              Sign In 
            </button>
          </div>
       
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;
