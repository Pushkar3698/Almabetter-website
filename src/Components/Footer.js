import React from "react";
import "../Css/Footer.css";
import logo from "../almabetter resoures/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-logo">
          <div className="footer-logo-img">
            <img src={logo} alt="" width="200px" />
          </div>
          <div className="contact-us margin">
            <div className="footer-heading">Contact Us</div>
            <div className="contact">
              <p>admissions@almabetter.com</p>
              <p>+91-9513166012</p>
              <p>+91-9513164998</p>
            </div>
          </div>
          <div className="footer-location margin">
            <div className="footer-heading">Location</div>
            <div className="location">
              4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru,
              Karnataka, 560025
            </div>
          </div>
          <div className="footer-policies margin">
            <div className="footer-heading">Policies</div>
          </div>
          <div className="policies">
            <p>Privacy Statement</p>
            <p>Terms of Use</p>
            <p>Refund Policy</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-content">
            <div className="footer-heading">Company</div>
            <div className="footer-company">
              <p>Success Stories</p>
              <p>About Us</p>
              <p>Hire From Us</p>
              <p>Careers</p>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-heading">Courses</div>
            <div className="footer-company">
              <p>Full Stack Data Science</p>
              <p>Full Stack Web Development with Web3</p>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-heading">Resources</div>
            <div className="footer-company">
              <p>Blog</p>
              <p>Events</p>
              <p>Community</p>
              <p>AlmaX</p>
              <p>FAQs</p>
              <p>Placement Statistics</p>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-heading">Join Almabetter</div>
            <div className="footer-company">
              <p>Sign Up</p>
              <p>Become A Coach</p>
              <p>Coach Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
