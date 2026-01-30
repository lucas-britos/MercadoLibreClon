import React, { useState } from 'react';
import { categorias } from '../helpers/getFetch.js';
import ItemCategoria from '../ItemCategoria/ItemCategoria.jsx';
import "./categories.css"

const CategoriesCarousel = () => {
  const itemsPerRow = 7;
  const numViews = Math.ceil(categorias.length / 14); 
  const [startIndex, setStartIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0); 
  const rows = [];
  let items = [];
  
  const currentCategories = categorias.slice(startIndex + viewIndex * 14, startIndex + (viewIndex + 1) * 14);

  currentCategories.forEach((categoria, index) => {
    if (index > 0 && index % itemsPerRow === 0) {
      rows.push(<div className="row" key={index}>{items}</div>);
      items = [];
    }
    items.push(<div className="col" key={categoria.id}><ItemCategoria categoria={categoria} /></div>);
  });
  if (items.length > 0) {
    rows.push(<div className="row" key={currentCategories.length}>{items}</div>);
  }

  const handleShowMore = () => {
    setStartIndex(startIndex + 14);
  }

  const handleNext = () => {
    if (viewIndex < numViews - 1) {
      setViewIndex(viewIndex + 1);
    }
  }


  return (
    <div className="container-carousel-categorias">
      <div className="section-header container-tittle">
        <h2>Categorías Populares</h2>
        <div className='d-flex container-carousel-button'>
  <svg className="nc-icon" aria-labelledby="MLA1743">
    <use xlinkHhref="#nc-car-front"></use>
  </svg>
</div>

      </div>
      <div className="container-categories-buttons">
      {rows.slice(0, 2)}
      {numViews > 1 && (
        <div className='d-flex container-buttons'>
          {viewIndex > 0 && (
            <button onClick={() => setViewIndex(viewIndex - 1)} className='andes-carousel-snapped__control andes-carousel-snapped__control--next andes-carousel-snapped__control--size-large'>
              <span className='symbol-button'>&lt;</span>
            </button>
          )}
          {viewIndex < numViews - 1 && (
            <button onClick={handleNext} className='andes-carousel-snapped__control andes-carousel-snapped__control--next andes-carousel-snapped__control--size-large'>
              <span className='symbol-button'>&gt;</span>
            </button>
          )}
        </div>
      )}
      {rows.slice(2)}
      </div>
    </div>
  );
}

export default CategoriesCarousel;

