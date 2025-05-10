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
    <Helmet>
            <title>TDUMZ — Промышленные буровые установки и оборудование</title>
            <meta name="description" content="TDUMZ — торговый дом, специализирующийся на продаже промышленных буровых установок и оборудования. Поставка по всей России." />
            <meta name="keywords" content="тдумз, тдумз екб, ТДУМЗ, буровые установки, промышленное оборудование, TDUMZ, торговый дом, бурение, tdumz.com" />
    
            <meta property="og:title" content="TDUMZ — Буровые установки и оборудование" />
            <meta property="og:description" content="Продажа буровых установок, комплектующих и техники для промышленных нужд. Узнайте больше на сайте TDUMZ." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tdumz.com/" />
            <meta property="og:image" content="https://tdumz.com/tdlogo.png" />
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="TDUMZ — Промышленные буровые установки" />
            <meta name="twitter:description" content="Надёжные буровые установки от ведущих производителей. TDUMZ — ваш поставщик техники." />
            <meta name="twitter:image" content="https://tdumz.com/tdlogo.png" />
          </Helmet>
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