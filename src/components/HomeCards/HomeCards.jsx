import React from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { app } from '../../firebase/config';
import './homeCards.css';
import { useCartContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const HomeCards = () => {
    const { toggleFavorite, isInFavorites } = useCartContext();
    const [dbProducts, setDbProducts] = React.useState({});

    React.useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore(app);
            const dataCollection = collection(db, "datos");
            // Fetch the specific migrated products
            const q = query(dataCollection, where("id", ">=", 101), where("id", "<=", 104));
            const querySnapshot = await getDocs(q);
            const products = {};
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                products[data.id] = data;
            });
            setDbProducts(products);
        };
        fetchProducts();
    }, []);

    const cards = [
        {
            id: 101,
            title: "Visto recientemente",
            img: dbProducts[101]?.img || "/assets/shower.png",
            label: dbProducts[101]?.nombre || "Columna Ducha Exterior Flor Cuadrad...",
            price: dbProducts[101] ? `$ ${dbProducts[101].precio.toLocaleString()}` : "$ 87.974",
            discount: dbProducts[101]?.descuento ? `${dbProducts[101].descuento}% OFF` : "12% OFF",
            shipping: dbProducts[101]?.beneficios?.EnvioGratis ? "Envío gratis" : ""
        },
        {
            id: 102,
            title: "Porque te interesa",
            img: dbProducts[102]?.img || "/assets/faucet.png",
            label: dbProducts[102]?.nombre || "Canilla Griferia Mezcladora Ducha...",
            price: dbProducts[102] ? `$ ${dbProducts[102].precio.toLocaleString()}` : "$ 27.949",
            discount: dbProducts[102]?.descuento ? `${dbProducts[102].descuento}% OFF` : "35% OFF"
        },
        {
            id: 103,
            title: "Llevate tu favorito",
            img: dbProducts[103]?.img || "/assets/coat.png",
            label: dbProducts[103]?.nombre || "Sobretodo Paño Simón De La Costa Abrigo...",
            price: dbProducts[103] ? `$ ${dbProducts[103].precio.toLocaleString()}` : "$ 113.645",
            discount: dbProducts[103]?.descuento ? `${dbProducts[103].descuento}% OFF` : "30% OFF",
            shipping: dbProducts[103]?.beneficios?.EnvioGratis ? "Envío gratis" : ""
        },
        {
            id: 104,
            title: "Tu auto te espera",
            img: dbProducts[104]?.img || "/assets/toyota.png",
            label: dbProducts[104]?.nombre || "Volvé por el Toyota Corolla Xei",
            price: dbProducts[104] ? `$ ${dbProducts[104].precio.toLocaleString()}` : "$ 16.000.000",
            subtitle: dbProducts[104]?.subtitle || "2023 | 31.000 km"
        },
        {
            title: "Medios de pago",
            img: "/assets/icon_payment_ref.png",
            label: "Pagá tus compras de forma rápida y segura.",
            link: "Conocer medios de pago",
            labelClass: "home-card-label-black"
        },
        {
            title: "Menos de $20.000",
            img: "/assets/icon_price_ref.png",
            label: "Descubrí productos con precios bajos.",
            link: "Mostrar productos",
            labelClass: "home-card-label-black"
        },
        {
            title: "Más vendidos",
            img: "/assets/icon_mas_vendidos.png",
            label: "Explorá los productos que son tendencia.",
            link: "Ir a Más vendidos",
            labelClass: "home-card-label-black"
        },
        {
            title: "Compra protegida",
            img: "/assets/icon_compra_protegida.png",
            label: "Podés devolver tu compra gratis.",
            link: "Cómo funciona",
            labelClass: "home-card-label-black"
        },
        {
            title: "Tiendas oficiales",
            img: "/assets/icon_tiendas_oficiales.png",
            label: "Encontrá tus marcas preferidas.",
            link: "Mostrar tiendas",
            labelClass: "home-card-label-black"
        },
        {
            title: "Nuestras categorías",
            img: "/assets/icon_nuestras_categorias.png",
            label: "Encontrá celulares, ropa, inmuebles y más.",
            link: "Ir a Categorías",
            labelClass: "home-card-label-black"
        }
    ];

    const scrollRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            if (direction === 'left') {
                current.scrollLeft -= 800;
                setCanScrollLeft(false);
                setCanScrollRight(true);
            } else {
                current.scrollLeft += 800;
                setCanScrollLeft(true);
                setCanScrollRight(false);
            }
        }
    };

    return (
        <div className="home-cards-container">
            {canScrollLeft && (
                <button className="home-cards-arrow home-cards-arrow-left" onClick={() => scroll('left')}>‹</button>
            )}
            <div className="home-cards-wrapper" ref={scrollRef}>
                {cards.map((card, index) => {
                    const isProduct = !!card.price;
                    const isFav = isProduct ? isInFavorites(card.id) : false;

                    return (
                        <div className={`home-card ${card.link ? 'home-card-promo' : ''}`} key={index} style={{ position: 'relative' }}>
                            <h3 className="home-card-title">{card.title}</h3>

                            {isProduct ? (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation(); // Prevent navigation when clicking favorite
                                            toggleFavorite({
                                                ...card,
                                                nombre: card.label,
                                                precio: card.price?.replace('$ ', '').replace('.', '')
                                            });
                                        }}
                                        className={`fav-button-home ${isFav ? 'active' : ''}`}
                                        aria-label="Agregar a favoritos"
                                        style={{ zIndex: 10 }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill={isFav ? "#3483fa" : "none"}
                                            stroke={isFav ? "#3483fa" : "#3483fa"}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>

                                    <Link to={`/detalle/${card.id}`} className="home-card-link-wrapper" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                        <div className="home-card-content">
                                            {card.img ? (
                                                <img src={card.img} alt={card.label} className={`home-card-img ${!card.link ? 'home-card-img-product' : 'home-card-img-promo'}`} />
                                            ) : (
                                                <div className="home-card-icon">{card.icon}</div>
                                            )}
                                            <div className="home-card-info">
                                                {card.label && (
                                                    <span className={`home-card-label ${card.labelClass ? card.labelClass : (card.link ? 'home-card-label-promo' : '')}`}>{card.label}</span>
                                                )}
                                                {card.price && (
                                                    <div className="home-card-price-row">
                                                        <span className="home-card-price">{card.price}</span>
                                                        {card.discount && <span className="home-card-discount">{card.discount}</span>}
                                                    </div>
                                                )}
                                                {card.subtitle && (
                                                    <span className="home-card-subtitle">{card.subtitle}</span>
                                                )}
                                                {card.shipping && (
                                                    <span className="home-card-shipping">{card.shipping}</span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ) : (
                                <div className="home-card-content">
                                    {card.img ? (
                                        <img src={card.img} alt={card.label} className={`home-card-img ${!card.link ? 'home-card-img-product' : 'home-card-img-promo'}`} />
                                    ) : (
                                        <div className="home-card-icon">{card.icon}</div>
                                    )}
                                    <div className="home-card-info">
                                        {card.label && (
                                            <span className={`home-card-label ${card.labelClass ? card.labelClass : (card.link ? 'home-card-label-promo' : '')}`}>{card.label}</span>
                                        )}
                                    </div>
                                    {card.link && (
                                        <div className="home-card-link-container">
                                            <a href="#" className="home-card-button">{card.link}</a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {canScrollRight && (
                <button className="home-cards-arrow home-cards-arrow-right" onClick={() => scroll('right')}>›</button>
            )}
        </div>
    );
};

export default HomeCards;
