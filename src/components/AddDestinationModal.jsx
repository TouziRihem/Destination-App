
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddDestinationModal({ show, handleClose, handleAddDestination }) {

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      id: Date.now(),
      titre: titre,
      description: description,
      prix: Number(prix),
      rating: Number(rating),
      image: image
    };

    handleAddDestination(newDestination);

    // Reset form
    setTitre("");
    setDescription("");
    setPrix("");
    setRating("");
    setImage("");

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>

      <Modal.Header closeButton>
        <Modal.Title>Add New Destination</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Destination Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination name"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price (DT)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              placeholder="Enter price"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating (0 - 5)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">

            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Add Destination
            </Button>

          </div>

        </Form>

      </Modal.Body>

    </Modal>
  );
}

export default AddDestinationModal;
