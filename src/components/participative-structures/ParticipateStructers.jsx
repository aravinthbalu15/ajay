import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../Style/ParticipateStructers.css"; // Ensure you have this CSS file

const ParticipateStructers = () => {
  const stats = [
    { value: "5", label: "திருத்தூதர்கள் சங்கங்கள்", path: "/one" },
    { value: "7", label: "உருவாக்க இயக்கங்கள்", path: "/two" },
    { value: "4", label: "சேவை அமைப்புகள்", path: "/three" },
    { value: "4", label: "பொது அமைப்புகள்", path: "/four" },
    { value: "3", label: "நிறைவு அமைப்புகள்", path: "/five" }
  ];

  return (
    <>
      <h1 className="section-title mt-5">PARTICIPATE STRUCTURES</h1>
      <div className="container text-center my-5">
        <div className="row justify-content-center mt-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
              <div className="stat-box">
                <h2 className="stat-value">{stat.value}</h2>
                <p className="stat-label">{stat.label}</p>
                <Link to={stat.path} className="read-more-btn">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParticipateStructers;
