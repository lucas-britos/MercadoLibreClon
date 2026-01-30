import React from 'react'
import "./itemCount.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemCount = ( {stock, onAdd, item} ) => {


    const [selectedQuantity, setSelectedQuantity] = useState(1);


  return (
    <>
    <div className='ui-pdp-stock-information mt-24 mb-8'>
                    <p className='ui-pdp-color--BLACK ui-pdp-size--SMALL ui-pdp-family--SEMIBOLD ui-pdp-stock-information__title'>
                    Stock disponible
                    </p>
                  </div>
                  <div className='ui-pdp-buybox__quantity mb-12'>
                    <div className='andes-tooltip__trigger'>
                      <button type='button' className='andes-button ui-pdp-buybox__quantity__trigger andes-button--large andes-button--transparent' id="quantity-selector">
                        <span className='andes-button__content'>
                          <span className='ui-pdp-buybox__quantity__title'>Cantidad:</span>
                          <div className='andes-select andes-select--large'>
                            <select id='quantity-selector' className='andes-list andes-list--dropdown andes-list--selectable'
                                value={selectedQuantity}
                                onChange={(e) => setSelectedQuantity(e.target.value)}
                            >
                                <option value='1' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                        <div className='andes-list__item-text'>
                                            <span className='andes-list__item-primary'>1 Unidad</span>
                                        </div>
                                    </div>
                                </option>
                                <option value='2' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>2 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                                <option value='3' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>3 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                                <option value='4' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>4 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                                <option value='5' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>5 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                                <option value='6' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>6 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                                <option value='7' className='andes-list__item andes-list__item--size-medium andes-list__item--selected'>
                                    <div className='andes-list__item-first-column'>
                                            <div className='andes-list__item-text'>
                                                <span className='andes-list__item-primary'>Más de 6 Unidades</span>
                                            </div>
                                    </div>
                                </option>
                            </select>
                            </div>
                          <span className='ui-pdp-buybox__quantity__chevron'></span>
                          <span className='ui-pdp-buybox__quantity__available'>
                            ({stock} disponibles)
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className='ui-pdp-actions'>
                    <div className='ui-pdp-actions__container'>
                    <Link to={{
                            pathname: `/addeditem/${item.id}`,
                            state: {...item} 
                        }} >
                      <button className='andes-button andes-spinner__icon-base andes-button--loud'
                        onClick={(e) => {
                        onAdd(selectedQuantity)}} 
                      >
                        <span className='andes-button__content'>Comprar ahora</span>
                      </button>
                      </Link>

                      <Link to={{
                            pathname: `/addeditem/${item.id}`,
                            state: {...item} 
                        }} >
                        <button className='andes-button andes-spinner__icon-base andes-button--quiet'
                            onClick={(e) => {
                            onAdd(selectedQuantity)}} 
                        >
                            <span className='andes-button__content'>Agregar al carrito</span>
                        </button>
                      </Link>
                    </div>
                  </div>
    </>
  )
}
