import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ServicesList from './components/ServicesList';
import ServiceDetail from './components/ServiceDetail';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="content-wrap"> {}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services" element={<RequireAuth><ServicesList /></RequireAuth>} />
                    <Route path="/services/:id" element={<RequireAuth><ServiceDetail /></RequireAuth>} />
                    <Route path="/booking" element={<RequireAuth><BookingForm /></RequireAuth>} />
                    <Route path="/confirmation" element={<RequireAuth><Confirmation /></RequireAuth>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
