
import logo from "/assets/logo.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { MdAdd } from "react-icons/md";

function NavBar({
  searchTerm,
  onSearchChange,
  onShowModal
}) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>

        <img src={logo} alt="Logo" width="50" />

        <Navbar.Brand className="ms-2 fw-bold">
          Destination App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto ms-4">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">

            <Button
              variant="outline-light"
              onClick={onShowModal}
            >
              <MdAdd size={22} />
              Add Destination
            </Button>

            <Form>
              <Form.Control
                type="search"
                placeholder="Search destination..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Form>

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
