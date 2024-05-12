import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const token = localStorage.getItem('token');

    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to BarberShop</h1>
                <p>Kde tradice setkává modernu, zde najdete mistrovství v každém střihu. Naše dveře jsou otevřeny pro každého, kdo hledá nejen kvalitní úpravu vlasů a vousů, ale i chvíli pohody v mužském prostředí. U nás je zákazník vždy na prvním místě a naše služby jsou přizpůsobeny právě vašim potřebám a přáním. Od tradičních střihů až po moderní úpravy – vše provádíme s nejvyšší pečlivostí a profesionálním přístupem.
                    Rezervujte si svůj termín již dnes a nechte se hýčkat v rukou našich zkušených barberů. </p>
                    <h2>Těšíme se na vaši návštěvu!</h2>
                <div className="login-links">
                    {token ? <Link to="/services" className="link">Rezervace</Link> :
                        <Link to="/login" className="link">Rezervace</Link>}
                </div>
            </div>
        </div>
    );
}

export default Home;
