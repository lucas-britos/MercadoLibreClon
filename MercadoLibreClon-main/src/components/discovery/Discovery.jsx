import React from 'react'
import "./discovery.css"

const Discovery = () => {
  return (
    <div className='discovery'>
        <div className='container-discovery row'>
            <div className='section-header'>
                <h2>Descubrí</h2>
            </div>
            <div className='discovery__body'>
                <a href="" className='advertising'>
                    <div className='advertising__info'>
                        <span className='advertising__info__title'>Equipá tu cocina</span>
                        <span className='advertising__info__text advertising__info__text--bold'>hasta 30% off y </span>
                        <span className='advertising__info__text advertising__info__text--bold'>6 cuotas fijas</span>
                        <button className='advertising__info__button andes-button andes-button--small andes-button--loud'>Ver más</button>
                    </div>
                    <div className='advertising__image'>
                        <img src="https://http2.mlstatic.com/D_NQ_608333-MLA54292492197_032023-C.webp" alt="" />
                    </div>
                </a>
                <a href="" className='advertising'>
                    <div className='advertising__info'>
                        <span className='advertising__info__title'>renová tu hogar</span>
                        <span className='advertising__info__text advertising__info__text--bold'>hasta 20% off en</span>
                        <span className='advertising__info__text advertising__info__text--bold'>bazar y cocina</span>
                        <button className='advertising__info__button andes-button andes-button--small andes-button--loud'>Ver más</button>
                    </div>
                    <div className='advertising__image'>
                        <img src="https://http2.mlstatic.com/D_NQ_658398-MLA54292363973_032023-C.webp" alt="" />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Discovery