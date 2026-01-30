import { useCartContext } from "../../context/Context"
import "./cartProducts.css"
import { Link } from "react-router-dom"


const CartProducts = () => {
  
  
  const { cart, removeProduct,totalPrice } = useCartContext()
  const total = ()=> totalPrice()


  return (
    cart.length > 0 ?
    <div className="nav-main-content">
      <div className="main-container main-container__gray">
        <div className="cart-container cart-container--fixed cart-container--fixed-in">
          <ul className="bf-ui-tab-container">
            <li className="bf-ui-tab bf-ui-tab--selected">Carrito </li>
            <li className="bf-ui-tab bf-ui-tab--unselected">Guardados</li>
          </ul>
          <div className="tabpanel" role="tabpanel">
          {
            cart.map( item =>
              <>
              <section className="item-row">
                <article className="item-cart">
                  <div className="item-cart__asset">
                    <img src={item.img} alt="" className="bf-ui-image--default"/>
                  </div>
                  <div className="item-cart__info">
                    <div className="item-title">
                      <span className="bf-ui-rich-text bf-ui-rich-text--large bf-ui-rich-text--bold"> {item.nombre} </span>
                    </div>
                    <p className="item-cart__description-text">
                      <span className="bf-ui-rich-text bf-ui-rich-text--success bf-ui-rich-text--xsmall">Envío gratis</span>
                    </p>
                    <div className="item-cart__actions">
                      <div className="bf-ui-link-container bf-ui-link-container--horizontal">
                        <span onClick={() => removeProduct(item.id)} className="btn-eliminar">
                        <span>
                          <span className="bf-ui-rich-text actions-item">Eliminar</span>
                        </span>
                        </span>
                        <span>
                          <span className="bf-ui-rich-text actions-item">Más productos del vendedor</span>
                        </span>
                        <span>
                          <span className="bf-ui-rich-text actions-item">Comprar ahora</span>
                        </span>
                        <span>
                          <span className="bf-ui-rich-text actions-item">Guardar para después</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="item-price-container">
                  <div className="item-price-discount">
                    <span className="bf-ui-rich-text bf-ui-rich-text--success bf-ui-rich-text--xxsmall">-{item.descuento}%</span>
                  </div>
                  <div className="item-price-original">
                    <span className="bf-ui-rich-price bf-ui-rich-price--xsmall bf-ui-rich-price--strike">
                      <span className="priceCurrency">$</span>
                      <span className="bf-ui-price-small">{((item.precio * item.descuento) / 100) + item.precio}</span>
                    </span>
                  </div>
                  <div className="item-price">
                    <div className="item-price-current">
                      <span className="bf-ui-rich-price bf-ui-rich-price--large">
                        <span>$</span>
                        <span className="bf-ui-rich-price bf-ui-rich-price--large">
                          {item.cantidad * (item.descuento 
                            ? item.precio * (1 - item.descuento / 100) 
                            : item.precio)}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div className="bf-ui-separator"></div>
              </>
            )
          }

            <div className="bf-ui-footer-container">
              <div className="bf-ui-separator"></div>
              <div className="bf-ui-ticket-row">
                <div className="bf-ui-ticket-row__left-column">
                  <h5 className="bf-ui-ticket-row__left-column--primary-text">
                    <span className="bf-ui-rich-text bf-ui-rich-text--mid">Envío</span>
                  </h5>
                </div>
                <div className="bf-ui-ticket-row__right-column">
                  <h6 className="bf-ui-ticket-row__right-column--primary-text">
                    <span className="bf-ui-rich-text bf-ui-rich-text--success">Gratis</span>
                  </h6>
                </div>
              </div>
              <div className="bf-ui-ticket-row">
                <div className="andes-tooltip__trigger">
                  <div className="ticket-row__left-column ticket-row__left-column--empty-right">
                    <h5 className="ticket-row__left-column--primary-text">
                      <span className="bf-ui-rich-icon">
                        <span className="bf-ui-icon-container bf-ui-icon-container--regular">
                          <img src="https://http2.mlstatic.com/frontend-assets/bf-ui-library/1.146.0/assets/icons/smart-coupon.svg" className="bf-ui-icon bf-ui-icon--smart-coupon" alt="" />
                        </span>
                        <span className="bf-ui-rich-link">Ingresar código de cupón</span>
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="ticket-row__right-column">
                  <h6 className="ticket-row__right-column--primary-text">
                    <span className="bf-ui-rich-text"></span>
                  </h6>
                </div>
              </div>
              <div className="bf-ui-separator"></div>
              <div className="bf-ui-ticket-row">
                <div className="bf-ui-ticket-row__left-column">
                  <h5 className="bf-ui-ticket-row__left-column--primary-text">
                    <span className="bf-ui-rich-text bf-ui-rich-text--xxlarge">Total con envío</span>
                  </h5>
                </div>
                <div className="bf-ui-ticket-row__right-column">
                  <h6 className="bf-ui-ticket-row__right-column--primary-text">
                    <span className="bf-ui-rich-price bf-ui-rich-price--xxlarge">
                      <span>$</span>
                      <span className="bf-ui-price-small">{total()}</span>
                      <span className="bf-ui-price-small-cents">15</span>
                    </span>
                  </h6>
                </div>
              </div>
              <div className="bf-ui-separator"></div>
              <Link to={"/finalizar-compra"} >
                <button className="andes-button bf-ui-button andes-button--large andes-button--loud">
                  <span className="andes-button__content">
                    <span className="andes-button__text">Continuar compra</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <div className="nav-main-content">
      <div className="main-container main-container__gray">
        <div className="cart-container">
          <ul className="bf-ui-tab-container">
            <li className="bf-ui-tab bf-ui-tab--unselected">
              <span className="bf-ui-rich-text">Carrito(0)</span>
            </li>
            <li className="bf-ui-tab bf-ui-tab--selected">
              <span className="bf-ui-rich-text">Guardados(0)</span>
            </li>
          </ul>
          <div role="tabpanel">
            <div className="empty-tab-content">
              <h2 className="bf-ui-card-title bf-ui-card-title--small">
                <span className="bf-ui-rich-text">Tu carrito está vacío</span>
              </h2>
              <div className="bf-ui-card-description">
                <p className="bf-ui-card-description-text">
                  <span className="bf-ui-rich-text">¿No sabés qué comprar? ¡Miles de productos te esperan!</span>
                </p>
              </div>
              <button className="andes-button bf-ui-button andes-button--large andes-button--loud">
                <span className="andes-button__content">
                  <span className="andes-button__text">Descubrir ofertas</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}


export default CartProducts