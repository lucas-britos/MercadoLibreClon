import React from 'react'
import AdnArea from '../components/adn-Area/AdnArea'
import Beneficios from '../components/beneficios/Beneficios'
import CardsInteres from '../components/CardsInteres/CardsInteres'
import Carousel from '../components/carousel/Carousel'
import CarouselOfertas from '../components/carouselOfertas/CarouselOfertas'
import CarouselTiendas from '../components/carouselTiendas/CarouselTiendas'
import CategoriesCarousel from '../components/CategoriesCarousel/CategoriesCarousel'
import Discovery from '../components/discovery/Discovery'
import Footer from '../components/Footer/Footer'
import PaysContainer from '../components/paysContainer/PaysContainer'
import Subscriptions from '../components/subscriptions/Subscriptions'
import FooterContainer from '../components/FooterContainer/FooterContainer'

const Initial = () => {
  return (
    <div>
        <Carousel/>
        <PaysContainer/>
        {/*
        */}
        <CarouselOfertas/>
        <Beneficios/>
        <Subscriptions/>
        <AdnArea/>
        <Discovery/>
        <CarouselTiendas/>
        <CardsInteres/>
        <CategoriesCarousel/>
        <FooterContainer/>
    </div>
  )
}

export default Initial