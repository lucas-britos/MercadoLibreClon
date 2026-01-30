import React from 'react'
import "./pays.css"

const PaysContainer = () => {
  return (
    <div className='payment-data-container'>
        <div className='payment-data-group payment-data-group-normal'>
            <div className='payment-data-section payment-data-section-normal'>
                <a href="#" className='payment-data-icon'>
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="" />
                </a>
                <div className='payment-data-title'>Tarjeta de crédito</div>
                <div className='payment-data-subtitle'>
                    <a href="#">Ver promociones bancarias</a>
                </div>
            </div>
            <div className='payment-data-section payment-data-section-normal'>
                <a href="#" className='payment-data-icon'>
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="" />
                </a>
                <div className='payment-data-title'>Tarjeta de débito</div>
                <div className='payment-data-subtitle'>
                    <a href="#">Ver promociones bancarias</a>
                </div>
            </div>
            <div className='payment-data-section payment-data-section-normal'>
                <a href="#" className='payment-data-icon'>
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="" />
                </a>
                <div className='payment-data-title'>Cuotas sin tarjeta</div>
                <div className='payment-data-subtitle'>
                    <a href="#">Conocé Mercado Crédito</a>
                </div>
            </div>
            <div className='payment-data-section payment-data-section-normal'>
                <a href="#" className='payment-data-icon'>
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="" />
                </a>
                <div className='payment-data-title'>Efectivo</div>
                <div className='payment-data-subtitle'>
                    <a href="#">Ver mas</a>
                </div>
            </div>
            <div className='payment-data-section payment-data-section-trailing'>
                <a href="#" className='payment-data-icon'>
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default PaysContainer