import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/customers/login', credentials);
            localStorage.setItem('token', response.data.token);  // Save token to local storage
            navigate('/services');
        } catch (error) {
            console.error('Login Error:', error.response.data);
        }
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="input-field" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Heslo</label>
                    <input type="password" name="password" className="input-field" placeholder="Heslo" onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
