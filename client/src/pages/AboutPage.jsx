import React from 'react'
import DescriptionTitle from '../components/DescriptionTitle/DescriptionTitle'
import Carousel from '../components/Carousel/Carousel'
import ParallaxAbout from '../components/ParallaxAbout/ParallaxAbout'
import AboutPoints from '../components/AboutPoints/AboutPoints'
import ParallaxAbout2 from '../components/ParallaxAbout2/ParallaxAbout2'
import CatalogAbout from '../components/CatalogAbout/CatalogAbout'
import ConsultAbout from '../components/ConsultAbout/ConsultAbout'
import AboutContacts from '../components/AboutContacts/AboutContacts'
import Footer from '../components/Footer/Footer'



const AboutPage = () => {
  return (
    <>
    <DescriptionTitle content = 'ТД “УМЗ” - компания, предлагающая поставку оборудования для добывающей промышленности, услуги по капитальному ремонту, обслуживанию и модернизации предлагаемого оборудования.'/>
    <Carousel className ='carou'/>
    <DescriptionTitle content = 'НАДЁЖНОСТЬ ПРОИЗВОДИТЕЛЯ И ПОСТАВЩИКА'/>
    <ParallaxAbout/>
    <AboutPoints />
    <ParallaxAbout2/>
    <CatalogAbout />
    <ConsultAbout />
    <AboutContacts />
    <Footer />
    </>
  )
}

export default AboutPage