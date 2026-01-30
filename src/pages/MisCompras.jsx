import React from 'react';
import { useCartContext } from '../context/Context';
import './misCompras.css';
import { Link } from 'react-router-dom';

const MisCompras = () => {
    const { purchases } = useCartContext();

    return (
        <div className="mis-compras-container">
            <div className="mis-compras-header">
                <h1>Mis compras</h1>
            </div>

            {purchases.length === 0 ? (
                <div className="empty-purchases-container">
                    <div className="empty-purchases-card">
                        <div className="empty-purchases-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <h2>No tenés compras</h2>
                        <p>Cuando realices una compra, aparecerá acá.</p>
                        <Link to="/" className="btn-start-shopping">Comenzar a comprar</Link>
                    </div>
                </div>
            ) : (
                <div className="purchases-list">
                    {purchases.map((purchase) => (
                        <div key={purchase.id} className="purchase-card">
                            <div className="purchase-card-header">
                                <span className="purchase-date">{purchase.date}</span>
                                <span className="purchase-id">MercadoLibre ID: {purchase.id}</span>
                            </div>
                            <div className="purchase-items">
                                {purchase.items.map((item, index) => (
                                    <div key={index} className="purchase-item">
                                        <img src={item.img} alt={item.nombre} className="purchase-item-img" />
                                        <div className="purchase-item-info">
                                            <h3 className="purchase-item-name">{item.nombre}</h3>
                                            <p className="purchase-item-quantity">{item.cantidad} {item.cantidad === 1 ? 'unidad' : 'unidades'}</p>
                                            <p className="purchase-item-price">$ {item.precio}</p>
                                        </div>
                                        <Link to={`/detalle/${item.id}`} className="btn-re-buy">Volver a comprar</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MisCompras;
