
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaPlane } from "react-icons/fa";

function Home() {
  return (
    <div className="home-page">

      <Container className="text-center">

        <FaGlobeAmericas className="home-icon" />

        <h1>Explore The World</h1>

        <p>
          Discover amazing destinations, explore beautiful places
          and plan your next unforgettable adventure.
        </p>

        <Button
          as={Link}
          to="/destinations"
          variant="primary"
          size="lg"
        >
          <FaPlane className="me-2" />
          Explore Destinations
        </Button>

      </Container>

    </div>
  );
}

export default Home;
