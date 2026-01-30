import React from 'react'
import "./intereses.css"

const CardsInteres = () => {
    return (
        <div className='discovery interes-container'>
            <div className='row'>
                <div className='section-header'>
                    <h2>Te puede interesar</h2>
                </div>
                <div className='discovery__body'>
                    <a href="" className='advertising'>
                        <div className='advertising__info'>
                            <span className='advertising__info__title'>DEPORTES</span>
                            <span className='advertising__info__text advertising__info__text--bold'>hasta 30% off y </span>
                            <span className='advertising__info__text advertising__info__text--bold'>6 cuotas fijas</span>
                            <button className='advertising__info__button andes-button andes-button--small andes-button--loud'>Ver más</button>
                        </div>
                        <div className='advertising__image'>
                            <img src="https://http2.mlstatic.com/D_NQ_907572-MLA54292541059_032023-C.webp" alt="" />
                        </div>
                    </a>
                    <a href="" className='advertising'>
                        <div className='advertising__info'>
                            <span className='advertising__info__title'>BELLEZA</span>
                            <span className='advertising__info__text advertising__info__text--bold'>hasta 30% off y </span>
                            <span className='advertising__info__text advertising__info__text--bold'>6 cuotas fijas</span>
                            <button className='advertising__info__button andes-button andes-button--small andes-button--loud'>Ver más</button>
                        </div>
                        <div className='advertising__image'>
                            <img src="https://http2.mlstatic.com/D_NQ_985744-MLA54293532772_032023-C.webp" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
      )
    }

export default CardsInteres