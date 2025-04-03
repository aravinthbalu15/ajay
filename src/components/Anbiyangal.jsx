import React from 'react';
import '../Style/Anbiyangal.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../images/all-soul/1.png";
import Image2 from "../images/all-soul/2.png";
import Image3 from "../images/all-soul/3.png";
import Image4 from "../images/all-soul/image.png"; // Rectangular Image
import Image5 from "../images/jenish.jpeg";

const members = [
  { id: 1, name: "Priest (President)", dob: "Jan 1, 1980", original: "Fr. Maria William", img: Image1,p:"this is the description for the image" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985", original: "Mr. Richard Joseph Raj", img: Image2,p:"this is the description for the image" },
  { id: 3, name: "Secretary", dob: "Mar 22, 1990", original: "Mrs. Jacqulin", img: Image3,p:"this is the description for the image" },
  { id: 1, name: "Treasurer", dob: "Jan 1, 1980", original: "Mrs. Charlet Rani", img: Image4,p:"this is the description for the image" },
  { id: 2, name: "Co-Secretary", dob: "Feb 15, 1985", original: "Mr. Jenish", img: Image5,p:"this is the description for the image" },
];

const member1 = [
 
];

const Anbiyangal = () => {
return (
<><br /><br /><br /><br /><br /><b><br /></b>

<h1 className="section-title">Co-Ordination of Anbiyam</h1>

<div className="members-list12 mt-5">
          {members.map((member) => (
            <div key={member.id} className="member-row" onClick={() => setSelectedMember(member)}>
              <img src={member.img} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
              <p>{member.p}</p>
            </div>
          ))}
        </div> 
{/* anbiyangal-1 */}
{/* anbiyangal-1 */}
<Container className="anbiyangal-container ">
<h1 className="section-title">அன்பியம்-1</h1>
<p className="section-subtitle text-center">புனித சூசையப்பர் அன்பியம்</p>
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
<img src={Image2} alt="Image 2" className="circle-img" />
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

<Container className="anbiyangal-container2">
<h1 className="section-title">அன்பியம்-2</h1>
<p className="section-subtitle text-center">சதா சகாய மாதா அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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
<h1 className="section-title">அன்பியம்-3</h1>
<p className="section-subtitle text-center">விண்ணரசி அன்பியம்</p>
<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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
<h1 className="section-title">அன்பியம்-4</h1>
<p className="section-subtitle text-center">குழந்தை இயேசு அன்பியம்</p>

<Row className="align-items-center">
{/* Left Side - Three Circular Images (Mobile: Second, Desktop: First) */}
<Col md={6} className="d-flex flex-column align-items-start gap-4 left-side order-1 order-md-0">
{/* ... circular images content ... */}
<div className="image-box d-flex align-items-center">
<img src={Image1} alt="Image 1" className="circle-img" />
<div className="text-content">
<h1 className="image-title">தலைவர்</h1>
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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
<p className="image-desc">This is the description for Image 1.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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
<img src={Image2} alt="Image 2" className="circle-img" />
<div className="text-content">
<h1 className="image-title">செயலாளர்</h1>
<p className="image-desc">This is the description for Image 2.</p>
</div>
</div>
<div className="image-box d-flex align-items-center">
<img src={Image3} alt="Image 3" className="circle-img" />
<div className="text-content">
<h1 className="image-title">பொருளாளர்</h1>
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