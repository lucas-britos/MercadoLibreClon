import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cupones.css';
import { categorias } from '../components/helpers/getFetch';
import { useCartContext } from '../context/Context';

const IconRender = ({ type }) => {
    if (type === 'ticket') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M3 18h18" /><path d="M3 6v12" /><path d="M21 6v12" /><path d="M7 6v12" /><path d="M17 6v12" /></svg>;
    }
    if (type === 'money') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>;
    }
    if (type === 'music') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>;
    }
    if (type === 'bag') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>;
    }
    if (type === 'screen') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
    }
    return null;
}

// Generate relevant coupons based on category
const getCouponsForCategory = (categoryName) => {
    // Base generic coupons to fill
    const baseCoupons = [
        {
            title: "5% OFF",
            subtitle: "En toda la categoría",
            min: "Compra mínima $ 10.000",
            tope: "Tope de $ 10.000",
            iconType: "ticket",
            brandIcon: "",
            color: "#3483fa",
            saved: true, popular: true, terminanHoy: false, isNew: false,
            discountAmount: 5,
            targetCategory: categoryName // Apply to this category
        },
        {
            title: "10% OFF Bancario",
            subtitle: "Pagando con Tarjeta X",
            min: "Compra mínima $ 20.000",
            tope: "Tope de $ 15.000",
            iconType: "money",
            brandIcon: "💳",
            color: "#3483fa",
            saved: false, popular: true, terminanHoy: true, isNew: false,
            discountAmount: 10,
            targetCategory: categoryName
        },
        {
            title: "$ 5.000 OFF",
            subtitle: "Cupón de bienvenida",
            min: "Compra mínima $ 30.000",
            tope: "Tope de $ 5.000",
            iconType: "ticket",
            brandIcon: "✨",
            color: "#3483fa",
            saved: false, popular: false, terminanHoy: false, isNew: true,
            discountAmount: 5, // Approximation for fixed amount as percentage for simplicity in prototype
            targetCategory: categoryName
        }
    ];

    let specificCoupons = [];

    if (categoryName.includes("Electro") || categoryName.includes("Computación") || categoryName.includes("Celulares")) {
        specificCoupons = [
            {
                title: "15% OFF en Samsung",
                subtitle: "En celulares Galaxy",
                min: "Compra mínima $ 150.000",
                tope: "Tope de $ 40.000",
                iconType: "screen",
                brandIcon: "📱",
                color: "#fa8900",
                expires: "¡Se agota!",
                saved: false, popular: true, terminanHoy: false, isNew: false,
                discountAmount: 15,
                targetCategory: categoryName
            },
            {
                title: "20% OFF en TV",
                subtitle: "Smart TVs seleccionados",
                min: "Compra mínima $ 300.000",
                tope: "Tope de $ 20.000",
                iconType: "screen",
                brandIcon: "📺",
                color: "#e65100",
                expires: "Vence hoy",
                saved: true, popular: true, terminanHoy: true, isNew: false,
                discountAmount: 20,
                targetCategory: categoryName
            },
            {
                title: "10% OFF en Audio",
                subtitle: "Auriculares y parlantes",
                min: "Compra mínima $ 20.000",
                tope: "Tope de $ 5.000",
                iconType: "music",
                brandIcon: "🎧",
                color: "#3483fa",
                saved: false, popular: false, terminanHoy: false, isNew: true,
                discountAmount: 10,
                targetCategory: categoryName
            }
        ];
    } else if (categoryName.includes("Hogar") || categoryName.includes("Muebles")) {
        specificCoupons = [
            {
                title: "20% OFF en Decoración",
                subtitle: "Renová tu casa",
                min: "Compra mínima $ 15.000",
                tope: "Tope de $ 8.000",
                iconType: "bag",
                brandIcon: "🏠",
                color: "#3483fa",
                saved: false, popular: true, terminanHoy: false, isNew: true,
                discountAmount: 20,
                targetCategory: categoryName
            },
            {
                title: "10% OFF en Muebles",
                subtitle: "Mesas y sillas",
                min: "Compra mínima $ 50.000",
                tope: "Tope de $ 15.000",
                iconType: "ticket",
                brandIcon: "🪑",
                color: "#e65100",
                expires: "Solo por hoy",
                saved: true, popular: false, terminanHoy: true, isNew: false,
                discountAmount: 10,
                targetCategory: categoryName
            }
        ];
    } else if (categoryName.includes("Moda") || categoryName.includes("Ropa")) {
        specificCoupons = [
            {
                title: "30% OFF en Zapatillas",
                subtitle: "Marcas seleccionadas",
                min: "Compra mínima $ 40.000",
                tope: "Tope de $ 12.000",
                iconType: "bag",
                brandIcon: "👟",
                color: "#fa8900",
                expires: "Últimos días",
                saved: true, popular: true, terminanHoy: false, isNew: false,
                discountAmount: 30,
                targetCategory: categoryName
            },
            {
                title: "2x1 en Remeras (50% OFF)",
                subtitle: "Combinalas como quieras",
                min: "Compra mínima $ 10.000",
                tope: "Tope de $ 5.000",
                iconType: "ticket",
                brandIcon: "👕",
                color: "#3483fa",
                saved: false, popular: true, terminanHoy: false, isNew: true,
                discountAmount: 50,
                targetCategory: categoryName
            }
        ];
    }

    // Combine and fill to ensure at least 4 items, giving IDs based on category to retain uniqueness
    // Ensure all items have targetCategory set correctly
    const result = [...specificCoupons, ...baseCoupons, ...baseCoupons].slice(0, 6).map((item, idx) => ({
        ...item,
        id: `${categoryName}-${idx}`,
        targetCategory: categoryName // Ensure consistency
    }));

    return result;
};


