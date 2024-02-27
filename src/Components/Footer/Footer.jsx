import { Container } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const now = new Date();
  console.log(now.getFullYear());
  return (
    <Container fluid>
      <div className="lineFooter"></div>
      <footer style={{ backgroundColor: "#fff" }}>
        <div className="row mt-4">
          <div className="col-xxl-12 col-xl-12 col-md-12 col-sm-12 ">
            <Link to="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <FaFacebook className="iconSize" />
            </Link>
            <Link
              to="https://www.tiktok.com/@u_panha_?_t=8jvI5dVkTmD&_r=1"
              target="_blank"
            >
              <FaTiktok className="iconSize" />
            </Link>
            <Link
              to="https://www.tiktok.com/@u_panha_?_t=8jvI5dVkTmD&_r=1"
              target="_blank"
            >
              <FaInstagram className="iconSize" />
            </Link>
          </div>
        </div>
        <div className="dataTime">
          <p>
            &copy; copyright {new Date().getFullYear()} by: Panha IT Student
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
