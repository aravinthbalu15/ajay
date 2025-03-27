import React, { useState } from "react";
import "../Style/OurParish.css"; // Ensure this CSS file exists

// Importing images correctly
import Image1 from "../images/aju.webp";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";

const members = [
  { id: 1, name: "Priest (President)", dob: "Jan 1, 1980", original: "Fr. Maria William", img: Image1 },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Mr. Richard Joseph Raj", img: Image2 },
  { id: 3, name: "Secretary", dob: "Mar 22, 1990", original: "Mrs. Jacqulin", img: Image3 },
];

const member1 = [
  { id: 1, name: "Treasurer", dob: "Jan 1, 1980", original: "Mrs. Charlet Rani", img: Image1 },
  { id: 2, name: "Co-Secretary", dob: "Feb 15, 1985", original: "Mr. Jenish", img: Image2 },
];

const counsil = [
  { id: 1, name: "President", dob: "Jan 1, 1980", original: "Aravinth", img: Image1, p: "This is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image2, p: "This is the description for the image" },
  { id: 3, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image3, p: "This is the description for the image" },
  { id: 1, name: "President", dob: "Jan 1, 1980", original: "Aravinth", img: Image1, p: "This is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image2, p: "This is the description for the image" },
  { id: 3, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image3, p: "This is the description for the image" },
  { id: 1, name: "President", dob: "Jan 1, 1980", original: "Aravinth", img: Image1, p: "This is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image2, p: "This is the description for the image" },
  { id: 3, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image3, p: "This is the description for the image" },
  { id: 1, name: "President", dob: "Jan 1, 1980", original: "Aravinth", img: Image1, p: "This is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image2, p: "This is the description for the image" },
  { id: 3, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image3, p: "This is the description for the image" },
  { id: 1, name: "President", dob: "Jan 1, 1980", original: "Aravinth", img: Image1, p: "This is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image2, p: "This is the description for the image" },
  { id: 3, name: "Vice-President", dob: "Feb 15, 1985", original: "Aju", img: Image3, p: "This is the description for the image" },
];

const OurParish = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>
      {/* First Section - Parish Members */}
      <div className="our-parish-container mt-5">
        <h2 className="mt-5">Meet Our Parish Members</h2>
        
        <div className="members-list mt-5">
          {members.map((member) => (
            <div key={member.id} className="member-row" onClick={() => setSelectedMember(member)}>
              <img src={member.img} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
            </div>
          ))}
        </div> 

        {/* Second Row */}
        <div className="members-list1 mt-5">
          {member1.map((member1) => (
            <div key={member1.id} className="member-row" onClick={() => setSelectedMember(member1)}>
              <img src={member1.img} alt={member1.name} className="member-image" />
              <h3 className="member-name">{member1.name}</h3>
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
        <h2 className="mt-5">Meet Our Parish Council Members</h2>
        
        <div className="container-fluid members-list mt-5">
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
