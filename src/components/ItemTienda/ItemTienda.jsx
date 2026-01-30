import React from 'react'
import "./itemTienda.css"

const ItemTienda = ({tienda}) => {

  return (
    <>
        <div className='card-tienda-container'>
            <div className='ui-card official-stores-slide is-link'>
                <div className='official-stores-slide-background'>
                    <img src={tienda.imgBack} alt="" />
                </div>
                <div className='official-stores-slide-logo'>
                    <img src={tienda.imgLogo} alt="" />
                </div>
                <div className='title-wrapper'>
                    <div className='official-stores-slide-title'>{tienda.nombre}</div>
                </div>
                <div className='official-stores-slide-items'>
                    <a href="#" className='official-stores-slide-item'>
                        <img src={tienda.min1} alt="" />
                    </a>
                    <a href="#" className='official-stores-slide-item'>
                        <img src={tienda.min2} alt="" />
                    </a>
                    <a href="#" className='official-stores-slide-item'>
                        <img src={tienda.min3} alt="" />
                    </a>
                </div>
                <div className='official-stores-slide-action'>
                    <a href="#">
                    Ver tienda
                    <span className='clipped'>, {tienda.nombre}</span>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemTienda