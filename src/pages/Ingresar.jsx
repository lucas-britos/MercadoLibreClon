import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./ingresar.css"

const Ingresar = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
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
            alert("Error: " + error.message);
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <div className="login-page">
            <main id='root-app'>
                <div className='login-container'>
                    <div className='login-card'>
                        <div className='login-card__header'>
                            <h1 className='login-card__title'>¡Hola! Ingresá tu teléfono, e-mail o usuario</h1>
                        </div>
                        <div className="login-card__content">
                            <div className="login-card__options">
                                <button
                                    onClick={handleGoogleLogin}
                                    className='login-btn google-btn'
                                    disabled={isLoggingIn}
                                >
                                    {isLoggingIn ? 'Cargando...' : 'Ingresar con Google'}
                                </button>
                                {/* Simulación de otras opciones */}
                                <button className='login-btn email-btn' disabled>
                                    Ingresar con e-mail (Próximamente)
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="login-help">
                        <a href="#">Crear cuenta</a>
                        <a href="#">Necesito ayuda</a>
                    </div>
                </div>
            </main>
            <footer className='login-footer'>
                <div className='login-footer__container'>
                    <a href="#">Cómo cuidamos tu privacidad</a>
                    <span>Copyright © 1999-2024 MercadoLibre S.R.L.</span>
                </div>
            </footer>
        </div>
    )
}

export default Ingresar