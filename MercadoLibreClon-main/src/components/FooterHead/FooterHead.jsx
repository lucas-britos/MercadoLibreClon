import React from 'react'
import "./foo.css"


const FooterHead = () => {
  return (
    <>
        <section className='site-shopping-info'>
            <div className="container">
                <div className="top-container-footer">
                <div className='info-slide'>
                    <div className='img-container'>
                        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" className='img-container' alt="" />
                    </div>
                    <h2>Elegí cómo pagar</h2>
                    <p>
                        <span>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</span>
                    </p>
                    <a href="">Cómo pagar tus compras</a>
                </div>
                <div className='info-slide'>
                    <div className="img-container">
                        <img className='img-container' src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
                    </div>
                    <h2>Envío gratis desde $ 8.000</h2>
                    <p>
                        <span>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</span>
                    </p>
                    <a href="">Conocé más sobre este beneficio</a>
                </div>
                <div className='info-slide'>
                    <div className="img-container">
                        <img className='img-container' src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
                    </div>
                    <h2>Seguridad, de principio a fin</h2>
                    <p>
                        <span>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
                    </p>
                    <a href="">Cómo te protegemos</a>
                </div>

                </div>
            </div>
        </section>
        <section className='regret'>
            <div className='container regret__container'>
                <div className='regret__box'>
                    <p className='regret__content'>Botón de arrepentimiento
                    <br />
                        <a href="#">Cancelar una compra</a>
                        <br />
                        <a href="">Cancelar una suscripción</a>
                        <br />
                        <a href="">Cancelar un seguro o garantía</a>
                    </p>
                </div>
                <div className='regret__box'>
                <p className='regret__content'>Conocé las normas que aplican cuando comprás
                    <br />
                        <a href="#">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
                    </p>
                </div>
            </div>
        </section>
        <section className='regulation-row'>
            <div className="container">
                <div className='container-regulation-row'>
                    <div className='help-email'>
                        <a href="#" className='help-email__link'>
                            <img className='help-email__icon' src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/./help-email/icon_email.svg" alt="" />
                            <span className='help-email__email'>ayuda@mercadolibre.com.ar</span>
                        </a>
                    </div>
                    <div className='national-insurance-info'>
                        <a href="" className='national-insurance-info__link'>
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" alt="" className='national-insurance-info__image' />
                        </a>
                    </div>
                    <div className='financial-user-info'>
                        <a href="" className='financial-user-info__link'>
                            <img src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg" alt="" className='financial-user-info__image'/>
                        </a>
                    </div>
                    <div className='afip'>
                        <a href="" className='afip-link'>
                            <img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default FooterHead