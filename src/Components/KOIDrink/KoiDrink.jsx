// KoiDrink.js
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { IoAddSharp } from "react-icons/io5";
import "../KOIDrink/KoiDrink.css";
// import Cart from "../Cart/Cart";

const KoiDrink = ({ handleClickOrder }) => {
  const API_KOI_URL = "http://localhost:8080/koiThe";
  const [koiAPI, setKoiAPI] = useState([]);

  useEffect(() => {
    const fetchDataAPIKoi = async () => {
      try {
        const response = await fetch(API_KOI_URL);
        const listAPIKoi = await response.json();
        // console.log(listAPIKoi);
        setKoiAPI(listAPIKoi);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataAPIKoi(); // Call the function to fetch data
  }, []);

  return (
    <Container fluid>
      <Row>
        <Row>
          {koiAPI.map((koi) => (
            <Col sm={12} md={6} lg={4} xl={4} div className="mb-3" key={koi.id}>
              <Card className="hoverKoi">
                <div className="boxKoi">
                  <Card.Body>
                    <Card.Title>
                      <h3>{koi.name}</h3>
                    </Card.Title>
                    <Card.Text>
                      <div className="textKoi">
                        <p>{koi.title}</p>
                        <h3>ចាប់ពី ${koi.price}</h3>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="addToCard"
                    onClick={() => handleClickOrder(koi)}
                  >
                    <IoAddSharp className="iconAdd" />
                  </Button>
                  <div className="img-koi">
                    <img src={koi.img} alt="" />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            Here you can pass whatever data you want to pass to Cart
            <Cart cartData={cartShowData} />
          </div>
        </div> */}
      </Row>
    </Container>
  );
};

export default KoiDrink;
