import React, { useState, useEffect } from 'react'
import Cart from '../cartWidget/Cart'
import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import { categorias, getFetch } from '../helpers/getFetch.js';
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import PromoPill from './PromoPill';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); // Auto-hide after 3 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translate(-50%)',
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center'
                }}
            >
                {message}
            </motion.div>
        </AnimatePresence>
    );
};

const Navbar = () => {
    const { user, logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [toastMessage, setToastMessage] = useState(null);

    const showToast = (msg) => {
        setToastMessage(msg);
        // Reset message after 3 seconds handled by Toast component, 
        // but safe to have a cleaner if needed, though component unmounts itself logically via parent state?
        // Actually, the toast component just renders. We need to clear state.
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleProx = (e) => {
        e.preventDefault();
        showToast("Próximamente: Estamos trabajando para traerte los mejores precios");
    }

    useEffect(() => {
        if (user) {
            console.log("Cambio de usuario detectado en Navbar:", user.email);
        } else {
            console.log("No hay usuario autenticado en Navbar");
        }
    }, [user]);
    const [suggestions, setSuggestions] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        getFetch().then(data => setAllProducts(data));
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`);
            setShowSuggestions(false);
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim().length > 1) {
            const filtered = allProducts.filter(p =>
                p.nombre.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 5);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (id) => {
        navigate(`/detalle/${id}`);
        setShowSuggestions(false);
        setSearchTerm('');
    };

    return (
        <>
            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

            <div className='navs-container'>
                {/* TOP HEADER */}
                <nav className='nav-top-container'>
                    <div className='nav-lefth-top'>
                        <div className="img-container">
                            <NavLink to={"/"} className={"img-link"}>
                                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" className='img-logo' alt="Mercado Libre" />
                            </NavLink>
                        </div>
                    </div>

                    <div className="nav-center-top">
                        <div className="form-search-container">
                            <form className='formSearch' onSubmit={handleSubmit}>
                                <div style={{ position: 'relative', width: '100%', display: 'flex', height: '100%' }}>
                                    <input
                                        placeholder='Buscar productos, marcas y más…'
                                        className='nav-search-input'
                                        id='input-search'
                                        value={searchTerm}
                                        onChange={handleChange}
                                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                        onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
                                    />
                                    <AnimatePresence>
                                        {showSuggestions && suggestions.length > 0 && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="search-suggestions"
                                            >
                                                {suggestions.map(s => (
                                                    <li key={s.id} onClick={() => handleSuggestionClick(s.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                        <span>{s.nombre}</span>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <button className='nav-search-btn' type="submit">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#666" strokeWidth="1.5">
                                        <circle cx="11" cy="11" r="7" />
                                        <path d="M20 20L16 16" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>


                    <div className="nav-right-top-promo">
                        <PromoPill />
                    </div>
                </nav>

                {/* BOTTOM HEADER */}
                <nav className='nav-bottom-container'>
                    <div className="nav-lefth-bottom">
                        <div className='location-container'>
                            <svg className="location-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgba(0,0,0,0.5)' }}>
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='location-text'>
                                <span className='location-label'>Enviar a {user ? (user.displayName || user.email.split('@')[0]).split(' ')[0] : 'Lucas'}</span>
                                <span className='location-address'>Calle 11 423</span>
                            </div>
                        </div>
                    </div>

                    <div className="nav-center-bottom">
                        <ul className="nav-links-list">
                            <li className="nav-item dropdown">
                                <a className="nav-link-item show-arrow" href="#">
                                    Categorías
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', opacity: 0.5 }}>
                                        <path d="M1 1L5 5L9 1" stroke="#333" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <ul className="dropdown-menu">
                                    {categorias.map(cat => (
                                        <li key={cat.categoria}>
                                            <NavLink to={`/categoria/${cat.categoria}`} className="dropdown-item">{cat.categoria}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li><NavLink to="/ofertas" className="nav-link-item">Ofertas</NavLink></li>
                            <li><NavLink to="/cupones" className="nav-link-item">Cupones</NavLink></li>
                            <li><a href="#" onClick={handleProx} className="nav-link-item">Supermercado</a></li>
                            <li><a href="#" onClick={handleProx} className="nav-link-item">Moda</a></li>
                            <li>
                                <a href="#" onClick={handleProx} className="nav-link-item" style={{ position: 'relative' }}>
                                    Mercado Play
                                    <span style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#00a650',
                                        color: 'white',
                                        fontSize: '8px',
                                        fontWeight: '700',
                                        padding: '1px 3px',
                                        borderRadius: '3px',
                                        lineHeight: '1',
                                        letterSpacing: '0.5px'
                                    }}>GRATIS</span>
                                </a>
                            </li>
                            <li><a href="#" onClick={handleProx} className="nav-link-item">Vender</a></li>
                            <li><a href="#" onClick={handleProx} className="nav-link-item">Ayuda</a></li>
                        </ul>
                    </div>

                    <div className="nav-right-bottom">
                        <ul className="user-nav-list">
                            {user ? (
                                <li className="nav-item dropdown">
                                    <span className="nav-link-item user-profile">
                                        <div style={{
                                            width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ebebeb', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginRight: '5px', overflow: 'hidden', border: '1px solid rgba(0,0,0,.1)'
                                        }}>
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt="" className="user-avatar" style={{ border: 'none' }} />
                                            ) : (
                                                <span style={{ fontSize: '10px', color: '#666', fontWeight: '600' }}>LB</span>
                                            )}
                                        </div>
                                        <span style={{ fontWeight: '400', fontSize: '13px', color: '#333' }}>
                                            {user.displayName || user.email.split('@')[0]}
                                        </span>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', opacity: 0.5 }}>
                                            <path d="M1 1L5 5L9 1" stroke="#333" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li><button onClick={logout} className="dropdown-item">Cerrar Sesión</button></li>
                                    </ul>
                                </li>
                            ) : (
                                <li><NavLink to="/session" className="nav-link-item">Ingresá</NavLink></li>
                            )}
                            <li><NavLink to="/mis-compras" className="nav-link-item">Mis compras</NavLink></li>
                            <li><NavLink to="/favoritos" className="nav-link-item">Favoritos <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', opacity: 0.5 }}>
                                <path d="M1 1L5 5L9 1" stroke="#333" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></NavLink></li>
                            <li className="nav-icon" style={{ position: 'relative' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#333" strokeWidth="1.5">
                                    <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.73 21A2 2 0 0 1 10.27 21" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span style={{
                                    position: 'absolute',
                                    top: '-3px',
                                    right: '-3px',
                                    backgroundColor: '#e62020',
                                    color: 'white',
                                    fontSize: '9px',
                                    fontWeight: 'bold',
                                    width: '13px',
                                    height: '13px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid white'
                                }}>3</span>
                            </li>
                            <li className="nav-icon">
                                <NavLink to="/cart">
                                    <Cart />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav >
            </div >
        </>
    )
}

export default Navbar