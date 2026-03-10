import "./login_page1.css";
import logo from "./assets/logo_trans.png";
import 'bootstrap/dist/css/bootstrap.min.css'

function Login2() {
  return (
    <div className="login-page">
      <img src={logo} alt="App Logo" className="login-logo" />

      <div className="login-card">
        <div className="login-heading">Login</div>
        <div className="login-enteries">
        <div className="login-Q">Enter Hospital ID:</div>
        <div className="login-input"><input type="text" className="cnic-input"/></div>
        <div className="login-Q">Enter Password:</div>
        <div className="login-input"><input type="password" className="cnic-input"/></div>
        </div>

        <button class="login-btn">Sign In</button>


      </div>


    </div>
  );
}

export default Login2;

