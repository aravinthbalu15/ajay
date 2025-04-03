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
            St. Joseph’s Church, Kamplar, is a center of deep Christian faith and heritage. Located on the western side of Kanyakumari District in Killiyoor Taluk, Tamil Nadu, it lies 25 km from Nagercoil and within 50 km of Trivandrum. The church is just 3.5 km from Nattalam, the native village of St. Devasahayam Pillai, adding to its spiritual significance. It belongs to the Kuzhithurai Diocese.
            <br /><br />
            Kamplar, once known for its Palmyra-based traditions and farming, enjoys a pleasant climate with both Southwest and Northeast monsoons. The church serves over 200 families, organized into seven Anbiyams (small Christian communities).
            <br /><br />
            St. Joseph, the patron saint, is honored with a grand feast every May, drawing Kamplar natives from around the world. The church has Tholayavattam Parish as its substation.
            <br /><br />
            Kamplar Church holds an ancient Christian history linked to a stone cross in Devandivilai, believed to be from St. Thomas’ era. This cross marks the first step toward Christianity in the region, eventually leading to the present-day church. Its deep-rooted traditions and mysteries remain a testament to faith, awaiting divine revelation.
          </p>
        </Col>
      </Row>
      
    </Container>
  );
};

export default About;
