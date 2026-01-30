import React from 'react'
import "./ingresar.css"

const Ingresar = () => {


  return (
    <div>
        <header className='nav-header nav-header-lite'>
            <div className='nav-bounds'>
                <a href="" className='nav-logo'>Mercado Libre</a>
                <div className='nav-header-menu-wrapper'>
                    <nav id='nav-header-menu' className='nav-header-menu'>
                        <a href="" className='option-help'>
                            <i className='nav-icon-help'>
                                <span id='help-text'>Ayuda</span>
                            </i>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
        <main id='root-app'>
            <div className='not-registered_view container'>
                <div className='wrap'>
                    <div className='main center-card'>
                        <div className='center-card__billboard'></div>
                        <div className='andes-card andes-card--flat andes-card--default center-card__body center-card__body--reduced center-card__body--centered center-card__body--footerless andes-card--padding-default'>
                            <div className='center-card__header'>
                                <h1 className='center-card__title'>¡Hola! Para comprar, ingresá a tu cuenta</h1>
                            </div>
                            <div>
                                <a href="" className='andes-button andes-button--large andes-button--loud andes-button--full-width'>
                                    <span className='andes-button__content'>
                                    Crear cuenta
                                    </span>
                                </a>
                                <a href="" className='andes-button login-link andes-button--large andes-button--transparent'>
                                    <span className='andes-button__content'>Ingresar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </main>
        <footer className='login-footer login-footer--default'>
            <div className='login-footer__container'>
                <a href="" className='login-footer__mercadolibre-privacy-link'>Cómo cuidamos tu privacidad</a>
                <span className='login-footer__mercadolibre-copyright'>Lucas Jesús Britos MercadoClon </span>
            </div>
        </footer>
    </div>
  )
}

export default Ingresar