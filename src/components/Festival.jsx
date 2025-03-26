import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FiZoomIn, FiZoomOut, FiX, FiMaximize2 } from "react-icons/fi";
import Image1 from "../images/christmas/1.png";
import Image2 from "../images/christmas/2.png";
import Image3 from "../images/christmas/3.png";
import Image4 from "../images/christmas/4.png";
import Image5 from "../images/christmas/5.png";
import Image6 from "../images/christmas/6.png";
import "../Style/Festival.css"; // Import CSS

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Festival = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  // Panning functionality
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setLastPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - lastPosition.x,
        y: e.clientY - lastPosition.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (show) {
        if (e.key === '+') handleZoomIn();
        if (e.key === '-') handleZoomOut();
        if (e.key === '0') resetZoom();
        if (e.key === 'Escape') handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [show, zoom]);

  // Zoom controls
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 1));
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Container className="festival-container mt-5">
      <h2 className="text-center event-title mt-5">🎉 2024 Event Highlights 🎊</h2>

      <Row className="g-4 mt-4">
        {images.map((image, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <div className="image-card" onClick={() => { setSelectedImage(image); setShow(true); }}>
              <img src={image} alt={`Event ${index + 1}`} className="event-img" />
              <div className="image-overlay">
                <FiMaximize2 className="overlay-icon" />
                <span>View Fullscreen</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal 
        show={show} 
        onHide={resetZoom}
        centered 
        size="xl"
        className="image-modal"
      >
        <Modal.Body 
          className="modal-body-custom"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="modal-controls">
            <Button variant="light" onClick={handleZoomIn} className="control-btn">
              <FiZoomIn size={20} />
            </Button>
            <Button variant="light" onClick={handleZoomOut} className="control-btn">
              <FiZoomOut size={20} />
            </Button>
            <Button variant="light" onClick={resetZoom} className="control-btn">
              {Math.round(zoom * 100)}%
            </Button>
            <Button 
              variant="light" 
              onClick={() => setShow(false)} 
              className="close-btn"
              aria-label="Close"
            >
              <FiX size={24} />
            </Button>
          </div>

          <div 
            className="image-container" 
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              cursor: isDragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default'
            }}
          >
            <img
              src={selectedImage}
              alt="Popup"
              className="popup-img"
            />
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Festival;