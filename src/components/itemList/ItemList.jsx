import React from 'react'
import Item from '../item/Item.jsx'
import { Link } from 'react-router-dom'
import "./itemList.css"
import { useCartContext } from '../../context/Context'


const ItemList = ({ products, categoria }) => {
  const { toggleFavorite, isInFavorites } = useCartContext();

  return (
    <div className='container panel-search'>
      <aside className='ui-search-sidebar shops__sidebar'>
        {products.length > 0 ? (
          <p className='categoria-aside' style={{ color: "#333" }} >Categoria</p>
        ) : (
          <p>No hay resultados para tu busqueda</p>
        )}
        <div className='container-search-right'>
          <h2 className='tittle-search' style={{ color: "#333" }}>{categoria}</h2>
          <div className="cont-search">
            <p style={{ color: "#333" }}>{products.filter(p => p.categoria === categoria).length} resultados</p>
            <a href="">
              <span style={{ color: "#333" }}>Crear alerta de busqueda</span>
            </a>
          </div>
        </div>
      </aside>
      <section className='ui-search-results ui-search-results--without-disclaimer shops__search-results'>

        <ol className='ui-search-layout ui-search-layout--stack shops__layout'>

          {products.map(prod =>
            prod.categoria === categoria ?
              <li className='ui-search-layout__item shops__layout-item' key={prod.id} style={{ position: 'relative' }}>
                <button
                  onClick={(e) => { e.preventDefault(); toggleFavorite(prod); }}
                  className={`fav-button-item-list ${isInFavorites(prod.id) ? 'active' : ''}`}
                  aria-label="Agregar a favoritos"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    transition: 'transform 0.2s, background 0.2s'
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={isInFavorites(prod.id) ? "#3483fa" : "none"}
                    stroke={isInFavorites(prod.id) ? "#3483fa" : "#3483fa"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <Link to={`/detalle/${prod.id}`}>
                  <div className='ui-search-result__wrapper shops__result-wrapper'>
                    <div className='andes-card andes-card--flat andes-card--default ui-search-result shops__cardStyles ui-search-result--core andes-card--padding-default'>
                      <div className='ui-search-result__image shops__picturesStyles'>
                        <div className='ui-search-link'>
                          <div className='carousel-container arrow-visible'>
                            <div className='slick-initialized slick-slider'>
                              <div className='slick-list'>
                                <div className='slick-track' style={{ opacity: "1", transform: "translate3d(0px 0px 0px)", width: "480px" }}>
                                  <div className='container-img' style={{ width: "160px" }} >
                                    <img src={prod.img} alt="" className='ui-search-result-image__element shops__image-element' width={160} height={160} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ui-search-result__content-wrapper shops__result-content-wrapper'>
                        <div className='ui-search-item__group ui-search-item__group--title shops__items-group'>
                          <span className='ui-search-item__brand-discoverability ui-search-item__group__element shops__items-group-details'></span>
                          <div className='ui-search-item__group__element shops__items-group-details ui-search-link'>
                            <h2 className='ui-search-item__title shops__item-title'>{prod.nombre}</h2>
                          </div>
                          <div className='ui-search-official-store-item__link ui-search-link'>
                            <p className='ui-search-official-store-label ui-search-item__group__element shops__items-group-details ui-search-color--GRAY'>Vendido por MercadoClon</p>
                          </div>
                        </div>
                        <div className='ui-search-result__content-columns shops__content-columns'>
                          <div className='ui-search-result__content-column ui-search-result__content-column--left shops__content-columns-left'>
                            <div className='ui-search-item__group ui-search-item__group--price shops__items-group'>
                              <div className='ui-search-item__group__element ui-search-price__part-without-link shops__items-group-details'>
                                <div className='ui-search-price ui-search-price--size-medium shops__price'>
                                  <div className='ui-search-price__second-line shops__price-second-line'>
                                    <span className='price-tag ui-search-price__part shops__price-part'>
                                      <span className='price-tag-text-sr-only'>{prod.precio} pesos</span>
                                      <span className='price-tag-amount'>
                                        <span className='price-tag-symbol'>$</span>
                                        <span className='price-tag-fraction'>{prod.precio}</span>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='ui-search-item__group ui-search-item__group--shipping ui-search-item__group--promise shops__items-group'>
                              <div className='ui-search-item__group__element ui-search-item__group__element--shipping shops__items-group-details'>
                                <p className='ui-search-item__promise ui-search-item__promise--next_day'>
                                  <span className='ui-search-item__promise__text ui-search-item__promise__text--last'>Llega gratis mañana</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='ui-search-result__bookmark'></div>
                    </div>
                  </div>
                </Link>
              </li>
              :
              null
          )}
        </ol>
      </section>
    </div>
  )
}

export default ItemList;