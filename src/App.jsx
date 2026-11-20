
import { useState } from "react";

import NavBar from "./components/NavBar";
import DestinationList from "./components/DestinationList";
import AddDestinationModal from "./components/AddDestinationModal";

import destinationsData from "./data/destinations.json";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { MdFilterList } from "react-icons/md";

import "./App.css";

function App() {

  // States
  const [destinations, setDestinations] = useState(destinationsData);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState("All");

  const [showModal, setShowModal] = useState(false);


  // Add a new destination
  const handleAddDestination = (newDestination) => {
    setDestinations((prev) => [...prev, newDestination]);
  };


  // Filter destinations
  const filteredDestinations = destinations.filter((destination) => {

    const matchesSearch = destination.titre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRating =
      selectedRating === "All" ||
      destination.rating >= Number(selectedRating);

    return matchesSearch && matchesRating;
  });


  // Reset filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRating("All");
  };


  return (
    <div className="App">

      {/* Navbar */}
      <NavBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onShowModal={() => setShowModal(true)}
      />


      {/* Hero Section */}
      <div className="hero">
        <h1>Explore The World</h1>
        <p>
          Discover beautiful destinations and plan your next adventure.
        </p>

        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
        >
          Add Your Destination
        </Button>
      </div>


      {/* Filters */}
      <div className="container mt-5">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

          <div>
            <h4 className="fw-bold mb-1">
              Explore Destinations
            </h4>

            <p className="text-muted mb-0">
              {filteredDestinations.length} destination(s) found
            </p>
          </div>


          <div className="d-flex align-items-center gap-2">

            <MdFilterList size={24} />

            <Form.Select
              style={{ width: "200px" }}
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="All">All Ratings</option>
              <option value="4.5">4.5 Stars & Above</option>
              <option value="4.7">4.7 Stars & Above</option>
              <option value="4.8">4.8 Stars & Above</option>
              <option value="4.9">4.9 Stars & Above</option>
            </Form.Select>

            <Button
              variant="outline-secondary"
              onClick={clearFilters}
            >
              Clear
            </Button>

          </div>

        </div>

      </div>


      {/* Destination Cards */}
      <DestinationList destinations={filteredDestinations} />


      {/* Add Destination Modal */}
      <AddDestinationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleAddDestination={handleAddDestination}
      />

    </div>
  );
}

export default App;
