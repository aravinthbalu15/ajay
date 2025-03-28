import React, { useState } from "react";
// import sec from "../images/council/jacqulin.jpeg";
import "../Style/OurParish.css"; // Ensure this CSS file exists

const members = [
  { id: 1, name: "Priest(President)", dob: "Jan 1, 1980", original:"Fr.Maria William",img: "../src/images/aju.webp",p:"hi hello" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Mr.Richard Joseph Raj", img: "../src/images/image2.png" },
  { id: 3, name: "Secretary", dob: "Mar 22, 1990", original:"Mrs.Jacqulin",img: "../src/images/council/jacqulin.jpeg" },
];

const member1 = [
  { id: 1, name: "Treasurer", dob: "Jan 1, 1980", original:"Mrs.Charlet Rani",img: "../src/images/aju.webp" },
  { id: 2, name: "Co-Secreatry", dob: "Feb 15, 1985",original:"Mr.Jenish", img: "../src/images/image2.png" },
];
const counsil = [
  { id: 1, name: "SAJITHA", dob: "Jan 1, 1980", original:"SAJITHA",img: "../src/images/council/sajitha.jpeg",p:"இளைஞர் இயக்கம்(பெண்கள்)" },
  { id: 2, name: "SHAJI", dob: "Feb 15, 1985",original:"SHAJI", img: "../src/images/council/shajii.jpeg",p:"அன்பியம்-01" },
  { id: 2, name: "JENIBA", dob: "July 09, 1995",original:"JENIBA", img: "../src/images/council/jenibaa.jpeg",p:"கத்தோலிக்க சேவா சங்கம்" },
  { id: 2, name: "ASHWIN A", dob: "July 21, 1995",original:"ASHWIN A", img: "../src/images/council/aswin.jpeg",p:"அன்பியம்-06" },
  { id: 2, name: "GLADIS LILY", dob: "Feb 15, 1985",original:"GLADIS LILY", img: "../src/images/council/gladis.jpeg",p:"this is the description for the image" },
  { id: 2, name: "JERIN", dob: "Feb 15, 1985",original:"JERIN", img: "../src/images/council/jerin.jpeg",p:"this is the description for the image" },
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
                  {/* first-container-first-row */}
      <div className="our-parish-container mt-5">
        <h2 className="mt-5">Meet Our Parish Members</h2>
        
        <div className="members-list mt-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="member-row"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.img} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
            </div>
          ))}
        </div> 
                  {/* first-container-second-row  */}
        <div className="members-list1 mt-5">
          {member1.map((member1) => (
            <div
              key={member1.id}
              className="member-row"
              onClick={() => setSelectedMember(member1)}
            >
              <img src={member1.img} alt={member1.name} className="member-image" />
              <h3 className="member-name">{member1.name}</h3>
            </div>
          ))}
        </div>
        {selectedMember && (
          <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
            <div className="popup-content animate-popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedMember.img} alt={selectedMember.name} className="popup-image" />
              <h2>{selectedMember.original}</h2>
              <p>Date of Birth: {selectedMember.dob}</p>
              <button className="close-btn" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div> 

                   {/*counsil member */}
      <div className="our-parish-container mb-5">
        <h2 className="mt-5"> Our Parish Council</h2>
        
        <div className=" container-fluid members-list mt-5">
          {counsil.map((counsil) => (
            <div
              key={counsil.id}
              className="member-row"
              onClick={() => setSelectedMember(counsil)}
            >
              <img src={counsil.img} alt={counsil.name} className="member-image" />
              <h3 className="member-name">{counsil.name}</h3>
              <p>{counsil.p}</p>
            </div>
          ))}
        </div> 
                  
              


        {selectedMember && (
          <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
            <div className="popup-content animate-popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedMember.img} alt={selectedMember.name} className="popup-image" />
              <h2>{selectedMember.original}</h2>
              <p>Date of Birth: {selectedMember.dob}</p>
              <button className="close-btn" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurParish;