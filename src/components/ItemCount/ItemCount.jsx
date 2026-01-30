import React from 'react'
import "./itemCount.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCartContext } from '../../context/Context';

export const ItemCount = ({ stock, onAdd, item }) => {
  const { toggleFavorite, isInFavorites } = useCartContext();
  const isFav = isInFavorites(item.id);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();


  return (
    <>
      <div className='ui-pdp-stock-information mt-24 mb-8'>
        <p className='ui-pdp-color--BLACK ui-pdp-size--SMALL ui-pdp-family--SEMIBOLD ui-pdp-stock-information__title'>
          Stock disponible
        </p>
      </div>
      <div className='ui-pdp-buybox__quantity mb-12'>
        <div className='andes-tooltip__trigger'>
          <div className='ui-pdp-buybox__quantity__container'>
            <span className='ui-pdp-buybox__quantity__title'>Cantidad:</span>
            <div className='andes-select andes-select--large' style={{ marginLeft: '4px' }}>
              <select className='andes-list andes-list--dropdown andes-list--selectable'
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              >
                <option value='1'>1 Unidad</option>
                <option value='2'>2 Unidades</option>
                <option value='3'>3 Unidades</option>
                <option value='4'>4 Unidades</option>
                <option value='5'>5 Unidades</option>
                <option value='6'>6 Unidades</option>
                <option value='7'>Más de 6</option>
              </select>
            </div>
            <span className='ui-pdp-buybox__quantity__available'>
              ({stock} disponibles)
            </span>
          </div>
        </div>
      </div>


      <div className='ui-pdp-actions'>
        <div className='ui-pdp-actions__container'>
          <button className='andes-button andes-button--loud'
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAdd(selectedQuantity);
              navigate(`/addeditem/${item.id}`, { state: item });
            }}
          >
            <span className='andes-button__content'>Comprar ahora</span>
          </button>

          <button className='andes-button andes-button--quiet'
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAdd(selectedQuantity);
              navigate(`/addeditem/${item.id}`, { state: item });
            }}
          >
            <span className='andes-button__content'>Agregar al carrito</span>
          </button>

          <button
            className='andes-button andes-button--quiet mt-8'
            style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#3483fa', fontWeight: '600' }}
            onClick={(e) => { e.preventDefault(); toggleFavorite(item); }}
          >
            <span className='andes-button__content' style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isFav ? "#3483fa" : "none"}
                stroke="#3483fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
