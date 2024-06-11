import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("currentUser");
    localStorage.clear();
    navigate("/");
  };

  const cart = useSelector((state) => state.cart);
  // console.log(cart, "nav");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="./images/main-logo.png"
            width="40"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="slogan">Stride with Pride</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="main">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/allproducts">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/product">
                Trending 🔥
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Men's FootWare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Women's FootWare
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist">
                Wish List 💙
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart">
                MyCart
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout} style={{ color: "red" }}>
                LogOut
              </NavDropdown.Item>
              {/* <button onClick={handleLogout}>logout</button> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="cart">
          <i class=" fa-solid fa-cart-shopping position-relative fa-sl">
            <span
              style={{ backgroundColor: "#86D6F9" }}
              class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle"
            >
              <span class="">{cart.length}</span>
            </span>
          </i>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
