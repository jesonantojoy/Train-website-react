import React, { useEffect } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // For navigation
import { selectUserDetails,selectJourneyDetails,selectPassengers } from "../Redux/selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ticket.css";

const Ticketpage = () => {
 
const users = useSelector(selectUserDetails);
const journeyDetails = useSelector(selectJourneyDetails);
const passengers = useSelector(selectPassengers);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User Details:', users);
    console.log('Journey Details:', journeyDetails);
    console.log('Passengers:', passengers);
  
    if (!users || !users.name || !users.email) {
      alert("User details are missing. Please register to view tickets.");
      navigate("/"); // Redirect to the register page
    }
  }, [users, journeyDetails, passengers, navigate]);
  

  const generateSeatDetails = () => {
    const berthTypes = ["Lower Berth", "Upper Berth", "Middle Berth"];
    const maxSeatNumber = 81;
    const seatNumber = Math.floor(Math.random() * maxSeatNumber) + 1;
    const berth = berthTypes[Math.floor(Math.random() * berthTypes.length)];
    const coachPrefix = journeyDetails?.seatType === "seater" ? "D" : "S"; // D for Seater, S for Sleeper/AC
    const coachNumber = Math.floor(Math.random() * 7) + 1; // Coach numbers from 1 to 7
    return journeyDetails?.seatType === "seater"
      ? `D${coachNumber}-${seatNumber}`
      : `S${coachNumber}-${berth}-${seatNumber}`;
  };

  const totalAmount = journeyDetails?.price * journeyDetails?.tickets || 0;

  if (!journeyDetails || !passengers || !users) {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <Card className="p-4 text-center" style={{ borderRadius: "15px" }}>
          <h4>No Ticket Available</h4>
          <p>Please complete your booking to view the ticket details.</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card
        className="p-4 ticket-card"
        style={{
          width: "700px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Header with logo and website name */}
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

        <hr />

        {/* Train Details */}
        <div className="mb-4">
          <Row>
            <Col>
              <strong>Train Name:</strong> {journeyDetails.trainName}
            </Col>
            <Col>
              <strong>Train Number:</strong> {journeyDetails.trainNumber}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Departure Time:</strong> {journeyDetails.departureTime}
            </Col>
            <Col>
              <strong>Arrival Time:</strong> {journeyDetails.arrivalTime}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>From:</strong> {journeyDetails.from}
            </Col>
            <Col>
              <strong>To:</strong> {journeyDetails.to}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Departure Date:</strong> {journeyDetails.departureDate}
            </Col>
            <Col>
              <strong>Total Tickets:</strong> {journeyDetails.tickets}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Price per Ticket:</strong> ₹{journeyDetails.price}
            </Col>
            <Col>
              <strong>Total Amount:</strong> ₹{totalAmount}
            </Col>
          </Row>
        </div>

        <hr />

        {/* Passenger Details */}
        <div className="mb-4">
          <h5>Passenger Details:</h5>
          {passengers.map((passenger, index) => {
            const seatDetails = generateSeatDetails();
            return (
              <Row key={index} className="mb-2">
                <Col>
                  <strong>Name:</strong> {passenger.name}
                </Col>
                <Col>
                  <strong>Age:</strong> {passenger.age}
                </Col>
                <Col>
                  <strong>Gender:</strong> {passenger.gender}
                </Col>
                <Col>
                  <strong>Seat:</strong> {seatDetails}
                </Col>
              </Row>
            );
          })}
        </div>

        <hr />

        {/* User Details */}
        <div className="text-center">
          <p>
            <strong>Booked By:</strong> {users.name}
          </p>
          <p>
            <strong>Email:</strong> {users.email}
          </p>
          <p>
            <strong>Phone:</strong> {users.Phone}
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Ticketpage;
