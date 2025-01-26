import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/trainSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", Phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", Phone: "", email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validate Name, Phone, and Email
  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const phoneRegex = /^[0-9]{10}$/; // 10 digit phone number
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple email regex

    // Name validation
    if (!nameRegex.test(form.name)) {
      newErrors.name = "Name must contain only letters.";
    }

    // Phone validation
    if (!phoneRegex.test(form.Phone)) {
      newErrors.Phone = "Phone number must be 10 digits.";
    }

    // Email validation
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(setUserDetails(form));
      navigate("/journey");
    }
  };


  return (
    <Container className="d-flex justify-content-center mt-5">
      {/* Vertical Card Layout */}
      <Card className="p-4" style={{ width: "400px", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        {/* Header with logo and website name */}
        <div className="text-center mb-4">
          <Image
            src="https://cdn.vectorstock.com/i/500p/19/22/retro-train-vintage-emblem-vector-20521922.jpg"
            alt="RailConnect Logo"
            style={{ height: "50px" }}
            className="mb-2"
          />
          <h3 style={{ color: "#1e88e5" }}>RailConnect</h3>
          <p className="text-muted">Your Trusted Train Booking Partner</p>
        </div>

        {/* Form for Register */}
        <h4 className="text-center mb-4">Register</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              isInvalid={!!errors.name}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone no</Form.Label>
            <Form.Control
              type="number"
              value={form.Phone}
              onChange={(e) => setForm({ ...form, Phone: e.target.value })}
              maxLength="10"
              isInvalid={!!errors.Phone}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.Phone}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="w-100 mt-3">
            Next
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegisterPage;
