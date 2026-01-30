import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./added.css"
import {getFirestore, doc, getDocs, collection } from "firebase/firestore"
import { app } from '../../firebase/config'


const Added = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [prodDb, setProdDb] = useState([])
    const { Id } = useParams();
  
    console.log(Id)
    useEffect(() => {
        const queryDB = getFirestore(app);
        const queryCollection = collection(queryDB, "datos");
        getDocs(queryCollection)
          .then((res) => {
            const data = res.docs.map((doc) => doc.data());
            setProdDb(data);
            const item = data.find((prod) => prod.id === parseInt(Id));
            setItem(item);
            console.log(item)
            setLoading(false);
          });
      }, []);
  

  return (
    loading? 
        <div className='container spinner'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    :
    <main>
        <div className='nav-main-content'>
            <div className='main-container main-container__white'>
                <div className='container'>
                    <div className='information-container'>
                        <div className='image-information'>
                            <div className='image-information__asset-wrapper'>
                                <div className='image-information__asset'>
                                    <img src={item.img} alt="" className='bf-ui-image--circle'/>
                                    <div className='bf-ui-badge bf-ui-badge__icon'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#00A650"></path>
                                            <path d="M6.78786 9.39574L11.3645 4.81909L12.393 5.84761L6.78786 11.4528L3.60693 8.27185L4.63545 7.24333L6.78786 9.39574Z" fill="white"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='image-information__content'>
                                <div className='image-information__text'>
                                    <h1 className='image-information__title'>
                                        <span className='bf-ui-rich-text bf-ui-rich-text--success'>Agregaste a tu carrito</span>
                                    </h1>
                                    <p className='image-information__description'>
                                        <span className='bf-ui-rich-text'>{item.nombre}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bf-ui-detail-row-with-images'>
                            <div className='bf-ui-detail-row-with-images__text'>
                                <h3 className='bf-ui-detail-row-with-images__title'>
                                    <span className='bf-ui-rich-text'>productos en tu carrito</span>
                                    <span className='bf-ui-rich-price bf-ui-rich-price--bold'>
                                        <span>$</span>
                                        <span className='bf-ui-price-small'>
                                        {(item.descuento 
                                        ? item.precio * (1 - item.descuento / 100) 
                                        : item.precio)}
                                        </span>
                                        <span className='bf-ui-price-small-cents'>20</span>
                                    </span>
                                    <span className='bf-ui-rich-text bf-ui-rich-text--success'>¡Envío gratis!</span>
                                </h3>
                            </div>
                            <ul className='bf-ui-detail-row-with-images__images'>
                                <li className='bf-ui-detail-row-with-images__image bf-ui-detail-row-with-images__image-image'>
                                    <img src={item.img} alt="" className='bf-ui-image--circle' />
                                </li>
                                <li className='bf-ui-detail-row-with-images__image bf-ui-detail-row-with-images__image-image'>
                                    <img src={item.img} alt="" className='bf-ui-image--circle' />
                                </li>
                                <li className='bf-ui-detail-row-with-images__image bf-ui-detail-row-with-images__image-image'>
                                    <img src={item.img} alt="" className='bf-ui-image--circle' />
                                </li>
                            </ul>
                        </div>
                        <div className='bf-ui-button-container bf-ui-button-container--horizontal bf-ui-button-container--transparent'>
                            <NavLink to={"/cart"} >
                                <button className='andes-button bf-ui-button andes-button--large andes-button--loud'>
                                    <span className='andes-button__content'>
                                        <span className='andes-button__text'>Ver carrito</span>
                                    </span>
                                </button>
                            </NavLink>
                            <NavLink to={"/finalizar-compra"}>
                                <button className='andes-button bf-ui-button andes-button--large andes-button--quiet'>
                                    <span className='andes-button__content'>
                                    <span className='andes-button__text'>Comprar carrito</span>
                                </span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='body-container'></div>
            </div>
        </div>
    </main>
  )
}

export default Added