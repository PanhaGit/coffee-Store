import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./AddToCard.css";
import Table from "react-bootstrap/Table";
import { CiCreditCard1 } from "react-icons/ci";
import { FaMinus, FaPaypal, FaPlus } from "react-icons/fa";
import iconABA from "../../../public/iconABA.png";
import iconAclyda from "../../../public/icon-aclyda.png";
import iconWing from "../../../public/wing-icon.jpg";
import { FaXmark } from "react-icons/fa6";
const AddToCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((drink) => {
      ans += drink.amount * drink.price;
    });
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((drink) => drink.id !== id);
    setCart(arr);
    handlePrice();
  };
  useEffect(() => {
    handlePrice();
  }, []);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          margin: "15px 0",
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
        <p style={{ color: "#111111", fontSize: "20px", fontWeight: "500" }}>
          Add To cart
        </p>
      </div>
      <div className="Shopping_payment">
        <div className="listProduct_drink">
          <div className="ShoppingCart">
            <h1>Shopping Cart.</h1>
          </div>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <Table>
                <thead>
                  <tr className="menupayment">
                    <th>Drink/Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((drink) => (
                    <tr key={drink.id}>
                      <td>
                        <div className="imgBox">
                          <img src={drink.img} alt="" />
                          <div>
                            <h5>{drink.name}</h5>
                            <p>{drink.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Button
                          className="btn  text-danger"
                          variant="link"
                          onClick={() => handleChange(drink, -1)}
                        >
                          <FaMinus />
                        </Button>
                        <Button className="btn" variant="link">
                          {drink.amount}
                        </Button>
                        <Button
                          className="btn "
                          variant="link"
                          onClick={() => handleChange(drink, +1)}
                        >
                          <FaPlus />
                        </Button>
                      </td>
                      <td>$ {drink.price}</td>
                      <td>$ Total 999</td>
                      <td>
                        <Button
                          className="btn bg-danger "
                          onClick={() => handleRemove(drink.id)}
                        >
                          <FaXmark />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <div className="subtotal">
            <div>
              <p>Subtotal:</p>
              <p>Shopping:</p>
            </div>
            <div>
              <h5>$ {price}</h5>
              <h5>Free</h5>
            </div>
            <div></div>
          </div>
        </div>
        <div className="payment_product_drink">
          <div>
            <h1>Payment Info.</h1>
          </div>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <p>Payment Method:</p>
              <form className="p-3">
                <input type="radio" name="" id="" />
                <label className="my-2">
                  <CiCreditCard1 className="cardPay" />
                  Credit Card
                </label>
                <br />
                <input type="radio" name="" id="" />
                <label className="my-2">
                  <FaPaypal className="cardPay" />
                  PayPal
                </label>
                <br />
                <input type="radio" name="" id="" />
                <label className="my-2">
                  <img src={iconABA} style={{ width: "100px" }} alt="" />
                  ABA Bank
                </label>
                <br />
                <input type="radio" name="" id="" />
                <label className="my-2">
                  <img src={iconWing} style={{ width: "100px" }} alt="" />
                  Wing Bank
                </label>
                <br />
                <input type="radio" name="" id="" />
                <label className="my-2">
                  <img
                    src={iconAclyda}
                    style={{ width: "100px" }}
                    className="cardPay"
                    alt=""
                  />
                  Acleda Bank
                </label>
              </form>
              <div className="p-3">
                <p>Name</p>
                <h3>Panha</h3>
                <div>
                  <p>Card Number</p>
                  <p>... ... ... 123</p>
                </div>
              </div>
              <form className="p-3">
                <label htmlFor="">Data</label>
                <input type="datetime-local" name="" id="" />
              </form>
              <div className="p-3">
                <button className="btn bg-info text-white">Check Out</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default AddToCart;
