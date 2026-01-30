import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import "./SearchList.css"
import {getFirestore, doc, getDocs, collection } from "firebase/firestore"
import { app } from '../../firebase/config'

const SearchList = () => {
  const [loading, setLoading] = useState(true)
  const [filtrados, setFiltrados] = useState([])
  const params = useParams()
  const busqueda = params.busqueda
  const { detalleId } = useParams();
  const [prodDb, setProdDb] = useState([]);

  
  useEffect(() => {
      const queryDB = getFirestore(app);
      const queryCollection = collection(queryDB, "datos");
      getDocs(queryCollection)
        .then((res) => {
          const data = res.docs.map((doc) => doc.data());
          setProdDb(data);
          setLoading(false);
        });
    }, [detalleId]);




  useEffect(() => {
    const result = prodDb.filter((product) => {
      const lowerBusqueda = busqueda.toLowerCase(); 
      const lowerNombre = product.nombre.toLowerCase(); 
      const lowerDescripcion = product.descripcion.toLowerCase();
      return lowerNombre.includes(lowerBusqueda) || lowerDescripcion.includes(lowerBusqueda);
    });
    setFiltrados(result);
  }, [busqueda, prodDb]);

  console.log(filtrados);

  return (
    <Link to={`/detalle/${filtrados.id}`} >
    <div className='ui-search shops__ui-main'>

    <div className='ui-search-main ui-search-main--only-products ui-search-main--with-topkeywords shops__search-main'>
      {loading ? (
        <div className='spinner'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className='container panel-search'>
          <aside className='ui-search-sidebar shops__sidebar'>
            {filtrados.length > 0 ? (
              <p className='categoria-aside'>{filtrados[0].categoria}</p>
            ) : (
              <p>No hay resultados para tu busqueda</p>
            )}
            <div className=''>
                <h2 className='tittle-search'>{busqueda}</h2>
                <p>{filtrados.length} resultados</p>
                <a href="">
                    <span>Crear alerta de busqueda</span>
                </a>
            </div>
          </aside>
          <section className='ui-search-results ui-search-results--without-disclaimer shops__search-results'>

          <ol className='ui-search-layout ui-search-layout--stack shops__layout'>

          {filtrados.map((prod) => (
            <Link to={`/detalle/${prod.id}`}>
              <li className='ui-search-layout__item shops__layout-item'>
                <div className='ui-search-result__wrapper shops__result-wrapper'>
                  <div className='andes-card andes-card--flat andes-card--default ui-search-result shops__cardStyles ui-search-result--core andes-card--padding-default'>
                    <div className='ui-search-result__image shops__picturesStyles'>
                      <a href="" className='ui-search-link'>
                        <div className='carousel-container arrow-visible'>
                          <div className='slick-initialized slick-slider'>
                            <div className='slick-list'>
                              <div className='slick-track' style={{opacity:"1", transform:"translate3d(0px 0px 0px)", maxWidth: "100%"}}>
                                  <img src={prod.img} alt="" className='ui-search-result-image__element shops__image-element'/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='ui-search-result__content-wrapper shops__result-content-wrapper'>
                      <div className='ui-search-item__group ui-search-item__group--title shops__items-group'>
                        <span className='ui-search-item__brand-discoverability ui-search-item__group__element shops__items-group-details'></span>
                        <a href="" className='ui-search-item__group__element shops__items-group-details ui-search-link'>
                          <h2 className='ui-search-item__title shops__item-title'>{prod.nombre}</h2>
                        </a>
                        <a href="" className='ui-search-official-store-item__link ui-search-link'>
                          <p className='ui-search-official-store-label ui-search-item__group__element shops__items-group-details ui-search-color--GRAY'>Vendido por MercadoClon</p>
                        </a>
                      </div>
                      <div className='ui-search-result__content-columns shops__content-columns'>
                        <div className='ui-search-result__content-column ui-search-result__content-column--left shops__content-columns-left'>
                          <div className='ui-search-item__group ui-search-item__group--price shops__items-group'>
                            <div className='ui-search-item__group__element ui-search-price__part-without-link shops__items-group-details'>
                              <div className='ui-search-price ui-search-price--size-medium shops__price'>
                                <div className='ui-search-price__second-line shops__price-second-line'>
                                  <span className='price-tag ui-search-price__part shops__price-part'>
                                    <span className='price-tag-text-sr-only'>{prod.precio} pesos</span>
                                    <span className='price-tag-amount'>
                                      <span className='price-tag-symbol'>$</span>
                                      <span className='price-tag-fraction'>{prod.precio}</span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='ui-search-item__group ui-search-item__group--shipping ui-search-item__group--promise shops__items-group'>
                            <div className='ui-search-item__group__element ui-search-item__group__element--shipping shops__items-group-details'>
                              <p className='ui-search-item__promise ui-search-item__promise--next_day'>
                                <span className='ui-search-item__promise__text ui-search-item__promise__text--last'>Llega gratis mañana</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='ui-search-result__bookmark'></div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
          </ol>
          </section>
        </div>
      )}
    </div>
    </div>
    
    </Link>
  );
}

export default SearchList;