import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./ingresar.css"

const Ingresar = () => {
    const [isLoggingIn, setIsLoggingIn] = React.useState(false);
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        setIsLoggingIn(true);
        try {
            const result = await loginWithGoogle();
            console.log("Usuario logueado:", result.user);
            navigate('/');
        } catch (error) {
            console.error("Error Firebase:", error);
            alert("Error: " + error.message + "\n\nPasos a revisar:\n1. ¿Habilitaste 'Google' en Sign-in Methods de Firebase?\n2. ¿Agregaste 'localhost' en Dominios Autorizados?\n3. ¿La API Key en config.js es la correcta?");
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <div>
            <header className='nav-header nav-header-lite'>
                <div className='nav-bounds'>
                    <a href="/" className='nav-logo'>Mercado Libre</a>
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
                                    <button onClick={handleGoogleLogin} className='andes-button andes-button--large andes-button--loud andes-button--full-width' style={{ border: 'none', cursor: 'pointer' }}>
                                        <span className='andes-button__content'>
                                            Ingresar con Google
                                        </span>
                                    </button>
                                    <a href="" className='andes-button login-link andes-button--large andes-button--transparent'>
                                        <span className='andes-button__content'>Ingresar con email</span>
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