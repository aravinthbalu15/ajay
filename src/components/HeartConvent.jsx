import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../images/heart-convent/1.png";
import Image2 from "../images/heart-convent/2.png";
import Image3 from "../images/heart-convent/3.png";

import '../Style/HeartConvent.css';

const HeartConvent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="heart-convent container">
      {/* Title */}
      <h2 className="text-center mb-5 section-title scroll-reveal">
        St. Joseph’s Church  Sacred Heart Convent
      </h2>

      {/* Main Image */}
      <div className="row mb-5 scroll-reveal">
        <div className="col text-center">
          <img
            src={Image1}
            alt="Convent"
            className="img-fluid main-image shadow-lg"
          />
        </div>
      </div>

      {/* Description */}
      <div className="row mb-5 scroll-reveal">
        <div className="col-md-10 offset-md-1 p-4 description">
          <p className="fs-5 text-center mb-0">
            Kamplar St. Joseph's Church Convent was consecrated on May 1, 1993, by Rev. Bishop Leon Dharmaraj. Since then, the Sisters of the Sacred Heart of Jesus have been serving the people of Kamplar.
            <br /><br />
            Currently, Reverend Sisters continue this mission through prayer, house visits, and assistance in liturgical services, offering spiritual and pastoral support to the Kamplar community.
          </p>
        </div>
      </div>

      {/* Circular Gallery Images with Titles */}
      <div className="row justify-content-center scroll-reveal">
        <div className="col-md-5 mb-4 d-flex flex-column align-items-center text-center">
          <img
            src={Image2}
            alt="Sisters Serving"
            className="img-fluid rounded-circle shadow hover-zoom gallery-img"
          />
          <h1 className="gallery-title mt-3">Rev. Sr. C. Arul Seeli</h1>
        </div>
        <div className="col-md-5 mb-4 d-flex flex-column align-items-center text-center">
          <img
            src={Image3}
            alt="Convent Prayer"
            className="img-fluid rounded-circle shadow hover-zoom gallery-img"
          />
          <h1 className="gallery-title mt-3">Rev. Sr. Leela Roselin Rani</h1>
        </div>
      </div>
    </div>
  );
};

export default HeartConvent;
