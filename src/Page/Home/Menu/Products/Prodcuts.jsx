import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const API_Desktop = "http://localhost:8081/starbusck";
  const [loading, setLoading] = useState(true);
  const [APIProduct, setAPIProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_Desktop);
        const listProducts = await response.json();
        setAPIProduct(listProducts);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.log(err.stack);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container className="d-flex">
      {APIProduct.map((p, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={p.img} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Products;
