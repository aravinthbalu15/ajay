import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SubstationImage from "../images/Auditorium/3.png"; // Adjust path as needed
import "../Style/Substation.css";
const Substation = () => {
  return (
    <div className="container my-5 ">
      <h1 className="text-center mb-4">Our Substation</h1>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <img 
            src={SubstationImage} 
            alt="Substation" 
            className="img-fluid rounded shadow" 
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Substation;
