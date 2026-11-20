
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddDestinationModal({
  show,
  handleClose,
  handleAddDestination,
}) {
  const [formData, setFormData] = useState({
    titre: "",
    country: "",
    description: "",
    prix: "",
    rating: "",
    flightDuration: "",
    airline: "",
    bestSeason: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      ...formData,
      id: Math.random().toString(36).slice(2, 11),
      prix: Number(formData.prix),
      rating: Number(formData.rating),
    };

    handleAddDestination(newDestination);

    setFormData({
      titre: "",
      country: "",
      description: "",
      prix: "",
      rating: "",
      flightDuration: "",
      airline: "",
      bestSeason: "",
      image: "",
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a Destination</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Destination Name</Form.Label>
            <Form.Control
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="prix"
              value={formData.prix}
              onChange={handleChange}
              min="0"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Flight Duration</Form.Label>
            <Form.Control
              name="flightDuration"
              value={formData.flightDuration}
              onChange={handleChange}
              placeholder="e.g. 3h 30min"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Airline</Form.Label>
            <Form.Control
              name="airline"
              value={formData.airline}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Best Season</Form.Label>
            <Form.Control
              name="bestSeason"
              value={formData.bestSeason}
              onChange={handleChange}
              placeholder="e.g. June - September"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="primary" type="submit">
            Add Destination
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddDestinationModal;
