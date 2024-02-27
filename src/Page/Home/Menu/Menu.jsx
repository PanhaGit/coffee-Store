import { Col, Container, Row } from "react-bootstrap";
import SilderBanner from "./SliderBanner/SilderBanner";
import Card from "react-bootstrap/Card";
import "./Menu.css";
import { Link } from "react-router-dom";
import koi from "../../../assets/API_img/koi.jpg";
import browncoffe from "../../../assets/API_img/browncoffe.jpg";
import starbusck from "../../../assets/API_img/starbusck.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Container fluid className="mt-3">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#808080",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          <p>
            Home
            <MdOutlineKeyboardArrowRight
              style={{ fontSize: "30px", color: "#000" }}
            />
          </p>
        </Link>
        <p style={{ color: "#111111", fontSize: "20px", fontWeight: "500" }}>
          Menu
        </p>
      </div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#koithe"
                style={{
                  color: "#006641",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                The KOI
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: "#006641",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Starbuck
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{
                  color: "#006641",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Brown Coffe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SilderBanner />
      <Link style={{ textDecoration: "none", color: "#101010" }}>
        <div className="Store">
          <h1 className="text-center my-3">Store Coffee Phnom Penh</h1>
        </div>
      </Link>
      <Row>
        <Col sm={12} md={6} lg={4} xl={4} className=" mb-3">
          <Card>
            <Link to={"/koi_the"}>
              <div className="imageS">
                <Card.Img variant="top" src={koi} />
              </div>
            </Link>
            <Card.Body>
              <Card.Title>
                <h3 className="nameShop">KOI The</h3>
              </Card.Title>
              <Card.Text>
                <h4 className="titleShop">ភេសជ្ជៈ តែនិងកាហ្វេតែទឹកដោះគោ</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4} className="mb-3">
          <Card>
            <Link to={"/koi_the"}>
              <div className="imageS">
                <Card.Img variant="top" src={browncoffe} />
              </div>
            </Link>
            <Card.Body>
              <Card.Title>
                <h3 className="nameShop">Brown Coffee</h3>
              </Card.Title>
              <Card.Text>
                <h4 className="titleShop">ភេសជ្ជៈ តែនិងកាហ្វេតែទឹកដោះគោ</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4} className="mb-3">
          <Card>
            <Link to={"/koi_the"}>
              <div className="imageS">
                <Card.Img variant="top" src={starbusck} />
              </div>
            </Link>
            <Card.Body>
              <Card.Title>
                <h3 className="nameShop">Starbusck</h3>
              </Card.Title>
              <Card.Text>
                <h4 className="titleShop">ភេសជ្ជៈ តែនិងកាហ្វេតែទឹកដោះគោ</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
