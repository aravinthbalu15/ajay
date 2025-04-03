import React, { useState } from "react";
import "../Style/OurParish.css"; // Ensure this CSS file exists

// Importing images correctly
import Image1 from "../images/aju.jpeg";
import Image2 from "../images/appu.jpeg";
import Image3 from "../images/ashik.jpeg";
import Image4 from "../images/rani.jpeg";
import Image5 from "../images/jenish.jpeg";


//importring images for counsil members
import Sajitha from "../images/council/sajitha.png"
import Shaji from "../images/council/shaji.png"
import Jeniba from "../images/council/jeniba.png"
import Ashwin from "../images/council/ashwin.png"
import Gladis from "../images/council/gladislily.png"
import Jerin from "../images/council/jerin.png"

const members = [
  { id: 1, name: "Priest (President)", dob: "Jan 1, 1980", original: "Fr. Maria William", img: Image1,p:"this is the description for the image" },
];

const member1 = [
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Mr. Richard Joseph Raj", img: Image2,p:"this is the description for the image" },
  { id: 3, name: "Secretary", dob: "Mar 22, 1990", original: "Mrs. Jacqulin", img: Image3,p:"this is the description for the image" },
  { id: 1, name: "Treasurer", dob: "Jan 1, 1980", original: "Mrs. Charlet Rani", img: Image4,p:"this is the description for the image" },
  { id: 2, name: "Co-Secretary", dob: "Feb 15, 1985", original: "Mr. Jenish", img: Image5,p:"this is the description for the image" },
];

const counsil = [
  {  },
  { id: 2, name: "SHAJI", dob: "Feb 15, 1985",original:"SHAJI", img: Shaji,p:"அன்பியம்-01" },
  { id: 2, name: "JENIBA", dob: "July 09, 1995",original:"JENIBA", img: Jeniba,p:"கத்தோலிக்க சேவா சங்கம்" },
  { id: 2, name: "ASHWIN A", dob: "July 21, 1995",original:"ASHWIN A", img: Ashwin,p:"அன்பியம்-06" },
  { id: 2, name: "GLADIS LILY", dob: "Feb 15, 1985",original:"GLADIS LILY", img: Gladis,p:"this is the description for the image" },
  { id: 2, name: "JERIN", dob: "Feb 15, 1985",original:"JERIN", img: Jerin,p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png",p:"this is the description for the image" },
];


const OurParish = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>
      {/* First Section - Parish Members */}
      <div className="our-parish-container mt-5">
        <h2 className="mt-5">Meet Our Parish Council</h2>
        
        <div className="members-list mt-5">
          {members.map((member) => (
            <div key={member.id} className="member-row" onClick={() => setSelectedMember(member)}>
              <img src={member.img} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
              <p>{member.p}</p>
            </div>
          ))}
        </div> 

        {/* Second Row */}
        <div className="members-list1 mt-5">
          {member1.map((member1) => (
            <div key={member1.id} className="member-row" onClick={() => setSelectedMember(member1)}>
              <img src={member1.img} alt={member1.name} className="member-image" />
              <h3 className="member-name">{member1.name}</h3>
              <p>{member1.p}</p>
            </div>
          ))}
        </div>

        {/* Popup for Selected Member */}
        {selectedMember && (
          <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
            <div className="popup-content animate-popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedMember.img} alt={selectedMember.name} className="popup-image" />
              <h2>{selectedMember.original}</h2>
              <p>Date of Birth: {selectedMember.dob}</p>
              <button className="close-bt" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div> 

      {/* Council Members */}
      <div className="our-parish-container mb-5">
        <h2 className="mt-5">Parish Council Members</h2>
        
       <div className="container members-listt mt-5">  {/* changed the classname */}
          {counsil.map((councilMember) => (
            <div key={councilMember.id} className="member-row" onClick={() => setSelectedMember(councilMember)}>
              <img src={councilMember.img} alt={councilMember.name} className="member-image" />
              <h3 className="member-name">{councilMember.name}</h3>
              <p>{councilMember.p}</p>
            </div>
          ))}
        </div> 

        {/* Popup for Council Member */}
        {selectedMember && (
          <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
            <div className="popup-content animate-popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedMember.img} alt={selectedMember.name} className="popup-image" />
              <h2>{selectedMember.original}</h2>
              <p>Date of Birth: {selectedMember.dob}</p>
              <button className="close-bt" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurParish;
