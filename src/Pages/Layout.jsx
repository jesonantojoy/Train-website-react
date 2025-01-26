import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectUserDetails } from "../Redux/selectors";

const Layout = ({children}) => {
  // Assuming `user` is passed as a prop or fetched from a global state
    const user = useSelector(selectUserDetails);
  

  return (
    <div>
      {/* Header with Logo and Website Name */}
      <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand>
            {/* Left section with Logo */}
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.vectorstock.com/i/500p/19/22/retro-train-vintage-emblem-vector-20521922.jpg"
                alt="RailConnect Logo"
                style={{ height: "40px" }}
                className="mr-2"
              />
              <span style={{ fontSize: "1.5rem", color: "#1e88e5" }}>
                RailConnect
              </span>
            </div>
          </Navbar.Brand>

          {/* Navbar Links and User Details */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Register
              </Link>
              <Link to="/journey" className="nav-link">
                Journey
              </Link>

              {/* Right section with User Details */}
              <div className="d-flex align-items-center ml-3">
              {!user || !user.name ? (
      <span style={{ fontSize: "1rem", color: "#6c757d" }}>👤 Guest</span>
    ) : (
        <span style={{ fontSize: "1rem" }}>
        <button style={{color:"blue",border:"1px solid white"}}><Link to="/profile" className="nav-link" style={{ color: "#1e88e5" }}>
        👤 Profile
        </Link></button>
      </span>
    )}
</div>
</Nav>
 </Navbar.Collapse>
 </Container>
 </Navbar>

      {/* Main Content (children) */}
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
