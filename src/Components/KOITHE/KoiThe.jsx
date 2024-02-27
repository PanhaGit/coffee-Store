import { Container, Row, Col } from "react-bootstrap";
import "./KoiThe.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdDirectionsBike } from "react-icons/md";
import KOITHEImage from "../../assets/API_img/koi.jpg";
import KoiDrink from "../KOIDrink/KoiDrink";
const KoiThe = ({ handleClickOrder }) => {
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
        <Link
          to={"/menu"}
          style={{
            textDecoration: "none",
            color: "#808080",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          <p>
            Menu
            <MdOutlineKeyboardArrowRight
              style={{ fontSize: "30px", color: "#000" }}
            />
          </p>
        </Link>
        <p
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          KOI THE
        </p>
      </div>

      <Row>
        <Col sm={12} md={12} lg={6} xl={5}>
          <div className="FlexBox">
            <div className="ImageKOITHE">
              <img src={KOITHEImage} alt="" />
            </div>
            <div className="txt_koi-the mx-4">
              <p>ភេសជ្ជៈ តែ និងកាហ្វេតែទឹកដោះគោ</p>
              <h1>KOI The Phnom Penh</h1>
              <p>
                <MdDirectionsBike />
                1$ Delivery
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          width: "100%",
          height: "0.96px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      ></div>
      <h3
        style={{
          fontFamily: "'Noto Sans Khmer', sans-serif",
          color: "#505050",
        }}
      >
        ការបញ្ចុះតម្លៃដែលមាន
      </h3>
      <div
        style={{
          width: "100%",
          height: "0.96px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      ></div>
      <KoiDrink handleClickOrder={handleClickOrder} />
    </Container>
  );
};

export default KoiThe;
