import React from 'react';
import { Link } from 'react-router-dom';
import './itemCategoria.css';

const ItemCategoria = ({ categoria }) => {
  const handleHover = (event) => {
    const img = event.currentTarget.querySelector('.img-categoria');
    img.classList.toggle('hover');
  };

  return (
    <Link to={`/categoria/${categoria.categoria}`}>
      <div className='card-category' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={categoria.img} alt='' className='img-categoria' />
        <p className='name-categories'>{categoria.categoria}</p>
      </div>
    </Link>
  );
};


export default ItemCategoria;