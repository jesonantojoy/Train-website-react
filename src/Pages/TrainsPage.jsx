import React, { useEffect } from "react";
import { Container, Button, Card, Row, Col, Badge, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPassengers, setJourneyDetails, setFixedTrains } from "../Redux/trainSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TrainsPage = () => {
  const trains = useSelector((state) => state.train.trainOptions);
  const fixedTrains = useSelector((state) => state.train.fixedTrains);
  const journeyDetails = useSelector((state) => state.train.journeyDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!fixedTrains.length && trains.length > 0) {
      const shuffledTrains = [...trains].sort(() => Math.random() - 0.5); // Shuffle once
      dispatch(setFixedTrains(shuffledTrains.slice(0, 6))); // Save to Redux
    }
  }, [trains, fixedTrains, dispatch]);

  const handleSelectSeat = (train, seatType) => {
    const selectedSeats = train.seats[seatType];
    if (selectedSeats > 0) {
      dispatch(
        setPassengers(
          new Array(parseInt(journeyDetails.tickets)).fill({
            name: "",
            age: "",
            gender: "",
            seatType,
          })
        )
      );
      dispatch(
        setJourneyDetails({
          ...journeyDetails,
          trainName: train.name,
          trainNumber: train.number,
          departureTime: train.departure,
          arrivalTime: train.arrival,
          price: train.price,
          seatType,
        })
      );
      navigate("/passengers");
    } else {
      alert("No seats available in this category!");
    }
  };

  return (
    <Container>
      <div className="text-center mb-4">
        <Image
          src="https://cdn.vectorstock.com/i/500p/19/22/retro-train-vintage-emblem-vector-20521922.jpg"
          alt="RailConnect Logo"
          style={{ height: "50px" }}
          className="mb-2"
        />
        <h3 className="m-0" style={{ color: "#1e88e5" }}>
          RailConnect
        </h3>
        <p className="text-muted">Your Trusted Train Booking Partner</p>
      </div>

      <h2 className="my-4 text-center">Available Trains</h2>
      <div>
        {fixedTrains.map((train) => (
          <Card key={train.number} className="mb-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={3} className="text-center">
                  <h5>
                    {train.name} <Badge bg="info">{train.number}</Badge>
                  </h5>
                  <p className="mb-0">
                    <strong>Price:</strong> ₹{train.price} per ticket
                  </p>
                </Col>
                <Col md={3}>
                  <p className="mb-1">
                    <strong>From:</strong> {train.from}
                  </p>
                  <p className="mb-1">
                    <strong>To:</strong> {train.to}
                  </p>
                  <p className="mb-1">
                    <strong>Departure:</strong> {train.departure}
                  </p>
                  <p className="mb-0">
                    <strong>Arrival:</strong> {train.arrival}
                  </p>
                </Col>
                <Col md={3}>
                  <p className="mb-1">
                    <strong>Departure Date:</strong> {train.departureDate}
                  </p>
                  <p className="mb-1">
                    <strong>Available Seats:</strong>
                  </p>
                  <div>
                    {Object.entries(train.seats).map(([type, count]) => (
                      <Badge
                        key={type}
                        bg={count > 0 ? "success" : "danger"}
                        className="me-1"
                      >
                        {type.toUpperCase()}: {count}
                      </Badge>
                    ))}
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <h6>Select Seat Type:</h6>
                  {Object.entries(train.seats).map(([type, count]) => (
                    <Button
                      key={type}
                      variant={count > 0 ? "primary" : "secondary"}
                      disabled={count <= 0}
                      className="me-2 mb-2"
                      onClick={() => handleSelectSeat(train, type)}
                    >
                      {type.toUpperCase()}
                    </Button>
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TrainsPage;
