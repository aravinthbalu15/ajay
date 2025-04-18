import React from "react";
import Image1 from "../../images/christmas/1.png"; // Replace with correct path


const Four = () => {
  return (
    <div className="pt-5 mt-5">
      <h1 className="section-title mt-5">வழிபாட்டு அமைப்புகள்
      </h1>

      {/* Container 1 */}
      <h1 className="section-title ">வழிபாட்டுக் குழு
      </h1>
      <div className="body-wrapper">
        <div className="body-container">
          {/* Left Side - Text */}
          <div className="text-section">
            <p className="description">
              Asia’s largest shrine to Saint George, about five million people visit it every year.
              The church is thought to have been founded in 593 AD. It is regarded
              as one of the oldest churches in Kerala, after the seven churches founded
              by Thomas the Apostle in the first century AD. 
              <strong className="read-more"> read more...</strong>
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="image-section2">
            <img src={Image1} alt="St. Joseph Church" className="image" />
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <h1 className="section-title ">பாடகர் குழு
      </h1>
      <div className="body-wrapper">
        <div className="body-container">
          <div className="text-section">
            <p className="description">
              Asia’s largest shrine to Saint George, about five million people visit it every year.
              The church is thought to have been founded in 593 AD. It is regarded
              as one of the oldest churches in Kerala, after the seven churches founded
              by Thomas the Apostle in the first century AD. 
              <strong className="read-more"> read more...</strong>
            </p>
          </div>
          <div className="image-section2">
            <img src={Image1} alt="St. Joseph Church" className="image" />
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <h1 className="section-title ">பீடச்சிறார்
      </h1>
      <div className="body-wrapper">
        <div className="body-container">
          <div className="text-section">
            <p className="description">
              Asia’s largest shrine to Saint George, about five million people visit it every year.
              The church is thought to have been founded in 593 AD. It is regarded
              as one of the oldest churches in Kerala, after the seven churches founded
              by Thomas the Apostle in the first century AD. 
              <strong className="read-more"> read more...</strong>
            </p>
          </div>
          <div className="image-section2">
            <img src={Image1} alt="St. Joseph Church" className="image" />
          </div>
        </div>
      </div>

  
     
    </div>
  );
};

export default Four;
