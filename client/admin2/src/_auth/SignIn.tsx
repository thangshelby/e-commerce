
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="container" id="container">
      <div className="form-container sign-up"></div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <GoogleIcon />
            </a>
            <a href="#" className="icon">
              <LinkedInIcon />
            </a>
            <a href="#" className="icon">
              <GitHubIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1 className="font-semibold text-[30px]">Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              onClick={() => {
                navigate("/auth/signUp");
              }}
              id="register"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
