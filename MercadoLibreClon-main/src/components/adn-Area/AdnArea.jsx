import React from 'react'
import "./adnArea.css"

const AdnArea = () => {
  return (
    <div className='adn AD_ADN_area'>
        <div>
            <a href="">
                <div className='adn-container'>
                    <div className='adn-container-images'>
                        <img src="https://http2.mlstatic.com/D_NQ_817191-MLA53559372167_022023-OO.jpg" className='adn-picture' alt="" />
                        <div className='adn-container-logo'>
                            <div className='position-logo'>
                                <img src="https://http2.mlstatic.com/D_NQ_814693-MLA53559372171_022023-OO.jpg" alt=""  className='adn-logo'/>
                            </div>
                        </div>
                    </div>
                    <div className='adn-container-texts'>
                        <div>
                            <p className='adn-text-title'>OFERTAS Y </p>
                            <p className='adn-text-title'>HASTA 12 CUOTAS</p>
                        </div>
                        <div className='adn-cta without-volanta'>
                            <p className='adn-text-cta'>Ver más</p>
                            <div className='adn-cta-chevron'>

                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default AdnArea