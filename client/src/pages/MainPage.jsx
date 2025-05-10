import React from 'react'
import MainVideoBG from '../components/MainVideoBG/MainVideoBG'
import MainInfo from '../components/MainInfo/MainInfo'
import MainPhoto from '../components/MainPhoto/MainPhoto'
import { Helmet } from 'react-helmet-async';


const MainPage = () => {
  return (
    <div className='MainWrapper'>
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
      <MainVideoBG />
      <MainInfo />
      <MainPhoto />
    </div>
  )
}

export default MainPage