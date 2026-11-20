
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '/assets/logo.png'
function NavBar({ handleShowModal }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img
          src={logo}
          alt="Destination App Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <Navbar.Brand as={Link} to="/">
          Destination App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/destinations">
              Destinations
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <Button
            variant="success"
            onClick={handleShowModal}
          >
            + Add Destination
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
