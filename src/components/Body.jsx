import React, { useEffect, useState, useRef } from "react";
import Image1 from "../images/image1.png"; // Replace with correct path
import "../Style/Body.css";

const Body = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="body-wrapper">
      <div className="body-container">
        {/* Left Side - Text */}
        <div
          ref={textRef}
          className={`text-section ${isVisible ? "slide-left" : ""}`}
        >
          <h4 className="section-title">
            <span className="underlines"></span> ST JOSEPH CHURCH
          </h4>
          <p className="description">
            Asia’s largest shrine to Saint George, about five million people visit it every year.
            The church is thought to have been founded in 593 AD. It is regarded
            as one of the oldest churches in Kerala, after the seven churches founded
            by Thomas the Apostle in the first century AD. 
            <strong className="read-more"> read more...</strong>
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          ref={imageRef}
          className={`image-section2 ${isVisible ? "slide-right" : ""}`}
        >
          <img src={Image1} alt="St. Joseph Church" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Body;
