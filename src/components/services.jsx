import React, { useState } from "react";

export const Services = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    console.log("hi")
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tools Used </h2>
          <p>
          Tools Utilized in developing the project.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="service-item">
                    <i className={d.icon} onClick={() => openModal(d)}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>

      {showModal && selectedService && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedService.name}</h2>
            <p>{selectedService.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
