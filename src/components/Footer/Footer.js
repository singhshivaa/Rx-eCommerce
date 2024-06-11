import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container fluid>
        {/* total xs is 12  */}
        <Row style={{ alignItems: "center" }}>
          <Col sm={12} lg={4} className="phone-center">
            <Image height={"60px"} src="../images/main-logo.png" />
          </Col>
          {/* <Col sm={12} lg={3} className="phone-center">
            <h4>Categories</h4>
            <ul>
              <l1>
                <i class="fa-solid fa-check"></i>Men's
              </l1>
              <l1>Women's</l1>
              <l1>Kids's</l1>
              <l1>Tresnding's</l1>
            </ul>
          </Col> */}

          <Col sm={12} lg={4} className="phone-center">
            <p> ALL Copy Rights Reserved 2024 ®️</p>
          </Col>
          <Col sm={12} lg={4} className="phone-center ">
            <div className="footer-icons">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
