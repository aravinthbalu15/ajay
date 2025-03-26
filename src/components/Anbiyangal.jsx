import React from 'react';
import '../Style/Anbiyangal.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../images/all-soul/1.png";
import Image2 from "../images/all-soul/2.png";
import Image3 from "../images/all-soul/3.png";
import Image4 from "../images/all-soul/image.png"; // Rectangular Image

const Anbiyangal = () => {
  return (
    <>
    {/* anbiyangal-1 */}
   {/* anbiyangal-1 */}
<Container className="anbiyangal-container mt-5">
  <h1 className="section-title">Anbiyanga-1</h1>
  <p className="section-subtitle text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, sit!</p>
  
  <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img " />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
</Container>

    
    {/* anbiyangal-2 */}

    <Container className="anbiyangal-container2">
      <h1 className="section-title">Anbiyanga-2</h1>
      <p className="section-subtitle text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, totam?</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-3 */}
    <Container className="anbiyangal-container3">
      <h1 className="section-title">Anbiyanga-3</h1>
      <p className="section-subtitle text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id?</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-4 */}
    <Container className="anbiyangal-container4">
      <h1 className="section-title">Anbiyanga-4</h1>
      <p className="section-subtitle text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusamus!</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-5 */}
    <Container className="anbiyangal-container5">
      <h1 className="section-title">Anbiyanga-5</h1>
      <p className="section-subtitle text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, minus.</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-6 */}
    <Container className="anbiyangal-container6">
      <h1 className="section-title">Anbiyanga-6</h1>
      <p className="section-subtitle text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, exercitationem?</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-7 */}
    <Container className="anbiyangal-container7 mb-5">
      <h1 className="section-title">Anbiyanga-7</h1>
      <p className="section-subtitle text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 1</h1>
              <p className="image-desc">This is the description for Image 1.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 2</h1>
              <p className="image-desc">This is the description for Image 2.</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">Title 3</h1>
              <p className="image-desc">This is the description for Image 3.</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
</>
    
  );
}

export default Anbiyangal;
