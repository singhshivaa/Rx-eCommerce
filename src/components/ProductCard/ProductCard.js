import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import { Container } from "react-bootstrap";

function ProductCard() {
  return (
    <Container className="productcard-container justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe1.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Red Tape</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>Men Colourblocked Lace-Ups Sneakers</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe4.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Adidas</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>
            Men Colourblocked Anti-Slip Ground Support Sneakers
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe5.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Nike</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>Men Colourblocked Lace-Ups Sneakers</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe5.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Red Tape</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>Men Colourblocked Lace-Ups Sneakers</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe5.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Red Tape</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>Men Colourblocked Lace-Ups Sneakers</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../images/shoe1.jpg" />
        <Card.Body>
          <div className="add-to-cart">
            <Card.Title>Red Tape</Card.Title>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
          <Card.Text>Men Colourblocked Lace-Ups Sneakers</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductCard;
