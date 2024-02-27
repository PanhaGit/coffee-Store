import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/starbucks-logo-png.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Navber.css";
import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";

const Navbers = ({ size }) => {
  return (
    <Navbar expand="lg" style={{ boxShadow: "0px 2px 6px #ccc" }}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menuStyle"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <li>Home</li>
            </Nav.Link>
            <Nav.Link href="/menu">
              <li>Menu</li>
            </Nav.Link>
            <Nav.Link href="/about">
              <li>About us</li>
            </Nav.Link>
          </Nav>
          <div
            className="cartToCart"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link
              to="https://maps.google.com/"
              style={{ textDecoration: "none", color: "#101010" }}
            >
              <div className="map">
                <FaMapMarkerAlt className="maps" />
                <h1>Find a love admin</h1>
              </div>
            </Link>
            <Link to={"/addToCart"}>
              <span>{size}</span>
              <div className="addToCardKoi">
                <RiShoppingBagLine className="mx-3" />
              </div>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbers;
