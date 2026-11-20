
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DestinationCard from "./DestinationCard";

function DestinationList({ destinations }) {
  return (
    <Container className="py-5">

      <Row className="g-4">

        {destinations.length > 0 ? (

          destinations.map((destination) => (
            <Col key={destination.id} xs={12} sm={6} lg={3}>
              <DestinationCard destination={destination} />
            </Col>
          ))

        ) : (

          <Col xs={12}>
            <h5 className="text-center text-muted">
              No destinations found!
            </h5>
          </Col>

        )}

      </Row>

    </Container>
  );
}

export default DestinationList;