const CategorySection = ({ categoria, onApply, appliedIds, onNavigate, activeFilter, sortOrder }) => {
    // Generate coupons for this category
    let coupons = getCouponsForCategory(categoria);

    // Apply Filter Logic
    if (activeFilter === 'saved') coupons = coupons.filter(c => c.saved);
    if (activeFilter === 'ending') coupons = coupons.filter(c => c.terminanHoy);
    if (activeFilter === 'popular') coupons = coupons.filter(c => c.popular);
    if (activeFilter === 'new') coupons = coupons.filter(c => c.isNew);

    // Sort Logic
    if (sortOrder === 'expiring') {
        coupons = [...coupons].sort((a, b) => (b.terminanHoy === a.terminanHoy) ? 0 : b.terminanHoy ? 1 : -1);
    }

    const visibleCoupons = coupons.slice(0, 6);

    if (visibleCoupons.length === 0) return null;

    return (
        <div className="cupones-section">
            <div className="cupones-section-header">
                <h2 className="cupones-section-title">{categoria}</h2>
                <span className="cupones-section-link">Ver reglas generales</span>
            </div>

            <div className="cupones-grid">
                {visibleCoupons.map(cupon => {
                    const isApplied = appliedIds.some(id => id === cupon.id);
                    return (
                        <div key={cupon.id} className="cupon-card">
                            <div className="cupon-card-top">
                                <div className="cupon-icon-container">
                                    <IconRender type={cupon.iconType} />
                                </div>
                                <div className="cupon-info">
                                    <h3 className="cupon-title">{cupon.title} {cupon.brandIcon}</h3>
                                    <p className="cupon-subtitle">{cupon.subtitle}</p>
                                    <p className="cupon-subtitle">{cupon.min}</p>
                                    <span className="cupon-limit">{cupon.tope} <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', border: '1px solid #ccc', textAlign: 'center', lineHeight: '10px', fontSize: 9 }}>i</span></span>
                                </div>
                            </div>

                            <div className="cupon-separator"></div>

                            <div className="cupon-card-bottom">
                                {cupon.expires && (
                                    <span className="cupon-status" style={{ color: cupon.color || '#999' }}>
                                        {cupon.color ? '🔥' : '🕒'} {cupon.expires}
                                    </span>
                                )}
                                {!cupon.expires && <span></span>}
                                {isApplied ? (
                                    <button
                                        className="cupon-btn"
                                        style={{ backgroundColor: 'white', color: '#3483fa', border: '1px solid #3483fa' }}
                                        onClick={() => onNavigate(categoria)}
                                    >
                                        Buscar productos
                                    </button>
                                ) : (
                                    <button
                                        className="cupon-btn"
                                        onClick={() => onApply(cupon)}
                                    >
                                        Aplicar
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Cupones = () => {
    const { coupons, applyCoupon } = useCartContext(); // From Context
    const navigate = useNavigate();

    const [visibleCategories, setVisibleCategories] = useState(5);
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('relevant');
    const [showSortMenu, setShowSortMenu] = useState(false);

    const loadMoreCategories = () => setVisibleCategories(prev => prev + 5);

    const currentCategories = categorias.slice(0, visibleCategories);

    // Get active coupon IDs safely
    const appliedIds = coupons ? coupons.map(c => c.id) : [];

    const handleApply = (coupon) => {
        applyCoupon(coupon);
    };

    const handleNavigate = (category) => {
        navigate(`/categoria/${category}`);
    };

    const getPillStyle = (filterName) => {
        const isActive = activeFilter === filterName;
        return {
            backgroundColor: isActive ? '#3483fa' : 'white',
            color: isActive ? 'white' : '#3483fa',
            border: '1px solid #e0e0e0'
        };
    };

    return (
        <div className="cupones-page">
            <div className="cupones-header-container">
                <div className="cupones-header-top">
                    <h1 className="cupones-title">Cupones</h1>
                    <div className="cupones-header-links">
                        <span className="cupones-link">Ingresar código</span>
                        <span style={{ color: '#ccc' }}>|</span>
                        <span className="cupones-link">Cómo usar cupones</span>
                    </div>
                </div>

                <div className="cupones-controls">
                    <span className="cupones-count">Más de 100 Cupones</span>
                    <div style={{ position: 'relative' }}>
                        <button
                            className="cupones-filter-btn"
                            onClick={() => setShowSortMenu(!showSortMenu)}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
                                <line x1="4" y1="21" x2="4" y2="14" />
                                <line x1="4" y1="10" x2="4" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="3" />
                                <line x1="20" y1="21" x2="20" y2="16" />
                                <line x1="20" y1="12" x2="20" y2="3" />
                                <line x1="1" y1="14" x2="7" y2="14" />
                                <line x1="9" y1="8" x2="15" y2="8" />
                                <line x1="17" y1="16" x2="23" y2="16" />
                            </svg>
                            Filtrar y ordenar
                        </button>

                        {showSortMenu && (
                            <div className="cupones-filter-dropdown" onMouseLeave={() => setShowSortMenu(false)}>
                                <div
                                    className={`cupones-filter-option ${sortOrder === 'relevant' ? 'active' : ''}`}
                                    onClick={() => { setSortOrder('relevant'); setShowSortMenu(false); }}
                                >
                                    Más relevantes
                                </div>
                                <div
                                    className={`cupones-filter-option ${sortOrder === 'expiring' ? 'active' : ''}`}
                                    onClick={() => { setSortOrder('expiring'); setShowSortMenu(false); }}
                                >
                                    Próximos a vencer
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="cupones-pills-row">
                    <button
                        className="cupones-pill"
                        style={getPillStyle('saved')}
                        onClick={() => setActiveFilter(activeFilter === 'saved' ? 'all' : 'saved')}
                    >
                        Mis cupones
                    </button>
                    <button
                        className="cupones-pill"
                        style={{ backgroundColor: 'white', color: '#3483fa', border: '1px solid #e0e0e0' }}
                        onClick={() => setActiveFilter('all')}
                    >
                        Todas ▾
                    </button>
                    <button
                        className="cupones-pill"
                        style={getPillStyle('ending')}
                        onClick={() => setActiveFilter(activeFilter === 'ending' ? 'all' : 'ending')}
                    >
                        Terminan hoy
                    </button>
                    <button
                        className="cupones-pill"
                        style={getPillStyle('popular')}
                        onClick={() => setActiveFilter(activeFilter === 'popular' ? 'all' : 'popular')}
                    >
                        Más usados
                    </button>
                    <button
                        className="cupones-pill"
                        style={getPillStyle('new')}
                        onClick={() => setActiveFilter(activeFilter === 'new' ? 'all' : 'new')}
                    >
                        Nuevos
                    </button>
                </div>
            </div>

            {currentCategories.map((cat) => (
                <CategorySection
                    key={cat.categoria}
                    categoria={cat.categoria}
                    onApply={handleApply}
                    appliedIds={appliedIds}
                    onNavigate={handleNavigate}
                    activeFilter={activeFilter}
                    sortOrder={sortOrder}
                />
            ))}

            {visibleCategories < categorias.length && (
                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <button
                        onClick={loadMoreCategories}
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            color: '#3483fa',
                            fontSize: '16px',
                            fontWeight: '600',
                            padding: '12px 24px',
                            cursor: 'pointer',
                            boxShadow: '0 1px 1px 0 rgba(0,0,0,0.05)'
                        }}
                    >
                        Ver más cupones
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cupones;
