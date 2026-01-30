import React from 'react';
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getTiendas } from '../helpers/getFetch.js'
import ItemTienda from '../ItemTienda/ItemTienda.jsx';
import "./carouselTiendas.css"

const CarouselTiendas = () => {
    const [loading, setLoading] = useState(true)
    const [tiendas, setTiendas] = useState([])
    useEffect(() => {
        getTiendas()
        .then ((res) => {
            setTiendas(res)
          })
          .finally(() => {
            setLoading(false)
          })
        }, [])

        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 4,
              slidesToSlide: 3 
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          }
  return (
    <>
    <div className="container-all-carousel container-all-carousel-tiendas">
        <div className='row'>
            <div className="section-header">
                <h2>Las mejores tiendas te esperan</h2>
                <a href="#">Ver Tiendas</a>
            </div>
        </div>
    {
      loading? 
      <div className='container spinner'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    :
    <Carousel 
    responsive={responsive}
    keyBoardControl={true}
    containerClass="carousel-tiendas-container"
    >
      {tiendas.map(tienda => 
      <ItemTienda tienda={tienda} key={tienda.id}/>
      )}
    </Carousel>
    }
  </div>
</>
  )
}

export default CarouselTiendas