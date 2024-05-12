import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [name, setName] = useState('Guest');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setName('User');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
        window.location.reload();
    };

    return (
        <div className='navbar'>
            <h1 onClick={() => window.location.href = '/'} className='navbar-logo'>
                BarberShop
            </h1>
            <div className='nav-menu'>
                <ul className='navbar-ul'>
                    <li className='nav-items'>
                        <Link to="/" className='links'>HOME</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/services" className='links'>SLUŽBY</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/services" className='links'>KONTAKT</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/services" className='links'>PROFIL</Link>
                    </li>

                </ul>
                {isLoggedIn ? (
                    <div className='user-loggedIn'>
                        <p>Hello, {name}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className='login-reg-links'>
                        <Link to='/login' className='links'>Login</Link>
                        <span> </span>
                        <Link to='/register' className='links'>Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

