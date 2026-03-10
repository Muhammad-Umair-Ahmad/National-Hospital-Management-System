import logoImg from "./assets/logo_trans.png";
import doctorIcon from "./assets/doctor.png";
import patientIcon from "./assets/patient.png";
import hospitalIcon from "./assets/hospital.png";
import expertIcon from "./assets/expert.png";
import "./LoginType.css";

function LoginType() {
  const options = [
    { label: "Patient", icon: patientIcon },
    { label: "Doctor", icon: doctorIcon },
    { label: "Hospital Management", icon: hospitalIcon },
    { label: "Hospital Authority", icon: expertIcon },
  ];

  return (
    <div className="login-page">
      <img src={logoImg} alt="Logo" className="login-logo" />
      <h1 className="login-heading">Select Login Type</h1>
      <div className="login-options">
        {options.map((option) => (
          <button key={option.label} className="login-btn">
            <img src={option.icon} alt={option.label} className="btn-icon" />
            <span className="btn-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LoginType;
