import React from 'react';
import "../Style/ParticipateStructers.css"; // Ensure you create and import this CSS file

const ParticipateStructers = () => {
  const stats = [
    { value: "6", label: "Pius Association" },
    { value: "5", label: "Sevice Assocation" },
    { value: "7", label: "Formative Moments" }
  ];

  return (
    <div className="container text-center my-5">
        <h1 className=' section-title mt-5'>PARTICIPATE STRUCTURES</h1>
      <div className="row justify-content-center mt-5">
        {stats.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
            <div className="stat-box">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
              <button className="read-more-btn" onClick={() => (window.location.href = "/service-association")}>
        View More
      </button>
            </div>
            
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ParticipateStructers;
