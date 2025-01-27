import React, { useState ,useEffect} from "react";
import { Container, Form, Button, Image, Row, Col } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { selectUserDetails } from "../Redux/selectors";
import { setJourneyDetails, setTrainOptions } from "../Redux/trainSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select"; 

const JourneyPage = () => {
  const user = useSelector(selectUserDetails);

  const [journey, setJourney] = useState({
    from: "",
    to: "",
    departureDate: "",
    tickets: 1,
    price: 0,
    seats: { sleeper: 0, seater: 0, RAC: 0, AC3: 0, AC2: 0, AC1: 0 },
    Departure: "",
    Arrival: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const cities = [
    { value: "Delhi", label: "Delhi 🏙️" },
    { value: "Mumbai", label: "Mumbai 🌆" },
    { value: "Chennai", label: "Chennai 🌴" },
    { value: "Kolkata", label: "Kolkata 🌉" },
    { value: "Bangalore", label: "Bangalore 🌳" },
    { value: "Hyderabad", label: "Hyderabad 🌐" },
    { value: "Pune", label: "Pune 🏞️" },
    { value: "Jaipur", label: "Jaipur 🏰" },
    { value: "Ahmedabad", label: "Ahmedabad 🏙️" },
    { value: "Lucknow", label: "Lucknow 🕌" },
    { value: "Bhopal", label: "Bhopal 🌸" },
    { value: "Patna", label: "Patna 🏛️" },
    { value: "Indore", label: "Indore 🌳" },
    { value: "Chandigarh", label: "Chandigarh 🌿" },
  ];

  const handleSearchTrains = (e) => {
    e.preventDefault();
    dispatch(setJourneyDetails(journey));
    dispatch(
      setTrainOptions([
        {
          number: "12345",
          name: "Rajdhani Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2500,
          departure: "06:00 AM",
          arrival: "12:00 PM",
         seats: { sleeper: 10, seater: 10, RAC: 5, AC3: 10, AC2: 5, AC1: 5 }
        },
        {
          number: "54321",
          name: "Shatabdi Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1800,
          departure: "08:00 AM",
          arrival: "01:00 PM",
          seats: { sleeper: 5, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 5 }
        },
        {
          number: "67890",
          name: "Duronto Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2200,
          departure: "10:00 AM",
          arrival: "05:00 PM",
          seats: { sleeper: 10, seater: 5, RAC: 2, AC3: 5, AC2: 3, AC1: 2 }
        },
        {
          number: "11223",
          name: "Garib Rath Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1500,
          departure: "01:00 PM",
          arrival: "08:00 PM",
          seats: { sleeper: 15, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 0 }
        },
        {
          number: "44556",
          name: "Jan Shatabdi Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1200,
          departure: "03:00 PM",
          arrival: "09:00 PM",
          seats: { sleeper: 10, seater: 20, RAC: 5, AC3: 5, AC2: 5, AC1: 10 }
        },
        {
          number: "77889",
          name: "Tejas Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2000,
          departure: "05:00 PM",
          arrival: "10:30 PM",
          seats: { sleeper: 0, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 0 }
        },
        {
          number: "33445",
          name: "Vande Bharat Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 3000,
          departure: "07:00 AM",
          arrival: "01:30 PM",
          seats: { sleeper: 0, seater: 20, RAC: 5, AC3: 5, AC2: 5, AC1: 5 }
        },
        {
          number: "99887",
          name: "Humsafar Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2200,
          departure: "09:00 PM",
          arrival: "06:00 AM",
          seats: { sleeper: 10, seater: 5, RAC: 5, AC3: 10, AC2: 5, AC1: 5 }
        },
        {
          number: "55432",
          name: "Intercity Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1400,
          departure: "11:00 PM",
          arrival: "07:00 AM",
          seats: { sleeper: 15, seater: 10, RAC: 5, AC3: 10, AC2: 5, AC1: 0 }
        },
        {
          number: "66778",
          name: "Mysuru Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 800,
          departure: "07:00 AM",
          arrival: "09:30 AM",
          seats: { sleeper: 5, seater: 15, RAC: 5, AC3: 5, AC2: 0, AC1: 0 }
        },
        {
          number: "78456",
          name: "Southern Star Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1700,
          departure: "04:00 PM",
          arrival: "10:00 PM",
          seats: { sleeper: 10, seater: 10, RAC: 5, AC3: 5, AC2: 3, AC1: 2 }
        },
        {
          number: "92345",
          name: "Eastern Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2100,
          departure: "08:30 PM",
          arrival: "04:30 AM",
          seats: { sleeper: 10, seater: 5, RAC: 5,  AC3: 10, AC2: 5, AC1: 5 }
        },
        {
          number: "89654",
          name: "Western Voyager",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2500,
          departure: "10:00 AM",
          arrival: "06:00 PM",
          seats: { sleeper: 15, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 5 }
        }, {
          number: "77432",
          name: "Northern Breeze",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2400,
          departure: "09:00 AM",
          arrival: "03:30 PM",
          seats: { sleeper: 10, seater: 15, RAC: 5, AC3: 5, AC2: 5, AC1: 5 },
        },
        {
          number: "88112",
          name: "Coastal Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1700,
          departure: "07:30 AM",
          arrival: "02:30 PM",
          seats: { sleeper: 5, seater: 20, RAC: 5, AC3: 5, AC2: 5, AC1: 0 },
        },
        {
          number: "99123",
          name: "Golden Chariot",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 3200,
          departure: "05:00 PM",
          arrival: "11:30 PM",
          seats: { sleeper: 5, seater: 5, RAC: 2, AC3: 5, AC2: 5, AC1: 5 },
        },
        {
          number: "34567",
          name: "Silver Line Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2000,
          departure: "12:00 PM",
          arrival: "06:00 PM",
          seats: { sleeper: 10, seater: 10, RAC: 5, AC3: 10, AC2: 5, AC1: 5 },
        },
        {
          number: "55678",
          name: "Mountain View Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1800,
          departure: "10:30 AM",
          arrival: "04:00 PM",
          seats: { sleeper: 10, seater: 15, RAC: 5, AC3: 5, AC2: 5, AC1: 2 },
        },
        {
          number: "67321",
          name: "Riverfront Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1500,
          departure: "02:00 PM",
          arrival: "08:30 PM",
          seats: { sleeper: 20, seater: 20, RAC: 5, AC3: 10, AC2: 5, AC1: 0 },
        },
        {
          number: "99881",
          name: "Night Owl Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1400,
          departure: "11:00 PM",
          arrival: "06:00 AM",
          seats: { sleeper: 15, seater: 10, RAC: 5, AC3: 10, AC2: 5, AC1: 0 },
        },
        {
          number: "88992",
          name: "Heritage Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1900,
          departure: "04:00 PM",
          arrival: "11:00 PM",
          seats: { sleeper: 10, seater: 15, RAC: 5, AC3: 10, AC2: 5, AC1: 2 },
        },
        {
          number: "78452",
          name: "Desert Voyager",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 1600,
          departure: "03:30 PM",
          arrival: "09:00 PM",
          seats: { sleeper: 5, seater: 10, RAC: 2, AC3: 5, AC2: 5, AC1: 5 },
        },
        {
          number: "55002",
          name: "Island Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 3000,
          departure: "06:00 AM",
          arrival: "02:00 PM",
          seats: { sleeper: 10, seater: 15, RAC: 5, AC3: 5, AC2: 5, AC1: 5 },
        },
        {
          number: "45001",
          name: "Emerald Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2800,
          departure: "01:00 PM",
          arrival: "09:00 PM",
          seats: { sleeper: 10, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 5 },
        },
        {
          number: "77788",
          name: "Oceanic Express",
          from: journey.from,
          to: journey.to,
          departureDate: journey.departureDate,
          price: 2500,
          departure: "03:00 PM",
          arrival: "11:00 PM",
          seats: { sleeper: 5, seater: 10, RAC: 5, AC3: 5, AC2: 5, AC1: 5 },
        },
      ])
    );
    navigate("/trains");
  };

  useEffect(() => {
    setTrainOptions([{}])

  }, []);

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

      <div className="text-center">
  <h1 className="mb-4">
    {!user || !user.name ? (
      <span>👋 Hello, Guest!</span>
    ) : (
      <span>👋 Hello, {user.name}!</span>
    )}
  </h1>

</div>

   

      <h2 className="mb-4" style={{ color: "#1e88e5" }}>Journey Details</h2>
      <Form onSubmit={handleSearchTrains}>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>From 🚉</Form.Label>
              <Select
                options={cities}
                onChange={(selectedOption) =>
                  setJourney({ ...journey, from: selectedOption.value })
                }
                placeholder="Select departure city"
                required
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "35px",
                    fontSize: "14px",
                  }),
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>To 🚄</Form.Label>
              <Select
                options={cities}
                onChange={(selectedOption) =>
                  setJourney({ ...journey, to: selectedOption.value })
                }
                placeholder="Select destination city"
                required
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "35px",
                    fontSize: "14px",
                  }),
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Departure Date 📅</Form.Label>
              <Form.Control
                type="date"
                value={journey.departureDate}
                onChange={(e) =>
                  setJourney({ ...journey, departureDate: e.target.value })
                }
                required
                style={{
                  fontSize: "14px",
                  height: "35px",
                }}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Number of Tickets 🎟️</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={journey.tickets}
                onChange={(e) =>
                  setJourney({ ...journey, tickets: e.target.value })
                }
                required
                style={{
                  fontSize: "14px",
                  height: "35px",
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          type="submit"
          variant="primary"
          style={{
            width: "100%",
            backgroundColor: "#1e88e5",
            border: "none",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          Search Trains 🚆
        </Button>
      </Form>
    </Container>
  );
};

export default JourneyPage;
