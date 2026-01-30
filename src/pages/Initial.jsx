import React from 'react'
import AdnArea from '../components/adn-Area/AdnArea'
import Beneficios from '../components/beneficios/Beneficios'
import CardsInteres from '../components/CardsInteres/CardsInteres'
import Carousel from '../components/carousel/Carousel'
import CarouselOfertas from '../components/carouselOfertas/CarouselOfertas'
import CarouselTiendas from '../components/carouselTiendas/CarouselTiendas'
import CategoriesCarousel from '../components/CategoriesCarousel/CategoriesCarousel'
import Discovery from '../components/discovery/Discovery'
import HomeCards from '../components/HomeCards/HomeCards'
import PromotionalBanners from '../components/PromotionalBanners/PromotionalBanners'
import Subscriptions from '../components/subscriptions/Subscriptions'
import FooterContainer from '../components/FooterContainer/FooterContainer'

const Initial = () => {
  return (
    <div style={{ backgroundColor: '#ebebeb', minHeight: '100vh' }}>
      <Carousel />
      <HomeCards />
      <PromotionalBanners />
      <CarouselOfertas />
      <Beneficios />
      <Subscriptions />
      <AdnArea />
      <Discovery />
      <CarouselTiendas />
      <CardsInteres />
      <CategoriesCarousel />
      <FooterContainer />
    </div>
  )
}

export default Initial