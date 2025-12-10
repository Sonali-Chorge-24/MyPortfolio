import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern .png'
import arrow from '../../assets/arrow.svg'
import services_data from '../../assets/services_data.js'

const Services = () => {

  const [selectedService, setSelectedService] = useState(null);
  const openModal = (service) => {
    setSelectedService(service);
  };
  const closeModal = () => {
    setSelectedService(null);
  };
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.S_no}</h3>
            <h2>{service.S_name}</h2>
            <p>{service.S_short}</p>
            <div className="services-readmore" onClick={() => openModal(service)}>
              <p>Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
        {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>✖</span>
            <h2>{selectedService.S_name}</h2>
            <p>{selectedService.S_details}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default Services
