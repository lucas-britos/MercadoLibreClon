import React from 'react'
import "./beneficios.css"

const Beneficios = () => {
  return (
    <div className='loyalty-buylevel6'>
        <div className="row">
            <div className="loyalty-buylevel6__wrapper container">
                <div className='loyalty-buylevel6__header'>
                    <div className="loyalty-buylevel6__header__title">Suscribite al nivel 6</div>
                    <div className='loyalty-buylevel6__header-pricing-with-serapator loyalty-buylevel6__header-pricing--left'>
                        <span className='loyalty-buylevel6__header-preprice loyalty-buylevel6__header-preprice--strike'>
                            <strike>$ 1439</strike>
                        </span>
                        <span>
                            <span className='loyalty-buylevel6__header-price loyalty-buylevel6__header-price--bold'>$499</span>
                            <span className='loyalty-buylevel6__header-period'>/ mes</span>
                        </span>
                        <div className='loyalty-buylevel6__header-description loyalty-buylevel6__header-description--no-pill'>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className='loyalty-buylevel6__body'>
                    <span className='loyalty-buylevel6__body-title'>Conseguí los mejores beneficios en Mercado Libre</span>
                    <div className='loyalty-buylevel6__body-benefits'>
                        <div className='loyalty-buylevel6__body-benefit'>
                            <div className='loyalty-buylevel6__body-benefit-logo'>
                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg" className='loyalty-buylevel6__body-benefit-logo-img' alt="" />
                            </div>
                            <span className='loyalty-buylevel6__body-benefit-text'>Disney+ sin cargo</span>
                        </div>
                        <div className='loyalty-buylevel6__body-benefÑit'>
                            <div className='loyalty-buylevel6__body-benefit-logo'>
                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg" alt="" className='loyalty-buylevel6__body-benefit-logo-img'/>
                            </div>
                            <span className="loyalty-buylevel6__body-benefit-text">
                            Star+ sin cargo
                            </span>
                        </div>
                        <div className='loyalty-buylevel6__body-benefit'>
                            <div className='loyalty-buylevel6__body-benefit-logo'>
                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png" className='loyalty-buylevel6__body-benefit-logo-img' alt="" />
                            </div>
                            <span className='loyalty-buylevel6__body-benefit-text'>Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos de $ 5.500</span>
                        </div>
                    </div>
                </div>
                <div className='loyalty-buylevel6__action'>
                    <span className='loyalty-buylevel6__action-title'></span>
                    <a href="#" className='andes-button andes-button--medium andes-button--loud'>
                        <span className='andes-button__content'>Suscribite</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficios