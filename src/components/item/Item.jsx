import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { motion } from 'framer-motion'
import { useCartContext } from '../../context/Context'

const Item = ({ product }) => {
  const { toggleFavorite, isInFavorites } = useCartContext();
  const isFav = isInFavorites(product.id);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="card col-3"
      style={{ transition: 'box-shadow 0.3s ease', position: 'relative' }}
    >
      <button
        onClick={() => toggleFavorite(product)}
        className={`fav-button ${isFav ? 'active' : ''}`}
        aria-label="Agregar a favoritos"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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

      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {product.nombre} </h5>
        <p className="card-text"> {product.descripcion} </p>
        <p className="card-text"><small className="text-muted"> Stock: {product.stock} </small></p>
        <Link to={`/detalle/${product.id}`}>
          <button className='btn btn-primary'>Ver detalles</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Item