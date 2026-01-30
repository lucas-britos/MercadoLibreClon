import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className='nav-footer-access nav-footer-access-expanded'>
            <button id='nav-footer-access-switch'>Más información</button>
            <div className='nav-footer-access-content'>
                <div className='nav-bounds'>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Acerca de</h3>
                        <ul>
                            <li>
                                <a href="">Mercado Libre</a>
                            </li>
                            <li>
                                <a href="">Investor relations</a>
                            </li>
                            <li>
                                <a href="">Tendencias</a>
                            </li>
                            <li>
                                <a href="">Sustentabilidad</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Otros sitios</h3>
                        <ul>
                            <li>
                                <a href="">Developers</a>
                            </li>
                            <li>
                                <a href="">Mercado Pago</a>
                            </li>
                            <li>
                                <a href="">Mercado Shops</a>
                            </li>
                            <li>
                                <a href="">Mercado Envíos</a>
                            </li>
                            <li>
                                <a href="">Mercado Ads</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Ayuda</h3>
                        <ul>
                            <li>
                                <a href="">Comprar</a>
                            </li>
                            <li>
                                <a href="">Vender</a>
                            </li>
                            <li>
                                <a href="">Resolución de problemas</a>
                            </li>
                            <li>
                                <a href="">Centro de seguridad</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Redes sociales</h3>
                        <ul>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                            <li>
                                <a href="">Facebook</a>
                            </li>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Mi cuenta</h3>
                        <ul>
                            <li>
                                <a href="">Ingresá</a>
                            </li>
                            <li>
                                <a href="">Vender</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Mercado Puntos</h3>
                        <ul>
                            <li>
                                <a href="">Nivel 6</a>
                            </li>
                            <li>
                                <a href="">Disney+</a>
                            </li>
                            <li>
                                <a href="">Star+</a>
                            </li>
                            <li>
                                <a href="">HBO MAX</a>
                            </li>
                            <li>
                                <a href="">Paramount+</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer className='nav-footer'>
            <div className='nav-footer-user-info nav-bounds'>
                <div className='nav-footer-info-wrapper'>
                    <div className='nav-footer-primaryinfo'>
                        <small className='nav-footer-copyright'>Lucas Jesús Britos Developer</small>
                        <nav className='nav-footer-navigation'>
                            <ul className='nav-footer-navigation__menu'>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Trabajá con nosotros</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Términos y condiciones</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Cómo cuidamos tu privacidad</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Accesibilidad</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Información al usuario financiero</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Ayuda</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Defensa del Consumidor</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Información sobre seguros</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <p></p>
                </div>
            </div>
        </footer>
    
    
    </>
  )
}

export default Footer