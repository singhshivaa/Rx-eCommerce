import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";
import "./Product.css";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useLocation, useNavigate } from "react-router-dom";
import database from "../../Database/Database";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

function Product() {
  let [cartData, setCartData] = useState([]);
  const obj = useLocation();

  useEffect(() => {
    console.log(obj);
    if (obj.state == null) {
      let data = database.filter((curElm) => curElm.id == 110);
      setCartData(data);
    } else {
      let data = database.filter((curElm) => curElm.id == obj.state.id);
      setCartData(data);
    }
    // console.log(obj.state.id, "i am");
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(addToCart(cartData[0]));
    navigate("/cart");
  };
  const handleAddToCart = () => {
    dispatch(addToCart(cartData[0]));
  };

  console.log(cartData);
  return (
    <>
      {cartData.length != 0 ? (
        <Container fluid className="product-container">
          <Row className="">
            <Col className="mycol" lg={5}>
              <Row>
                <Col xs={2} lg={2} className="left-image-gallery">
                  <Row>
                    <Image className="product-image" src={cartData[0].img} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData[0].img2} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData[0].img3} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData[0].img4} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData[0].img5} />
                  </Row>
                </Col>
                <Col xs={10} lg={10}>
                  <Image
                    className="product-image main-product-image"
                    src={cartData[0].img}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="mycol" lg={7}>
              <span className="p-fade">Campus 👟</span>
              <h6>
                Trendy {cartData[0].color} {cartData[0].category}{" "}
                {cartData[0].title} Men ({cartData[0].color})
              </h6>
              <span className="p-special-price">Special price</span>
              <p className="price-para">
                <span>{cartData[0].newPrice}</span>
                <span>
                  <del>{cartData[0].prevPrice}</del>
                </span>
                <span className="p-off">75% off</span>
              </p>
              <div className="p-ratings">
                <span>3.6</span>
                <span>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <span>17,286 ratings and 1,117 reviews</span>
              <div className="p-available-offers">
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Bank Offer10% off on Bank of Baroda Credit Card and EMI
                  Transactions, up to ₹1500{" "}
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Special PriceGet extra 10% off (price inclusive of
                  cashback/coupon)T&C
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Bank Offer10% off on Canara Bank Credit Card Transactions, up
                  to ₹1,500 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
              <div className="p-features">
                <div className="flx-dir-col">
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                  <p>Secured Payment</p>
                </div>
                <div className="flx-dir-col">
                  <i class="fa-solid fa-truck-fast"></i>
                  <p>Free Shipping</p>
                </div>
                <div className="flx-dir-col">
                  <i class="fa-solid fa-person-walking-arrow-loop-left"></i>
                  <p>12 Days Return Policy</p>
                </div>
              </div>
              <div className="p-choose-color">
                {/* <span>Color </span> */}
                <div id="white"></div>
                <div id="blue"></div>
                <div id="red"></div>
                <div id="orange"></div>
                <div id="navyblue"></div>
              </div>
              <div className="p-size">
                <span>Size</span>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                {/* <p>Size Chart</p> */}
              </div>
              <div className="p-pincode">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Deliver To</span>
                <input placeholder="Enter Delivery Pincode" />
                <button>Check</button>
              </div>
              <div className="p-buy-tocart">
                <button onClick={handleBuyNow}>Buy</button>
                <button onClick={handleAddToCart}>Add To Cart</button>
              </div>
              <div className="content">
                <p>
                  step into a realm of unparalleled comfort and unbridled style
                  with RINO from Campus, the shoes that redefine what it means
                  to stride in style. Feel the indulgence of the vamp upper of
                  these shoes for men. This second-skin comfort ensures your
                  feet are pampered and cradled, making each step a journey of
                  luxury. The Memory Foam Insole offers you with impeccable
                  cushioning and comfort. For the men who are always on the
                  move, RINO is your trusted companion. The lace-up design of
                  these ice blue, sky blue, and white shoes; ensures a secure
                  and snug fit, allowing you to conquer every step with
                  confidence. Experience the Nitrofly Outsole - the magic behind
                  RINO's unstoppable energy. The innovative Nitrofly outsole
                  technology offers better energy return with every step,
                  propelling you forward with each stride. No more worries about
                  loose shoes - it's all about a secure fit for the go-getter in
                  you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : null}
      <div className="p-similar-Products">
        <p id="similar-title">Check Out Similar Products You May Like :</p>
        <Marquee>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe2.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Puma Nuke 🔥</Card.Title>
              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe1.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Addidas Black</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe3.jpeg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Reebok Flash</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe4.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Asain Bluma</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe5.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Roadster Street</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
        </Marquee>
      </div>
    </>
  );
}

export default Product;
