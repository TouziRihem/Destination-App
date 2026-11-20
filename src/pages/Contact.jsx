
import { Container, Card } from "react-bootstrap";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <Container className="py-5">

      <Card className="contact-card shadow-sm border-0">

        <Card.Body className="p-5">

          <h1 className="text-center fw-bold mb-4">
            Contact Us
          </h1>

          <p className="text-center text-muted mb-5">
            Have a question? Feel free to contact us.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>rihem.touzi@isimg.tn</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+216 22 676 225</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Tunisia</span>
          </div>

        </Card.Body>

      </Card>

    </Container>
  );
}

export default Contact;
