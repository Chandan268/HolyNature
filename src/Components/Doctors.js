import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/jvarcom.png";
import profile2 from "../Assets/Lady_Like.png";
import profile3 from "../Assets/Limbozyme.png";
import profile4 from "../Assets/NatureGlow.png";
import profile5 from "../Assets/Pailorien.png";
import profile6 from "../Assets/PainRelief.png";
import profile7 from "../Assets/Platonz99.png";
import profile8 from "../Assets/Ezylivcid.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Product</span>
        </h3>

        <p className="dt-description">
        Essential vitamins and minerals sourced from natural ingredients to address potential deficiencies and support overall health. Meticulously crafted blends of herbs and botanicals, addressing various health concerns
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Jvarcom Syrup"
          
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Lady Like Tonic"
          
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Limbozyme Syrup"
          
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Natura Glowing"
          
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile5}
          name="Pilooreen Syrup"
        
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile6}
          name="Pain Relief Oil"
        
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile7}
          name="Platonz-99"
        
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile8}
          name="Ezylivcid"
         
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
