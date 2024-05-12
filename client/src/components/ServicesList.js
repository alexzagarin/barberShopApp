import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import haircutImage from '../assets/haircutservices.jpg';

function ServicesList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('/api/services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="services-list">
            {services.map(service => (
                <div key={service.id} className="service-item">
                    <img src={haircutImage} alt="Hair Cutting Service" className="service-image"/>
                    <div className="service-info">
                        <h3>{service.name}</h3>
                        <p className="service-price">Cena: {service.price} Kč</p>
                        <Link to={`/services/${service.id}`} className="link">Detaily</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicesList;
