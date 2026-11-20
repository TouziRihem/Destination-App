
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AddDestinationModal from "./components/AddDestinationModal";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";

import initialDestinations from "./data/destinations";
import "./App.css";

function App() {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [showModal, setShowModal] = useState(false);

  const handleAddDestination = (newDestination) => {
    setDestinations([...destinations, newDestination]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar
          handleShowModal={() => setShowModal(true)}
        />

        <AddDestinationModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleAddDestination={handleAddDestination}
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/destinations"
            element={
              <Destinations destinations={destinations} />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/destinations/:id"
            element={<Details destinations={destinations} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
