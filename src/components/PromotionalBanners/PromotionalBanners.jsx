import React from 'react';
import './promotionalBanners.css';
import { Link } from 'react-router-dom';

const PromotionalBanners = () => {
    return (
        <div className="promotional-banners-container">
            <Link to="/ofertas" className="promo-banner">
                <div className="promo-banner-text-section">
                    <span className="promo-banner-subtitle">COMPRA INTERNACIONAL</span>
                    <h2 className="promo-banner-title">¡OFERTAS EN LOS MEJORES PERFUMES!</h2>
                    <span className="promo-banner-cta">Ver más</span>
                </div>
                <div className="promo-banner-img-section">
                    <img src="/assets/banner_perfumes.png" alt="Perfumes" className="promo-banner-img" />
                </div>
            </Link>

            <Link to="/ofertas" className="promo-banner">
                <div className="promo-banner-text-section">
                    <span className="promo-banner-subtitle">NOTEBOOKS</span>
                    <h2 className="promo-banner-title">¡HASTA 30% OFF Y 6X SIN INTERÉS!</h2>
                    <span className="promo-banner-cta">Ver ofertas</span>
                </div>
                <div className="promo-banner-img-section">
                    <img src="/assets/banner_notebooks.png" alt="Notebooks" className="promo-banner-img" />
                </div>
            </Link>
        </div>
    );
};


export default PromotionalBanners;
