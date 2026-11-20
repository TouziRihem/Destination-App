
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Details({ destinations }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinations.find(
    (destination) => destination.id === id
  );

  if (!destination) {
    return (
      <Container className="py-5 text-center">
        <h2>Destination not found</h2>
        <Button onClick={() => navigate("/")}>
          Return Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img
            src={destination.image}
            alt={destination.titre}
            className="details-image"
          />
        </Col>

        <Col md={6}>
          <h1>{destination.titre}</h1>
          <p>{destination.description}</p>

          <Card className="p-3">
            <p><strong>Country:</strong> {destination.country}</p>
            <p><strong>Price:</strong> {destination.prix} TND</p>
            <p><strong>Rating:</strong> {destination.rating} / 5</p>
            <p><strong>Flight Duration:</strong> {destination.flightDuration}</p>
            <p><strong>Airline:</strong> {destination.airline}</p>
            <p><strong>Best Season:</strong> {destination.bestSeason}</p>
          </Card>

          <Button
            className="mt-3"
            onClick={() => navigate("/")}
          >
            Return Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
