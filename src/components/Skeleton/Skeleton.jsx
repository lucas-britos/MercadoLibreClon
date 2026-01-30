import React from 'react';
import './skeleton.css';

const Skeleton = ({ type, count = 1, style }) => {
    const renderSkeleton = (index) => {
        switch (type) {
            case 'product-card':
                return (
                    <div className="skeleton-card" key={index} style={style}>
                        <div className="skeleton-img"></div>
                        <div className="skeleton-content">
                            <div className="skeleton-line title"></div>
                            <div className="skeleton-line price"></div>
                            <div className="skeleton-line subtitle"></div>
                        </div>
                    </div>
                );
            case 'text':
                return <div className="skeleton-line" key={index} style={style}></div>;
            default:
                return <div className="skeleton-box" key={index} style={style}></div>;
        }
    };

    return (
        <div className={`skeleton-container ${type}`}>
            {[...Array(count)].map((_, i) => renderSkeleton(i))}
        </div>
    );
};

export default Skeleton;
