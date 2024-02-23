import React from "react";
import Logo from "../assets/cadfem-logo-white.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        <img src={Logo}/>
        </div>
        <div className="footer-icons">
          <BsTwitter style={{ color: 'white' }}  />
          <SiLinkedin  style={{ color: 'white' }} />
          <BsYoutube style={{ color: 'white' }} />
          <FaFacebookF style={{ color: 'white' }} />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@helthcare.com</span>
          <span>press@helthcare.com</span>
          <span>contact@helthcare.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-section-columns">

        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
