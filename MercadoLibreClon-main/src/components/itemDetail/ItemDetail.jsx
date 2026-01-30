import "./ItemDetal.css"
import { useCartContext } from '../../context/Context'
import { ItemCount } from '../ItemCount/ItemCount'
import AdnArea from '../adn-Area/AdnArea.jsx'
import Footer from '../Footer/Footer.jsx'
import React, { useState, useEffect } from "react";
import Comments from "../Comments/Comments"

const ItemDetail = ({item}) => {

  const [imagenSeleccionada, setImagenSeleccionada] = useState(item.img)

    const {addToCart, cart} = useCartContext()
    function onAdd(cantidad) {
      addToCart({...item, cantidad: cantidad})
    }
    
  return (
    <>
    <div className="container-top-detail">
      <div className="top-and-bottom">
        <div className="top-menu">
          <span className="span-detail">Tambien puede interesarte: </span>
          <a href="">
            <span className="span-detail">tcl tab 10stablet samsung s8tablet telefono</span>
          </a>
        </div>
        <div className="bottom-menu">
          <div className="left-bottom-menu-detail">
            <a href="">
              <span className="no-color-blue span-detail">Volver </span>
            </a>
            <span className="barra-separadora span-detail">|</span>
            <a href="">
              <span className="span-detail"> {item.categoria}</span>
            </a>
          </div>
          <div className="right-bottom-menu-detail">
          <a href="">
            <span className="span-detail">Compartir </span>
          </a>
          <span className="barra-separadora span-detail">|</span>
          <a href="">
            <span className="span-detail"> Vender uno igual</span>
          </a>
          </div>
        </div>
      </div>
    </div>

      <div className='ui-pdp-container ui-pdp-container--pdp'>
        <div className='ui-pdp-container__row ui-pdp--relative ui-pdp-with--separator--fluid pb-40'>
          <div className='ui-pdp-container__col col-3 ui-pdp-container--column-center pb-40'>
            <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-center' style={{top: "-2015px"}}>
              <div className='ui-pdp-container__row ui-pdp-with--separator--fluid ui-pdp-with--separator--40'>
                <div className='ui-pdp-container__col col-2 ui-pdp--relative'>
                  <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-gallery'>
                    <div className='ui-pdp-gallery'>
                      <div className='ui-pdp-gallery__zoom-container'>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'>
                          <div className='drift-zoom-pane-loader ui-pdp-gallery__zoom-zoom-pane-loader'></div>
                          <img src={imagenSeleccionada} alt="" style={{width: "850.5px", height: "1053px", transform: "translate(-155.417px, 0px)"}}/>
                        </div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'>
                          <div className='drift-zoom-pane-loader ui-pdp-gallery__zoom-zoom-pane-loader'></div>
                          <img src={imagenSeleccionada} alt="" style={{width: "850.5px", height: "1053px", transform: "translate(-155.417px, 0px)"}}/>
                        </div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                      </div>
                      <div className='ui-pdp-gallery__column'>
                        <input
                        type="radio" 
                        className='ui-pdp-gallery__input' 
                        name="gallery-radio" id="gallery-thumbnail-890555-MLA50912449037_072022" 
                        value={0} 
                        checked 
                        readOnly
                        onClick={() => setImagenSeleccionada(item.imagenes)}
                        />
                        <span className='ui-pdp-gallery__wrapper'>
                          <label htmlFor="gallery-thumbnail-890555-MLA50912449037_072022" className='ui-pdp-gallery__label'>
                            <div className='ui-pdp-thumbnail ui-pdp-gallery__thumbnail'>
                              <div className='ui-pdp-thumbnail__picture'>
                                <img src={item.imagenes} alt="" style={{width:"44px", height: "44px"}} className="img-item"/>
                              </div>
                            </div>
                          </label>
                          <figure className='ui-pdp-gallery__figure'>
                            <img src={imagenSeleccionada} alt="" className='ui-pdp-image ui-pdp-gallery__figure__image'/>
                          </figure>
                        </span>
                        <input 
                        type="radio" 
                        className='ui-pdp-gallery__input' 
                        name="gallery-radio" 
                        id="gallery-thumbnail-920365-MLA50912414250_072022" 
                        value={0} 
                        checked 
                        readOnly
                        onClick={() => setImagenSeleccionada(item.img)}
                        />
                        <span className='ui-pdp-gallery__wrapper'>
                          <label htmlFor="gallery-thumbnail-920365-MLA50912414250_072022" className='ui-pdp-gallery__label'>
                            <div className='ui-pdp-thumbnail ui-pdp-gallery__thumbnail'>
                              <div className='ui-pdp-thumbnail__picture'>
                                <img src={item.img} alt="" className="img-item"/>
                              </div>
                            </div>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ui-pdp-container__col col-2' style={{maxWidth:"352px"}}>
                  <div className='ui-pdp-container__top-wrapper mt-40'>
                    <div className='ui-pdp-header'>
                      <div className='ui-pdp-header__subtitle'>
                        <span className='ui-pdp-subtitle'>
                        Nuevo  |  +5mil vendidos
                        </span>
                      </div>
                      <div className='ui-pdp-header__title-container'>
                        <h1 className='ui-pdp-title'> {item.nombre} </h1>
                      </div>
                      <div className='ui-pdp-header__info'>
                        <a href="" className='ui-pdp-review__label ui-pdp-review__label--link stars-tienda'>
                          <span className="ui-pdp-review__ratings">
                            <svg className="ui-pdp-icon ui-pdp-icon--star-full" width={10} height={10} viewBox="0 0 10 10">
                              <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                            </svg>
                            <svg className="ui-pdp-icon ui-pdp-icon--star-full" width={10} height={10} viewBox="0 0 10 10">
                            <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                            </svg>
                            <svg className="ui-pdp-icon ui-pdp-icon--star-full" width={10} height={10} viewBox="0 0 10 10">
                            <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                            </svg>
                            <svg className="ui-pdp-icon ui-pdp-icon--star-full" width={10} height={10} viewBox="0 0 10 10">
                            <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                            </svg>
                            <svg className="ui-pdp-icon ui-pdp-icon--star-full" width={10} height={10} viewBox="0 0 10 10">
                            <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                            </svg>
                          </span>
                          <span className='ui-pdp-review__amount'>(1467)</span>
                        </a>
                      </div>
                    </div>
                    <form action="" className='ui-pdp-bookmark ui-pdp-bookmark__link-bookmark'></form>
                  </div>
                  <div className='ui-pdp-promotions-pill mt-10 ui-pdp-highlights'>
                    <div className='ui-pdp-promotions-pill-label ui-pdp-background-color--ORANGE ui-pdp-color--WHITE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                      <a href="" className='ui-pdp-promotions-pill-label__target'>MÁS VENDIDO</a>
                    </div>
                    <div className='ui-pdp-promotions-pill-label best_seller_position ui-pdp-background-color--WHITE ui-pdp-color--BLUE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                      <a href="" className='ui-pdp-promotions-pill-label__target'>
                      14º en {item.categoria}
                      </a>
                    </div>
                  </div>
                  <div className='ui-pdp-price mt-16 ui-pdp-price--size-large'>
                    <div className='ui-pdp-price__second-line'>
                      <span className='andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact' style={{fontSize:"36px"}}>
                        {
                          item.descuento > 0 ?
                          <div>
                            <span>
                             <strike className="price-before">${item.precio}</strike>
                            </span>
                            <div className="container-descuento">
                            <span className='andes-money-amount__currency-symbol'>$</span>
                            <span className='andes-money-amount__fraction'>{item.precio-(item.precio / 100 * item.descuento)}</span>
                            <span className='ui-pdp-price__second-line__label ui-pdp-color--GREEN ui-pdp-size--MEDIUM'>
                        <span className='andes-money-amount__discount' style={{fontSize: "18px"}}>
                            {item.descuento}% OFF
                        </span>
                      </span>

                            </div>
                          </div>
                          :
                          <div>
                            <span className='andes-money-amount__currency-symbol'>$</span>
                            <span className='andes-money-amount__fraction'>{item.precio}</span>
                          </div>
                        }
                        <span className='andes-visually-hidden'>
                          <strike>{item.precio}</strike>
                        </span>
                      </span>
                    </div>
                    <div className='ui-pdp-price__subtitles'>
                      <p className='ui-pdp-color--GREEN ui-pdp-size--MEDIUM ui-pdp-family--REGULAR'>
                        <span className='ui-pdp-color--GREEN ui-pdp-family--REGULAR'>Mismo precio en </span>
                        6 cuotas de
                        <span className='andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact' style={{fontSize: "18px"}} >
                            <span className='andes-money-amount__currency-symbol'>$</span>
                            <span className='andes-money-amount__fraction'> {(item.precio / 6).toFixed(0)} </span>
                        </span>
                      </p>
                      <p className='ui-pdp-color--SMALL ui-pdp-size--XSMALL ui-pdp-family--REGULAR mt-8'>
                        <span className='ui-pdp-color--GREEN ui-pdp-family--SEMIBOLD'>Duplica puntos: </span>
                        <span className='ui-pdp-color--GRAY ui-pdp-family--REGULAR'>sumás 284 Mercado Puntos</span>
                      </p>
                    </div>
                    <div className='ui-pdp-price__payments-link'>
                      <div className='ui-pdp-action-modal'>
                        <div className='andes-tooltip__trigger'>
                          <a href="" className='ui-pdp-action-modal__link'>Ver los medios de pago</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-promotions-pill mt-10'>
                    <div className='ui-pdp-promotions-pill-label ui-pdp-background-color--BLUE ui-pdp-color--WHITE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                    OFERTA DEL DÍA
                    </div>
                  </div>
                  <div className='ui-pdp-variations'></div>
                  <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-specs-features'>
                    <section className='ui-vpp-highlighted-specs'>
                      <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-features-title'>
                        <h2 className='ui-vpp-text-alignment--left ui-pdp-color--BLACK ui-pdp-size--XSMALL ui-pdp-family--SEMIBOLD highlighted-features-title'>
                        Lo que tenés que saber de este producto
                        </h2>
                      </div>
                      <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-features'>
                        <div className='ui-vpp-highlighted-specs__features'>
                          <ul className='ui-vpp-highlighted-specs__features-list'>
                            {item.descripcion}
                          </ul>
                          <a href="" className='ui-pdp-media__action ui-vpp-highlighted-specs__features-action'>
                          Ver características
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row ui-pdp-recommendations-row'></div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
              <hr  className="separator"/>
              <div className='ui-pdp-container__row'>
                <div className='ui-pdp-container__col col-1'>
                  <div className='ui-pdp-description pl-45 pr-45 ui-pdp-collapsable--is-collapsed'>
                    <h2 className='ui-pdp-description__title'>Descripción</h2>
                    <p className='ui-pdp-description__content'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis quia repellat saepe libero? Odio illo eligendi blanditiis placeat delectus, laborum error? At quam similique ab voluptatem illo accusamus placeat.
                      Tempore pariatur iste adipisci cumque ab! Autem, eaque repellat. Delectus voluptatum ratione quos temporibus voluptas voluptatibus eaque laudantium porro ullam laboriosam quam ex, illum dolor blanditiis iusto sint reiciendis adipisci.
                      Consequatur maiores voluptates a culpa saepe, distinctio vitae quae excepturi, qui sequi voluptatem. Quasi, dicta vero voluptas in doloribus nisi tenetur. Provident dolore veritatis illum odio sint aliquam quod sapiente.
                      Earum natus hic sit nam quos facilis eos, eligendi sequi magni modi et laudantium vitae reprehenderit esse accusantium cumque atque excepturi quia culpa ipsam laborum inventore provident eius. Qui, sapiente.
                      Minima, libero autem minus repellat eum voluptatibus veniam ipsam voluptate eaque quod officia alias esse possimus maiores ipsum dolore cum officiis porro, tempora tenetur vel cupiditate facere suscipit fugit? Placeat?
                    </p>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row'></div>
            </div>
          </div>
          <div className='ui-pdp-container__col col-1 ui-pdp-container--column-right mt-16 pr-16'>
            <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-right' style={{top: "-1063px"}}>
              <div className='ui-pdp-container__row'>
                <form action="" className='ui-pdp-buybox' id="buybox-form">
                  <input type="hidden" value={"GwONo6h2-_3Z5mZZYehwOEWdOGuBuBDq2Vpw"} name="_csrf" />
                  <div className='ui-pdp-media ui-pdp-shipping ui-pdp-shipping--md mb-20 ui-pdp-color--GREEN'>
                    <figure className='ui-pdp-media__figure'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="ui-pdp-icon ui-pdp-icon--shipping ui-pdp-icon--truck ui-pdp-color--GREEN" width={18} height={15} viewBox="0 0 18 15" ></svg>
                    </figure>
                    <div className='ui-pdp-media__body'>
                      <div className='andes-tooltip__trigger'>
                        <p className='ui-pdp-color--GREEN ui-pdp-family--REGULAR ui-pdp-media__title ui-pdp-media__title--on-hover'>Envío gratis a todo el país
                          <span className='ui-pdp-media__title-icons'></span>
                        </p>
                      </div>
                      <p className='ui-pdp-color--GRAY ui-pdp-family--REGULAR ui-pdp-media__text'>Conocé los tiempos y las formas de envío.</p>
                      <div className='ui-pdp-action-modal'>
                        <div className='andes-tooltip__trigger'>
                          <a href="" className='ui-pdp-action-modal__link'>
                            <div className='ui-pdp-action-modal__icon'></div>
                            Calcular cuándo llega
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-seller mb-20'>
                    <div className='ui-pdp-seller__header'>
                      <div className='ui-pdp-seller__header__info-container'>
                        <div className='ui-pdp-seller__header__title'>
                          <span className='ui-pdp-seller__label-sold'>Tienda oficial</span>
                          <div className='ui-pdp-action-modal ui-pdp-seller__link-trigger non-selectable'>
                            <div className='andes-tooltip__trigger'>
                              <a href="" className='ui-pdp-action-modal__link'>
                                <span className='ui-pdp-color--BLUE ui-pdp-family--REGULAR'>
                                Mercado Libre Electrónica
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className='ui-pdp-color--BLACK ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>+100mil ventas</p>
                        <p className='ui-pdp-color--GRAY ui-pdp-size--XXSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>Hace Factura A</p>
                      </div>
                    </div>
                  </div>
                  {/**
                   * 
                   * 
                  */}
                  <ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item} />
                  <ul className='ui-pdp-benefits mt-24'>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                        </svg>
                        </figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Devolución gratis.
                                </a>
                              </div>
                            </div>
                          Tenés 30 días desde que lo recibís.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        </figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Compra Protegida
                                </a>
                              </div>
                            </div>
                            , recibí el itemo que esperabas o te devolvemos tu dinero.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                        </svg>
                        </figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Mercado Puntos
                                </a>
                              </div>
                            </div>
                            . Sumás 1284 puntos.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                        </figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                              </div>
                            </div>
                            12 meses de garantía de fábrica.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
              <div className='ui-pdp-container__row'>
                <div className='ui-box-component ui-box-component-pdp__visible--desktop'>
                  <h2 className='ui-box-component__title'>Información de la tienda</h2>
                  <div className='ui-seller-info'>
                    <div className='ui-pdp-seller__header ui-pdp-seller__header--margin'>
                      <div className='ui-pdp-seller__header__image-container'>
                        <img src="https://http2.mlstatic.com/D_Q_NP_630558-MLA42437086154_072020-G.jpg" className='ui-pdp-seller__header__image-container__image' alt="" />
                      </div>
                      <div className='ui-pdp-seller__header__info-container'>
                        <div className='ui-pdp-seller__header__title'>Mercado Libre Electrónica</div>
                        <p className='ui-pdp-color--GRAY ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>Tienda oficial de Mercado Libre</p>
                      </div>
                    </div>
                    <div className='ui-seller-info__status-info'>
                      <figure className='ui-seller-info__status-info__icon ui-pdp-color--GREEN'></figure>
                      <div>
                        <p className='ui-seller-info__status-info__title ui-pdp-seller__status-title'>MercadoLíder Platinum</p>
                        <p className='ui-seller-info__status-info__subtitle'>¡Es uno de los mejores del sitio!</p>
                      </div>
                    </div>
                    <ul>
                      <li className='ui-thermometer__level ui-thermometer__level--1'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--2'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--3'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--4'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--5'></li>
                    </ul>
                    <div className='ui-pdp-seller__reputation-info'>
                      <ul className='ui-pdp-seller__list-description'>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__sales-description'>+100mil</strong>
                          <p className='ui-pdp-seller__text-description'>Ventas en los últimos 60 días</p>
                        </li>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__icon-description'>
                            <div className='ui-pdp-icon ui-pdp-icon--message-positive ui-pdp-color--REP_SELLER_ATTENTION_GOOD'>
                              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" alt="" />
                            </div>
                          </strong>
                          <p className='ui-pdp-seller__text-description'>Brinda buena atención</p>
                        </li>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__icon-description'>
                            <div className='ui-pdp-icon ui-pdp-icon--time-positive ui-pdp-color--REP_SELLER_DELIVERY_TIME_GOOD'>
                              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" alt="" />
                            </div>
                          </strong>
                          <p className='ui-pdp-seller__text-description'>Despacha sus itemos a tiempo</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="" className='ui-pdp-media__action ui-box-component__action'>
                  Ver más datos de Mercado Libre Electrónica
                  </a>
                </div>
                <div className='ui-box-component ui-box-component-pdp__visible--desktop'>
                  <h2 className='ui-box-component__title'>Medios de pago</h2>
                  <div className='ui-vip-payment_methods'>
                    <div className='ui-pdp-action-modal'>
                      <div className='andes-tooltip__trigger'>
                        <a href="" className='ui-pdp-action-modal__link'>
                          <div className='ui-pdp-media ui-vip-payment_methods__container ui-pdp-background-color--GREEN ui-pdp-color--WHITE'>
                            <figure className='ui-pdp-media__figure'></figure>
                            <div className='ui-pdp-media__body'>
                              <p className='ui-pdp-color--WHITE ui-pdp-family--REGULAR ui-pdp-media__title'>
                              ¡Pagá el mismo precio en
                              <span className='ui-pdp-color--WHITE ui-pdp-family--SEMIBOLD'>
                              hasta 6 cuotas
                              </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Hasta 12 cuotas sin tarjeta</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon' />
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Tarjetas de crédito</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Tarjetas de débito</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Efectivo</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-action-modal ui-box-component__action'>
                    <div className='andes-tooltip__trigger'>
                      <a href="" className='ui-pdp-action-modal__link'>Conocé otros medios de pago</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
            </div>
          </div>
        </div>
        <div className='ui-pdp-container__row'>
          <div className='ui-pdp-container__col col-3'></div>
        </div>
        <div className='ui-pdp-container__row'>
          <div className='ui-pdp-container__col col-3'></div>
          <div className='ui-pdp-container__col col-1 ui-pdp-container--column-right mt-40'></div>
        </div>
        <Comments item= {item} />
      </div>
      <AdnArea/>
      <Footer/>
    </>


  )
}

export default ItemDetail