import React,{useState} from 'react'
import Cart from '../cartWidget/Cart'
import {NavLink, useNavigate} from "react-router-dom"
import "./navbar.css"
import { categorias } from '../helpers/getFetch.js';

const Navbar = () => {    
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()


    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/search/${searchTerm}`);
      }

    const handleChange = (event) => {
        setSearchTerm(event.target.value.trim().toLowerCase());
      };
    
    function handleSearch(event) {
        event.preventDefault()
        const searchInput = document.querySelector('#input-search');
        const searchTerm = searchInput.value.trim().toLowerCase();
    }

    return (
      <>
      <div className='navs-container'>
        <nav className='nav-top-container'>
            <div className='nav-lefth-top'>
                <div className="img-container">
                    <NavLink to={"/"} className={"img-link"}>
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" className='img-logo' alt="" />
                    </NavLink>
                </div>
            </div>
            <div className="nav-center-top">
                <div className="form-search-container">
                    <form className='formSearch' onSubmit={handleSubmit}>   
                        <input placeholder='Buscar productos, marcas y más…' className='nav-search-input' id='input-search' style={{width:"100%", marginLeft:"0"}} onChange={handleChange}/>
                        <button className='nav-search-btn btn' onClick={()=> handleSearch()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>
                    </form>  
                </div>
            </div>
            <div className="nav-right-top">
                <NavLink className="navbar-brand nav-disney" to={"/"} >
                     <img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' style={{height:"40px", }}/>
                 </NavLink>
            </div>
        </nav>
        <nav className='nav-bottom-container'>
                <div className="nav-lefth-bottom">
                <button className='btn d-flex ' style={{minWidth:"fit-content"}}>
                 <div className='d-flex svgcont'>
                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="20px" height="40px" viewBox="0 0 948.000000 1280.000000"
                         preserveAspectRatio="xMidYMid meet" >
                         <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                         fill="#000000" stroke="none">
                         <path d="M4420 12789 c-943 -64 -1863 -417 -2600 -998 -989 -780 -1620 -1890
                         -1780 -3131 -59 -455 -49 -840 30 -1209 241 -1122 1084 -2707 2479 -4656 588
                         -823 1434 -1907 2054 -2633 l137 -162 88 103 c303 353 824 996 1173 1447 1947
                         2515 3117 4541 3409 5901 79 369 89 754 30 1209 -160 1242 -791 2351 -1780
                         3131 -908 717 -2075 1076 -3240 998z m501 -299 c447 -20 821 -89 1239 -229
                         922 -309 1721 -921 2264 -1736 140 -209 218 -345 312 -540 211 -441 351 -920
                         408 -1400 33 -277 38 -655 11 -845 -76 -529 -286 -1122 -659 -1870 -616 -1232
                         -1641 -2757 -2995 -4455 -292 -366 -748 -915 -760 -915 -16 0 -529 621 -877
                         1060 -1085 1372 -1995 2693 -2584 3751 -552 991 -861 1777 -955 2429 -27 190
                         -22 568 11 845 144 1206 776 2297 1756 3033 697 522 1561 832 2437 871 91 5
                         171 9 176 9 6 1 103 -3 216 -8z"/>
                         <path d="M4515 10228 c-487 -49 -964 -277 -1315 -628 -328 -328 -538 -737
                         -615 -1200 -23 -134 -31 -422 -16 -562 55 -507 277 -973 631 -1328 369 -369
                         849 -587 1388 -631 360 -30 767 49 1106 215 681 332 1134 983 1217 1744 15
                         140 7 429 -16 562 -78 463 -285 869 -610 1195 -464 467 -1114 699 -1770 633z
                         m379 -218 c373 -31 730 -167 1031 -393 102 -76 303 -278 379 -380 217 -292
                         349 -631 386 -996 59 -585 -168 -1193 -598 -1603 -758 -721 -1946 -721 -2704
                         0 -335 319 -550 762 -598 1231 -48 478 91 972 386 1368 76 102 277 304 379
                         380 294 221 654 360 1011 391 140 13 193 13 328 2z"/>
                         </g>
                         </svg>
                    </div>
                     <div className='d-flex flex-column button-ubicacion'>
                         <span style={{fontSize:"10px", marginBottom:"0"}}>Ingresa tu domicilio</span>
                     </div>
                 </button>
                </div>
                <div className="nav-center-bottom">
                <form className='formSearch' id='barra'>
                 <div className="navbar-collapse" id="navbarNavDropdown" style={{minWidth:"78%"}}>
                 <ul className="navbar-nav" >
                     <li className="nav-item dropdown">
                     <a className="nav-link-item dropdown-toggle" href="#" id="navbarDropdownMenuLink"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Categorias
                     </a>
                     <ul className="dropdown-menu menu-modal" aria-labelledby="navbarDropdownMenuLink">
                        <div className="container-menu-modal">
                        {
                            categorias.slice(0, 22).map(categoria =>{
                                return(
                                <li>
                                    <NavLink to={`/categoria/${categoria.categoria}`} className={"nav-link"} >{categoria.categoria}</NavLink>
                                </li>
                                )
                            })
                        }
                        </div>
                     </ul>
                     </li>
                     <li className="nav-item" id='ofertas'>
                     <a className="nav-link-item nav-margin" aria-current="page" href="#">Ofertas</a>
                     </li>
                     <li className="nav-item" id='historial'>
                     <a className="nav-link-item" href="#">Historial</a>
                     </li>
                     <li className="nav-item" id='supermercado'>
                     <a className="nav-link-item" href="#">Supermercado</a>
                     </li>
                     <li className="nav-item" id='moda'>
                     <a className="nav-link-item" href="#">Moda</a>
                     </li>
                     <li className="nav-item" id='vender'>
                     <a className="nav-link-item" href="#">Vender</a>
                     </li>
                     <li className="nav-item" id='ayuda'>
                     <a className="nav-link-item" href="#">Ayuda</a>
                     </li>
                 </ul>
                 </div>
                 </form>
                </div>
                <div className="nav-right-bottom">
                <div className="navbar-collapse" id="navbarNavDropdown">
                     <ul className="navbar-nav">
                         <li className="nav-link enlace-nav-link-container" id='crear-cuenta'>
                             <a className="nav-link-item" aria-current="page" href="#">Crea tu cuenta</a>
                         </li>
                         <li className="nav-link enlace-nav-link-container" id='ingresa'>
                             <a className="nav-link-item" aria-current="page" href="#">Ingresa</a>
                         </li>
                         <li className="nav-link enlace-nav-link-container" id='compras'>
                         <a className="nav-link-item" aria-current="page" href="#">Mis Compras</a>
                         </li>
                         <li className="nav-link enlace-nav-link-container">
                         <NavLink className={"navbar-brand nav-link-item"} to={"/cart"} >
                             <Cart/>
                         </NavLink>
                         </li>
                     </ul>
                     </div>
                </div>
        </nav>
      </div>
    </>

    )
  }
  
  export default Navbar