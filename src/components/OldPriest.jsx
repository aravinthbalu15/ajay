import React from "react";
import "../Style/OldPriest.css"; 
import Image1 from "../images/image1.png";
import Image01 from "../images/oldpriest/1.jpeg" // Ensure the correct path
import Image02 from "../images/oldpriest/2.jpeg" // Ensure the correct path
import Image05 from "../images/oldpriest/5.jpeg" // Ensure the correct path
import Image06 from "../images/oldpriest/6.jpeg" // Ensure the correct path




const oldPriests = [
    { id: 1, name: "Fr. Arul Devadasan", dob: "2008 - 2015", img: Image01 },
    { id: 2, name: "Fr. S. Maria Martin", dob: "May 2015 - May 2016",  img: Image02 },
    { id: 3, name: "Fr. S. Vargheese", dob: " May 2016 to December 2018",img: Image1 },
];

const otherMembers = [
    { id: 4, name: "⁠FR. JUSTUS", dob: "2019to May 2019 (in charge)", img: Image1 },
    { id: 5, name: "Fr. N. John Benhar", dob: "May 2019 to May 2024",img: Image05 },
    { id: 3, name: "Fr. M.Maria William", dob: "May 2024 to ...",img: Image06 },

];

const OldPriest = () => {
  return (
    
    <div className="our-parish-containers mt-5">
      {/* First View Box - Old Priests */}
      <h2 className="section-title mt-5">Our Former Parish Priests</h2>
     
      <div className="members-list mt-5">
        {oldPriests.map((member) => (
          <div key={member.id} className="member-row">
            <img src={member.img} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-info"><strong></strong> {member.dob}</p>
          </div>
        ))}
      </div>

      {/* Second View Box - Other Parish Members */}

      <div className="members-list mt-5">
        {otherMembers.map((member) => (
          <div key={member.id} className="member-row">
            <img src={member.img} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-info"><strong></strong> {member.dob}</p>
          </div>
        ))}
      </div>
   
       <br /><br />
    </div>
  );
};

export default OldPriest;
