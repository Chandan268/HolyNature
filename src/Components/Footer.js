import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import Doctor from "../Assets/logo.png";


function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <a href="#services">
                <img src={Doctor} alt="Logo" />
              </a>
            </p>
            <p className="ft-description">
              ❤️ Health comes first, Made with carefully selected herbs and botanicals, the Herbal Health Tonic is a natural source of essential vitamins, minerals, and other beneficial compounds.

              Put your health first with Holy Nature Marketing (P) Ltd..
            </p>
          </div>


        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link >General Info</Link>
            </li>
            <li>
              <Link >Privacy Policy</Link>
            </li>
            <li>
              <Link >Terms of Services</Link>
            </li>
            <li>
              <Link >Consultations</Link>
            </li>
            <li>
              <Link >How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:chandan662018@gmail.com">chandan662018@gmail.com</a>
            </li>

            <li>
              <a href="tel:9336496193">+91 9336496193</a>
            </li>

          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2015-2024 Holy Nature Marketing (p) Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
