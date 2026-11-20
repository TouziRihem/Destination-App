
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function DestinationCard({ destination }) {
  return (
    <Card className="destination-card h-100 shadow-sm border-0">

      <div className="img">
        <Card.Img
          variant="top"
          src={destination.image}
          alt={destination.titre}
        />
      </div>

      <Card.Body className="d-flex flex-column">

        <Card.Title className="fw-bold">
          {destination.titre}
        </Card.Title>

        <Card.Text className="description">
          {destination.description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mb-3">

          <span className="price">
            {destination.prix} DT
          </span>

          <span className="rating">
            <FaStar />
            {" "}{destination.rating}
          </span>

        </div>

        <Button variant="primary" className="mt-auto">
          <MdLocationOn className="me-1" />
          Explore
        </Button>

      </Card.Body>
    </Card>
  );
}

export default DestinationCard;
