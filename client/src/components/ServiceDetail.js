import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import haircutDetailImage from '../assets/haircutdetail.jpg';

function ServiceDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`/api/services/${id}`);
                setService(response.data);
            } catch (error) {
                console.error('Error fetching service:', error);
            }
        };
        fetchService();
    }, [id]);

    if (!service) return <div>Loading...</div>;

    return (
        <div className="service-detail">
            <div className="service-image">
            <img src={haircutDetailImage} alt={service.name} style={{ width: '100%', objectFit: 'contain' }} />
            </div>
            <div className="service-info">
            <div style={{ padding: '20px' }}>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <p>Cena: {service.price} Kč</p>
                <Link to={`/booking?serviceId=${service.id}`} className="link">Rezervovat</Link>
            </div>
            </div>
        </div>
    );
}

export default ServiceDetail;
