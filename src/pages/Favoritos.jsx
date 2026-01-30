import React from 'react';
import { useCartContext } from '../context/Context';
import Item from '../components/item/Item';
import './favoritos.css';
import { NavLink } from 'react-router-dom';

const Favoritos = () => {
    const { favorites } = useCartContext();

    return (
        <div className="favoritos-container">
            <div className="favoritos-header">
                <h1>Favoritos</h1>
                <p>{favorites.length} {favorites.length === 1 ? 'producto' : 'productos'}</p>
            </div>

            {favorites.length === 0 ? (
                <div className="favoritos-empty">
                    <div className="empty-icon">❤️</div>
                    <h2>¡Aún no tienes favoritos!</h2>
                    <p>Agregá los productos que más te gustan para verlos aquí.</p>
                    <NavLink to="/" className="btn-explore">Explorar productos</NavLink>
                </div>
            ) : (
                <div className="favoritos-grid row">
                    {favorites.map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favoritos;
