import React from 'react';
import { useNavigate } from 'react-router-dom';
function ConfirmationPage() {
    const navigate = useNavigate();

    const reservationDetails = JSON.parse(localStorage.getItem('reservationDetails')) || {};

    const handleCancel = () => {
        navigate('/');
    };
    return (
        <div className="confirmation-page">
            <h1>Reservation Created Successfully</h1>
            <p>Thank you for choosing our salon.</p>
            <div className="reservation-details">
                <p><strong>Jméno:</strong> {reservationDetails.name}</p>
                <p><strong>Email:</strong> {reservationDetails.email}</p>
                <p><strong>Telefon:</strong> {reservationDetails.phone}</p>
                <p><strong>Datum:</strong> {reservationDetails.date}</p>
                <p><strong>Čas:</strong> {reservationDetails.time}</p>
            </div>
            <p>Rezervace potvrzena! Děkujeme, že jste si vybrali náš salon.</p>
            <button onClick={handleCancel}>Seznam služeb</button>
        </div>
    );
}

export default ConfirmationPage;

