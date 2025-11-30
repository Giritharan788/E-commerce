import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Button from "react-bootstrap/esm/Button";

function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to={"/login/Giritharan"}>
              Login
            </Nav.Link>

            <Button
              style={{ position: "absolute", right: "3em" }}
              variant="success"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <IoMdCart />
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
