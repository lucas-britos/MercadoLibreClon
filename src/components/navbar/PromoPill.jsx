import React from 'react';

const PromoPill = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '33px', /* Slightly smaller */
            backgroundColor: 'transparent',
            cursor: 'pointer',
        }}>
            <img
                src="/assets/promo_pill_full.png"
                alt="Promo Meli+ Esencial"
                style={{ height: '100%', objectFit: 'contain' }}
            />
        </div>
    );
};

export default PromoPill;
