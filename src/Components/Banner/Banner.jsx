import React from "react";
import banner from "../../assets/Banner/coffeeBanner.webp";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="bg mb-3">
        <Col sm={12} md={6} lg={6} xl={6} className="imageBox">
          <img src={banner} alt="" />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime
            unde magnam, tempore corrupti ipsam harum similique eos
            exercitationem quaerat molestiae porro blanditiis possimus
            voluptatum dicta voluptatibus. Incidunt, dolorum accusamus.
          </p>
        </Col>
      </Row>
      <Row className="bg mb-3">
        <Col sm={12} md={6} lg={6} xl={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime
            unde magnam, tempore corrupti ipsam harum similique eos
            exercitationem quaerat molestiae porro blanditiis possimus
            voluptatum dicta voluptatibus. Incidunt, dolorum accusamus.
          </p>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} className="imageBox">
          <img src={banner} alt="" />
        </Col>
      </Row>
      <Row className="bg mb-3">
        <Col sm={12} md={6} lg={6} xl={6} className="imageBox">
          <img src={banner} alt="" />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime
            unde magnam, tempore corrupti ipsam harum similique eos
            exercitationem quaerat molestiae porro blanditiis possimus
            voluptatum dicta voluptatibus. Incidunt, dolorum accusamus.
          </p>
        </Col>
      </Row>
      <Row className="bg mb-3">
        <Col sm={12} md={6} lg={6} xl={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime
            unde magnam, tempore corrupti ipsam harum similique eos
            exercitationem quaerat molestiae porro blanditiis possimus
            voluptatum dicta voluptatibus. Incidunt, dolorum accusamus.
          </p>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} className="imageBox">
          <img src={banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
