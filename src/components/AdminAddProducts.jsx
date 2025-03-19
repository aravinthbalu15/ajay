import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const AdminAddProducts = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price || !description || !category || !image) {
      setMessage("All fields are required!");
      return;
    }

    // Simulating API call
    setMessage("Product added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4" style={{ maxWidth: "600px", margin: "auto" }}>
        <h2 className="text-center mb-4">Add Product</h2>
        {message && <Alert variant="info">{message}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="price" className="mt-3">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Books">Books</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="image" className="mt-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} required />
            {preview && <img src={preview} alt="Preview" className="mt-3" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />}
          </Form.Group>

          <Button type="submit" className="mt-4 w-100" variant="primary">
            Add Product
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminAddProducts;
