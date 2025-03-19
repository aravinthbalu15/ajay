import React from 'react';
import "../Style/Family.css"; // Ensure you create and import this CSS file

const Family = () => {
  const stats = [
    { value: "500", label: "Families" },
    { value: "125", label: "Members" },
    { value: "7", label: "Anbiyams" },
    { value: "15", label: "Sangam" }
  ];

  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
            <div className="stat-box">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
