
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";

function Destinations({ destinations }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.titre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRating =
      selectedRating === "all" ||
      destination.rating >= Number(selectedRating);

    return matchesSearch && matchesRating;
  });

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Destinations</h1>

      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search for a destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="all">All ratings</option>
            <option value="4.5">4.5 and above</option>
            <option value="4.7">4.7 and above</option>
            <option value="4.8">4.8 and above</option>
            <option value="4.9">4.9 and above</option>
          </Form.Select>
        </Col>
      </Row>

      <p>
        {filteredDestinations.length} destination(s) found
      </p>

      <Row>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <Col md={6} lg={4} key={destination.id} className="mb-4">
              <DestinationCard destination={destination} />
            </Col>
          ))
        ) : (
          <p className="text-center">
            No destinations found.
          </p>
        )}
      </Row>
    </Container>
  );
}

export default Destinations;
