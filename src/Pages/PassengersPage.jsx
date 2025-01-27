import React, { useState } from "react";
import { Container, Form, Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPassengers } from "../Redux/trainSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectPassengers } from "../Redux/selectors";

const PassengersPage = () => {
  const passengers = useSelector((state) => selectPassengers(state));
  const journeyDetails = useSelector((state) => state.train.journeyDetails);
  const [details, setDetails] = useState(passengers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name); 
  const isValidAge = (age) => /^\d+$/.test(age) && age >= 1 && age <= 120; 
  const newErrors = {};

  const handleChange = (index, field, value) => {
    setDetails((prevDetails) =>
      prevDetails.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < details.length; i++) {
      const passenger = details[i];

      if (!isValidName(passenger.name)) {
        alert(`Invalid name for passenger ${i + 1}. Only letters and spaces are allowed.`);
        newErrors.name = "Name must contain only letters.";
        return;
      }

      if (!isValidAge(passenger.age)) {
        alert(`Invalid age for passenger ${i + 1}. Please enter a valid number between 1 and 120.`);
        return;
      }
    }

    dispatch(setPassengers(details));
    navigate("/summary");
  };

  return (
    <Container>
      <div className="text-center mb-4">
        <Image
          src="https://cdn.vectorstock.com/i/500p/19/22/retro-train-vintage-emblem-vector-20521922.jpg" // Replace with your logo's file path
          alt="RailConnect Logo"
          style={{ height: "50px" }}
          className="mb-2"
        />
        <h3 className="m-0" style={{ color: "#1e88e5" }}>
          RailConnect
        </h3>
        <p className="text-muted">Your Trusted Train Booking Partner</p>
      </div>

      <h2>Passenger Details</h2>
      <Form onSubmit={handleSubmit}>
        {details.map((passenger, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <div className="d-flex flex-column">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor={`name-${index}`}>Name</Form.Label>
                  <Form.Control
                    id={`name-${index}`}
                    type="text"
                    value={passenger.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                    required
                    maxLength={30}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor={`age-${index}`}>Age</Form.Label>
                  <Form.Control
                    id={`age-${index}`}
                    type="number"
                    value={passenger.age}
                    onChange={(e) => handleChange(index, "age", e.target.value)}
                    required
                    min="1" 
                    max="120" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor={`gender-${index}`}>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    id={`gender-${index}`}
                    value={passenger.gender}
                    onChange={(e) => handleChange(index, "gender", e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>

                {journeyDetails.seatType !== "seater" && (
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor={`berth-${index}`}>Preferred Berth</Form.Label>
                    <Form.Control
                      as="select"
                      id={`berth-${index}`}
                      value={passenger.prefferedBerth || ""}
                      onChange={(e) => handleChange(index, "prefferedBerth", e.target.value)}
                      required
                    >
                      <option value="">Select Berth</option>
                      {["Lower Berth", "Middle Berth", "Upper Berth", "Side Lower Berth", "Side Upper Berth"].map((berth) => (
                        <option key={berth} value={berth}>
                          {berth}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
        <Button type="submit" className="mt-3">Submit</Button>
      </Form>
    </Container>
  );
};

export default PassengersPage;
