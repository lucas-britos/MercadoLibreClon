import React from 'react'
import "./suscriptions.css"

const Subscriptions = () => {
    return (
        <div className='container-subs'>
            <div className='container-subscriptions'>
                <div className='section-header'>
                    <h2>Beneficios de Mercado Puntos</h2>
                    <a href="#">Ver todos los beneficios</a>
                </div>
                <div className='partners-subscriptions__body'>
                    <div className='carousel-container-subscriptions'>
                        <div className='slick-initialized slick-slider'>
                            <div className='slick-list'>
                                <div className='slick-track'>
                                    <div className='slick-slide slick-active'>
                                        <div className='partners-subscriptions__slide'>
                                            <a href="" className='partners-subscriptions__slide-link'>
                                                <div className='partners-subscriptions__slide-gradient'></div>
                                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg" alt="" className='partners-subscriptions__slide-background' />
                                                <div className='partners-subscriptions__slide-logo-text'>
                                                    <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg" alt="" className='partners-subscriptions__slide-logo' />
                                                    <div className='partners-subscriptions__slide-texts'>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--benefit'>Sin cargo con el nivel 6</span>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--partner-name'>Disney+ y Star+</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='slick-slide slick-active'>
                                        <div className='partners-subscriptions__slide'>
                                            <a href="" className='partners-subscriptions__slide-link'>
                                                <div className='partners-subscriptions__slide-gradient'></div>
                                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@2x.webp" alt="" className='partners-subscriptions__slide-background' />
                                                <div className='partners-subscriptions__slide-logo-text'>
                                                    <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1" alt="" className='partners-subscriptions__slide-logo' />
                                                    <div className='partners-subscriptions__slide-texts'>
                                                        <span className='partners-subscriptions__slide-texts-line-span partners-subscriptions__slide-texts-line--benefit'>7 DÍAS GRATIS</span>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--partner-name'>Hasta 50% OFF</span>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--partner-name'>HBO Max</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='slick-slide slick-active'>
                                        <div className='partners-subscriptions__slide'>
                                            <a href="" className='partners-subscriptions__slide-link'>
                                                <div className='partners-subscriptions__slide-gradient'></div>
                                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_mla_@2x.jpg" alt="" className='partners-subscriptions__slide-background' />
                                                <div className='partners-subscriptions__slide-logo-text'>
                                                    <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png" alt="" className='partners-subscriptions__slide-logo' />
                                                    <div className='partners-subscriptions__slide-texts'>
                                                        <span className='partners-subscriptions__slide-texts-line-span partners-subscriptions__slide-texts-line--benefit'>7 DÍAS GRATIS</span>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--partner-name'>Hasta 50% OFF</span>
                                                        <span className='partners-subscriptions__slide-texts-line partners-subscriptions__slide-texts-line--partner-name'>Paramount+</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions