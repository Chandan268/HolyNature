import React from "react";
import Doctor from "../Assets/Yatrika.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">

<div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>
      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Holy Nature Marketing (P) Ltd, Your Personalized Path to Natural Wellness
          At Holy Nature Marketing (P) Ltd, we believe that well-being should be accessible and personalized. We are your trusted partner in cultivating a healthier you, leveraging nature's wisdom and the power of modern science. </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Herbal Formulations"
          description="Carefully crafted blends of herbs and botanicals addressing various health concerns, including stress, anxiety, sleep disorders, and immunity. These solutions are not intended to give anything specific but rather offer natural support for the mentioned conditions."
        />

        <SolutionStep
          title="Dietary Supplements"
          description="Essential vitamins and minerals sourced from natural ingredients to support overall health and well-being, addressing potential nutritional deficiencies."
        />

        <SolutionStep
          title="Educational Resources"
          description="We believe in empowering individuals with knowledge. We offer comprehensive guides and consultations to help you choose the right natural solutions for your specific needs, facilitating informed decision-making about your health."
        />
      </div>
      
    </div>
  );
}

export default About;
