import React from 'react';
import '../Style/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image4 from "../images/all-soul/image.png";

const About = () => {
  return (
    <Container className="anbiyangal-container mt-5">
      {/* Section Title */}
      <h1 className="section-title">About Us</h1>
     
      {/* Image Centered */}
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <div className="image-container"><br />

            <img src={Image4} alt="Church History" className="rect-img-about img-fluid" /><br />
          </div>
        </Col>
      </Row>

      {/* Full-Width Text Section */}
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="full-width-text">
          We, the people of St. Joseph's Church parish, Kamplar, deeply cherish our
Chris=an Faith and long Catholic heritage. Our parish belongs to the Roman
Catholic diocese of Kuzhithurai. That our church is just 3.5 k.m. away from
Natalam, the na=ve village of St. Devasahayam, adds to its spiritual significance.            <br /><br />
Our parish has about 225 families organized into seven Basic Christan
Communi=es (Anbiams). It is a very ac=ve parish, led by our parish pastoral
council, and having a plethora of apostolic associa=ons and par=cipatory
structures to form us and to serve people.            <br /><br />
The stone-cross, belonging to St. Thomas' era, found at Devandivilai, within our
parish, remain a witness, reminding us of the =mes of yore when Chris=an faith
dawned upon us.            <br /><br />
Kamplar, once known for its Palmyra-based tradi=ons and farming, s=ll keeping
its lush green environment, enjoys a pleasant climate with both Southwest and
Northeast monsoons.          </p>
<p>St. Joseph's Church, Kamplar is located within Killiyoor Taluk, at the South-
Western part of Kanyakumari District, Tamil Nadu. It lies (at 8015'17''N and
77012'46'') about 25 K.M. away from Nagercoil, westward and about 50 K.M.
from Thiruvananthapuram to the east.</p>
        </Col>
      </Row>
      
    </Container>
  );
};

export default About;
