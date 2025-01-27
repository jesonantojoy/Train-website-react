import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.train.userDetails);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4" style={{ width: "400px", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
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
        <h4 className="text-center mb-4">Profile</h4>

        <div>
          <div className="mb-3">
            <strong>Name: </strong>
            <span>{user.name || "Guest"}</span>
          </div>
          <div className="mb-3">
            <strong>Email: </strong>
            <span>{user.email || "Not Provided"}</span>
          </div>
          <div className="mb-3">
            <strong>Phone No: </strong>
            <span>{user.Phone || "Not Provided"}</span>
          </div>
        </div>

      </Card>
    </Container>
  );
};

export default ProfilePage;
