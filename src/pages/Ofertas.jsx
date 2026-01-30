import React, { useState, useEffect } from 'react';
import ItemOfertas from '../components/ItemOfertas/ItemOfertas';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from '../firebase/config';
import { categorias } from '../components/helpers/getFetch';
import { Link } from 'react-router-dom';
import Skeleton from '../components/Skeleton/Skeleton';
import './ofertas.css';

const Ofertas = () => {
    const [ofertas, setOfertas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState('relevant');

    useEffect(() => {
        const queryDB = getFirestore(app);
        const queryCollection = collection(queryDB, "datos");
        getDocs(queryCollection)
            .then((res) => {
                const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // Reuse the same logic as CarouselOfertas: products with displayable discount
                const onlyOfertas = data.filter(product => product.descuento > 0);
                setOfertas(onlyOfertas);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSort = (e) => {
        const type = e.target.value;
        setSortType(type);

        const sorted = [...ofertas].sort((a, b) => {
            const priceA = a.precio - (a.precio * a.descuento / 100);
            const priceB = b.precio - (b.precio * b.descuento / 100);

            if (type === 'lower') return priceA - priceB;
            if (type === 'higher') return priceB - priceA;
            return 0; // 'relevant' implies default order or logic we don't have, so leave as is (or id based)
        });

        if (type === 'relevant') {
            // Re-fetch or simplistic shuffle? For now, we just won't sort if relevant, 
            // but since we modified the array in place with sort, we might lose original order.
            // Ideally we sort a copy definition. 
            // Better approach: sort the *current* list.
            // Actually, 'relevant' usually means default db order. 
            // Let's just re-sort by id if relevant to reset roughly.
            sorted.sort((a, b) => a.id.localeCompare(b.id));
        }

        setOfertas(sorted);
    };

    return (
        <div className="ofertas-container">
            <div className="ofertas-header">
                <div>
                    <h1 className="ofertas-title">Ofertas</h1>
                    <p className="ofertas-subtitle">¡Encontrá precios increíbles cada día!</p>
                </div>
                <div className="ofertas-sort-container">
                    <span className="ofertas-sort-label">Ordenar por</span>
                    <select className="ofertas-sort-select" value={sortType} onChange={handleSort}>
                        <option value="relevant">Más relevantes</option>
                        <option value="lower">Menor precio</option>
                        <option value="higher">Mayor precio</option>
                    </select>
                </div>
            </div>

            <div className="ofertas-content">
                {/* Sidebar */}
                <aside className="ofertas-sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Todas</h3>
                        <p className="sidebar-item" style={{ fontWeight: '600', color: '#333' }}>10.000 productos</p>
                    </div>

                    <div className="full-switch">
                        <span className="full-label">
                            <svg width="12" height="20" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '2px' }}>
                                <path d="M7.4438 6.55112L9.95767 1.25878C10.0632 1.03664 9.90161 0.777832 9.65584 0.777832H5.06456C4.85292 0.777832 4.65487 0.875638 4.52627 1.04364L0.04633 6.89531C-0.126485 7.12105 0.0345717 7.4445 0.318855 7.4445H2.56021C2.71539 7.4445 2.81223 7.61271 2.73436 7.74697L0.220551 12.0812C0.115206 12.2628 0.246069 12.4938 0.457877 12.4938H5.04909C5.26074 12.4938 5.45886 12.3961 5.58739 12.2281L10.0673 6.37637C10.24 6.15064 10.079 5.82719 9.79468 5.82719H7.6181C7.45815 5.82719 7.35923 5.65171 7.4438 6.55112Z" fill="#00A650" />
                            </svg>
                            FULL te ahorra envíos
                        </span>
                        <input type="checkbox" className="full-switch-input" />
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Tipo de promoción</h3>
                        <ul className="sidebar-list">
                            <li className="sidebar-item">Oferta del día <span>(148)</span></li>
                            <li className="sidebar-item">Oferta relámpago <span>(50)</span></li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Categorías</h3>
                        <ul className="sidebar-list">
                            {categorias.map(cat => (
                                <li key={cat.categoria} className="sidebar-item">
                                    <Link to={`/categoria/${cat.categoria}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {cat.categoria}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content Grid */}
                <main className="ofertas-grid">
                    {loading ? (
                        [...Array(10)].map((_, i) => (
                            <div key={i} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Skeleton type="product-card" count={1} style={{ width: '236px', height: '390px', margin: 0 }} />
                            </div>
                        ))
                    ) : (
                        ofertas.map(oferta => (
                            <ItemOfertas key={oferta.id} oferta={oferta} />
                        ))
                    )}
                </main>
            </div>
        </div>
    );
};

export default Ofertas;
