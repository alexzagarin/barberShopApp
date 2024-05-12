import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const serviceId = queryParams.get('serviceId');
    const customerId = localStorage.getItem('customerId');

    // Temporary fix
    const validCustomerId = customerId || '507f1f77bcf86cd799439011';
    const validServiceId = serviceId || '507f1f77bcf86cd799439011';

    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        reservationDate: '',
        time: ''
    });

    const handleChange = (event) => {
        setBookingDetails({ ...bookingDetails, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fullDateTime = `${bookingDetails.reservationDate}T${bookingDetails.time}:00`;
        try {
            await axios.post('/api/reservations', {
                customerId: validCustomerId,
                serviceId: validServiceId,
                reservationDate: fullDateTime,
                status: 'Booked'
            });
            // Store booking details in local storage to retrieve later
            localStorage.setItem('reservationDetails', JSON.stringify({
                name: bookingDetails.name,
                email: bookingDetails.email,
                phone: bookingDetails.phone,
                date: bookingDetails.reservationDate,
                time: bookingDetails.time
            }));
            navigate('/confirmation');
        } catch (error) {
            console.error('Error making reservation:', error.response?.data || error.message);
        }
    };


    const handleCancel = () => {
        navigate('/services');
    };

    return (
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Jméno</label>
                    <input type="text" name="name" value={bookingDetails.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={bookingDetails.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Telefon</label>
                    <input type="tel" name="phone" value={bookingDetails.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Datum</label>
                    <input type="date" name="reservationDate" value={bookingDetails.reservationDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Čas</label>
                    <input type="time" name="time" value={bookingDetails.time} onChange={handleChange} required />
                </div>
                <button type="submit">Rezervovat</button>
                <button type="button" onClick={handleCancel}>Zrušit</button>
            </form>
        </div>
    );
}

export default BookingForm;