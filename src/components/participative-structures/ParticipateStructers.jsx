import React from "react";
import "../../Style/ParticipateStructers.css"; // Ensure you have this CSS file

const ParticipateStructers = () => {
  const stats = [
    { value: "5", label: "திருத்தூதர்கள் சங்கங்கள்", link: "./one" },
    { value: "7", label: "உருவாக்க இயக்கங்கள்", link: "./two" },
    { value: "4", label: "சேவை அமைப்புகள்", link: "./three" },
    { value: "4", label: "பொது அமைப்புகள்", link: "./four" },
    { value: "3", label: "நிறைவு அமைப்புகள்", link: "./five" }
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
                <button
                  className="read-more-btn"
                  onClick={() => (window.location.href = stat.link)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParticipateStructers;
