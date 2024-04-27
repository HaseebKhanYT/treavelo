import "./Footer.css";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-image-container d-flex justify-center my-4">
        <img src={logo} alt="treavelo logo" />
      </div>
      
      <p className="footer merriweather-sans">
        &copy; 2024 Treavelo. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
