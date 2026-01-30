import "./itemofertas.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/Context"

const ItemOfertas = ({ oferta }) => {
  const { toggleFavorite, isInFavorites } = useCartContext();
  const isFav = isInFavorites(oferta.id);

  return (
    <>
      <div className="card card-container-ofertas" style={{ position: 'relative' }}>
        <Link to={`/detalle/${oferta.id}`}>
          <div className="enlace-container">
            <div className="img-container-card">
              <img src={oferta.img} className="card-img-top" alt="..." />
            </div>
            <div className="ui-item__content container-bottom-card">
              <div className="ui-item__price-block">
                <div className="ui-item__price-and-discount-wrapper">
                  <span className="strike-price">
                    <strike>${oferta.precio}</strike>
                  </span>
                  <span className="price-tag ui-item__discount-price price-tag__disabled">
                    <span className="price-tag-text-sr-only">
                      <strike>
                        {oferta.precio}
                      </strike>
                    </span>
                  </span>
                  <span className="price-tag-text-sr-only">
                    <span className="price-tag-symbol">$</span>
                    <span className="price-tag-fraction"> {oferta.precio} </span>
                  </span>
                  <span className="price-tag ui-item__price">
                    <span className="price-tag-symbol">$</span>
                    <span className="price-tag-fraction"> {oferta.precio - (oferta.precio / 100 * oferta.descuento)} </span>
                  </span>
                  <span className="ui-item__discount-text"> {oferta.descuento} % OFF </span>
                </div>
                <span className="ui-item__installments ui-item__installments--free"></span>
                <div className="ui-item__container-free">
                  <p className="ui-item__shipping-free">Envío Gratis</p>
                </div>
                <p className="ui-item__title" aria-hidden="true"> {oferta.nombre} </p>
              </div>
            </div>
          </div>
        </Link>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(oferta); }}
          className={`fav-button-ofertas ${isFav ? 'active' : ''}`}
          aria-label="Agregar a favoritos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
      </div>

    </>
  )
}


export default ItemOfertas