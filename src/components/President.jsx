import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import PresidentImage from "../images/aju.webp";
import HeadImage from "../images/head.png";
import SubImage from "../images/bishop.jpeg";
import "../Style/President.css";

const President = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="container text-center my-5">
    <h2 className="fw-bold section-title">PRESIDENT</h2>
    <div className="row justify-content-center">
      {/* First image */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-right">
        <div className="president-card">
          <img src={HeadImage} alt="Head" className="president-img" />
          <h5 className="president-name">Pope</h5>
        </div>
      </div>
  
      {/* Second image */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-left">
        <div className="president-card">
          <img src={SubImage} alt="Sub Head" className="president-img" />
          <h5 className="president-name">Bishop</h5>
        </div>
      </div>
  
      {/* Third image */}
      <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-right">
        <div className="president-card">
          <img src={PresidentImage} alt="President" className="president-img" />
          <h5 className="president-name">Fr.Maria William</h5>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default President;
