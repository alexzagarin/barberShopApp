import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>© 2024 BarberShop App | All rights reserved.</p>
            </div>
            <div className="footer-right">
                <div className="contact-info">
                    <p>Telefon: +420 775 957 913</p>
                    <p>Email: info@barbershop.com</p>
                    <p>Addresa: Kurta Konráda 2517/1, Praha 9, 190 00</p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> {/* Font Awesome Facebook icon */}
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> {/* Font Awesome Instagram icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
