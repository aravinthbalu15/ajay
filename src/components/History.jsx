import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/History.css";
import Image1 from "../images/image4.png"
const History = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/history-details");
  };

  return (
    <div className="container my-5">
      <div className="row align-items-start">
        {/* Church Image */}
        <div className="col-md-5 mt-5">
          <img src={Image1} alt="Church History" className="img-fluid history-image" />
        </div>

        {/* History Content */}
        <div className="col-md-7">
          {/* Added Heading */}
          <h2 className="history-heading">A Journey of Faith: Our Church’s Legacy</h2>

          <p className="history-text">
          Kamplar has a long history of adherence to Christian faith, mercifully led by God through waves of dramatic events, led by great parish priests and committed Catholic persons.
          The stone-cut Cross which has been venerated at Devandivilai, at the heart of Kamplar parish, whose style is ascribed to the times of St. Thomas the Apostle, is a certain witness to show that Christianity had gained foothold at Kamplar...
          {/* View More Link */}<br/>
          <p className="view-more" onClick={handleViewMore}>View More →</p> </p>
        </div>
      </div>
    </div>
  );
};

export default History;
