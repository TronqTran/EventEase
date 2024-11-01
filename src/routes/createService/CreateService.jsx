import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./createService.scss";

export default function CreateService() {
  const location = useLocation();
  const { venue } = location.state || {};
  const [services, setServices] = useState(venue?.services || []);
  const [newService, setNewService] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    img: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
    setNewService({
      id: "",
      name: "",
      description: "",
      price: "",
      img: "",
    });
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save the venue with the new services
    console.log("Services:", services);
    console.log("Selected Services:", selectedServices);
  };

  return (
    <div className="createService">
      {venue ? (
        <>
          <div className="serviceList">
            <h2>Service</h2>
            <div className="serviceCards">
              {services.map((service) => (
                <div key={service.id} className="serviceCard">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="serviceImage"
                  />
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <p className="price">{service.price.toLocaleString()} VND</p>
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span className="checkmark"></span>
                    Select
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="serviceForm">
            <h1>{venue.title}</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Service Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={newService.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={newService.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={newService.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="img">Image URL</label>
                <input
                  type="text"
                  name="img"
                  id="img"
                  value={newService.img}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="btnService">
                <button type="button" onClick={handleAddService}>
                  Add Service
                </button>
                <button type="button">Delete Services</button>
              </div>
              <div className="btnPost">
                <button type="">Post</button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <p>No venue data available</p>
      )}
    </div>
  );
}

CreateService.propTypes = {
  venue: PropTypes.shape({
    // Các thuộc tính của venue
  }),
};
