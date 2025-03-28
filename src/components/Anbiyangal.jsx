import React from 'react';
import '../Style/Anbiyangal.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../images/all-soul/1.png";
import Image2 from "../images/all-soul/2.png";
import Image3 from "../images/all-soul/3.png";

import Image4 from "../images/all-soul/stjoseph1.png";
import Image6 from "../images/all-soul/anbiyam3.png";
import head1 from "../images/anbiyam/1head.png";
import sec1 from "../images/anbiyam/1sec.png";
import tre1 from "../images/anbiyam/1tre.png";
import anb4 from "../images/all-soul/infant1.png";



// import Image5 from "../images/all-soul/madha.png";
// import Image6 from "../images/all-soul/stjoseph1.png";
// import Image7 from "../images/all-soul/stjoseph1.png";
// import Image8 from "../images/all-soul/stjoseph1.png";
// import Image9 from "../images/all-soul/stjoseph1.png"; // Rectangular Image

const Anbiyangal = () => {
  return (
    <>
    {/* anbiyangal-1 */}
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-1</h1>
      <p className="section-subtitle text-center">புனித சூசையப்பர் அன்பியம்</p>
      
      <Row className="align-items-center">
        
        {/* Left Side - Three Circular Images with Description */}
        <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side">
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">பொருளாளர்</h1>
              <p className="image-desc">பொருளாளர்</p>
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


    <Container className="anbiyangal-container ">
      <h1 className="section-title">அன்பியம்-2</h1>
      <p className="section-subtitle text-center">சதா சகாய மாதா அன்பியம்</p>
      
      <Row className="align-items-center">
        
        {/* Left Side - Three Circular Images with Description */}
        <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side">
          <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">பொருளாளர்</h1>
              <p className="image-desc">பொருளாளர்</p>
            </div>
          </div>
    </Col>

        {/* Right Side - Large Rectangular Image with Description */}
        <Col md={6} className="d-flex flex-column align-items-start text-left right-side">
          <img src={Image4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-3 */}
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-3</h1>
      <p className="section-subtitle text-center">விண்ணரசி அன்பியம்</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி.ரேகா</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி. மரிய செல்வி</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி:சரண்யா</h1>
              <p className="image-desc">பொருளாளர்</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={Image6} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-4 */}
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-4</h1>
      <p className="section-subtitle text-center">குழந்தை இயேசு அன்பியம்</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={head1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி.S.ஷைனி</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={sec1} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி.D. S. மோனிஷா</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={tre1} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">திருமதி.V. விஜயா</h1>
              <p className="image-desc">பொருளாளர்</p>
            </div>
          </div>
    </Col>

    {/* Right Side - Rectangular Image (Mobile: First, Desktop: Second) */}
    <Col md={6} className="d-flex flex-column align-items-start text-left right-side order-0 order-md-1">
      {/* ... rectangular image content ... */}
      <img src={anb4} alt="Rectangular Image" className="rect-img" />
          <h1 className="rect-title">Main Heading</h1>
          <p className="rect-desc">This is the detailed description for the rectangular image. It provides more information about the content displayed.</p>
    </Col>
  </Row>
    </Container>
    {/* anbiyangal-5 */}
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-5</h1>
      <p className="section-subtitle text-center">அன்னை தெரேசா அன்பியம்</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">பொருளாளர்</h1>
              <p className="image-desc">பொருளாளர்</p>
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
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-6</h1>
      <p className="section-subtitle text-center">புனித பிரான்சிஸ் சவேரியார் அன்பியம்</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image3} alt="Image 3" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">பொருளாளர்</h1>
              <p className="image-desc">பொருளாளர்</p>
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
    <Container className="anbiyangal-container mt-5">
      <h1 className="section-title">அன்பியம்-7</h1>
      <p className="section-subtitle text-center">புனித அந்தோனியார் அன்பியம்</p>
      
      <Row className="align-items-center">
    {/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
    <Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
      {/* ... circular images content ... */}
      <div className="image-box d-flex align-items-center">
            <img src={Image1} alt="Image 1" className="circle-img" />
            <div className="text-content">
              <h1 className="image-title">தலைவர்</h1>
              <p className="image-desc">தலைவர்</p>
            </div>
          </div>
          <div className="image-box d-flex align-items-center">
            <img src={Image2} alt="Image 2" className="circle1-img" />
            <div className="text-content">
              <h1 className="image-title">செயலாளர்</h1>
              <p className="image-desc">செயலாளர்</p>
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


