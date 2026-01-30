import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carouselOfertas.css";
import ItemOfertas from "../ItemOfertas/ItemOfertas";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";
import { app } from '../../firebase/config';

export default function CarouselOfertas() {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [ofertas, setOfertas] = useState([]);
  const [prodDb, setProdDb] = useState([]);
  const [left, setLeft] = useState(false)


  useEffect(() => {
    const queryDB = getFirestore(app);
    const queryCollection = collection(queryDB, "datos");
    getDocs(queryCollection)
      .then((res) => {
        const data = res.docs.map(doc => doc.data());
        setProdDb(data);
        const homeCardIds = [101, 102, 103, 104];
        setOfertas(data.filter(product => product.descuento > 0 && !homeCardIds.includes(product.id)));
        setLoading(false);
      });
  }, []);

  function setButtonTrue() {
    setLeft(true)
  }
  function setButtonFalse() {
    setLeft(false)
  }

  const CustomButtonGroup = ({ next, previous, ...rest }) => {
    return (
      <>
        {
          left ?
            <div className="custom-button-group">
              <button className="custom-button-group__button bg-light" onClick={() => {
                previous()
                setButtonFalse()
              }}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="rgb(52, 131, 250)" />
                </svg>
              </button>
            </div>
            :
            <div className="custom-button-group rigth-button">
              <button className="custom-button-group__button bg-light" onClick={() => {
                next()
                setButtonTrue()
              }}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="rgb(52, 131, 250)" />
                </svg>
              </button>
            </div>
        }

      </>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="container-all-carousel">
        <div className="section-header">
          <h2>Ofertas</h2>
          <Link to="/ofertas">Ver mas</Link>
        </div>

        {loading ? (
          <div className='container spinner'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="container-ofertas-carousel">
              <Carousel
                responsive={responsive}
                keyBoardControl={true}
                containerClass="carousel-ofertas"
                customButtonGroup={<CustomButtonGroup />}
              >
                {ofertas.map(oferta => (
                  <ItemOfertas oferta={oferta} />
                ))}
              </Carousel>
            </div>
          </>
        )}
      </div>
    </>
  );
}
