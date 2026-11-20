
import { Container, Card } from "react-bootstrap";
import { FaGlobeAmericas, FaCompass } from "react-icons/fa";

function About() {
  return (
    <Container className="py-5">

      <Card className="about-card shadow-sm border-0">

        <Card.Body className="p-5 text-center">

          <FaGlobeAmericas className="page-icon" />

          <h1 className="fw-bold mb-4">
            About Destination App
          </h1>

          <p className="text-muted">
            Destination App is a travel platform designed to help
            users discover beautiful destinations around the world.
          </p>

          <p className="text-muted">
            Our goal is to make travel planning easier by providing
            useful information about destinations, prices, ratings,
            flight durations and the best seasons to travel.
          </p>

          <FaCompass className="mt-3" size={35} />

          <h5 className="mt-3">
            Discover. Explore. Travel.
          </h5>

        </Card.Body>

      </Card>

    </Container>
  );
}

export default About;
