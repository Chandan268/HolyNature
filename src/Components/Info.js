import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Carefully crafted blends of herbs and botanicals addressing various health concerns, including stress, anxiety, sleep disorders, and immunity.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Herbal Formulations"
          description="Carefully crafted blends of herbs and botanicals addressing various health concerns, including stress, anxiety, sleep disorders, and immunity."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dietary Supplements"
          description="Essential vitamins and minerals sourced from natural ingredients to support overall health and well-being, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Empowering Informed Wellness"
          description="We prioritize transparency and responsible marketing, encouraging individuals to make informed choices about their health in consultation with qualified healthcare professionals."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
