import "./login_page1.css";
import logo from "./assets/logo_trans.png";
import 'bootstrap/dist/css/bootstrap.min.css'
function Login1() {
  return (
    <div className="login-page">
      <img src={logo} alt="App Logo" className="login-logo" />

      <div className="login-card">
        <div className="login-heading">Login</div>
        <div className="login-Q">Enter CNIC:</div>
        <div className="login-input"><input type="text" className="cnic-input"/></div>
        <div className="login-Q">Enter Name:</div>
        <div className="login-input"><input type="text" className="cnic-input"/></div>
        <div className="login-Q">Enter Phone No:</div>
        <div className="login-input"><input type="text" className="cnic-input"/></div>
        <button class="login-btn">Sign In</button>

      </div>


    </div>
  );
}

export default Login1;

