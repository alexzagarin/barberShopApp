import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/customers', formData);
            console.log('Registration Success:', response.data);
            navigate('/login');  // Redirect to login page after successful registration
        } catch (error) {
            console.error('Registration Error:', error.response.data);
        }
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Jméno</label>
                    <input type="text" name="firstName" className="input-field" placeholder="Jméno" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Příjmení</label>
                    <input type="text" name="lastName" className="input-field" placeholder="Příjmení" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="input-field" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Telefon</label>
                    <input type="text" name="phoneNumber" className="input-field" placeholder="Telefon" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Heslo</label>
                    <input type="password" name="password" className="input-field" placeholder="Heslo" onChange={handleChange} required />
                </div>
                <button type="submit">Registrovat se</button>
            </form>
        </div>
    );
}

export default Register;
