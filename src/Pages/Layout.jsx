import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectUserDetails } from "../Redux/selectors";

const Layout = ({children}) => {
    const user = useSelector(selectUserDetails);
  

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand>
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
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Register
              </Link>
              <Link to="/journey" className="nav-link">
                Journey
              </Link>
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
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
