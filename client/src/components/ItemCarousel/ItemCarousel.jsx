import React from 'react'
import s from './ItemCarousel.module.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemNext from './Arrows/Next/ItemNext'
import ItemPrev from './Arrows/Prev/ItemPrev'
import ItemSlide from './Slide/ItemSlide'
import Slider from 'react-slick'
const ItemCarousel = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <ItemNext />,
        prevArrow: <ItemPrev />
    };

    let info = [
        { number: '01', title: 'РЕМОНТ И МОДЕРНИЗАЦИЯ ОБОРУДОВАНИЯ', text: 'диагностика, восстановление и модернизация оборудования и спецтехники', buttonText: 'Оформить заявку на ремонт' },
        { number: '02', title: 'КАТАЛОГ И КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ', text: 'коммерческое предложение на буровое оборудование формируется на основании технического задания заказчика', buttonText: 'Запросить коммерческое предложение' },
    ]
    return (
        <div className={s.wrapperMain}>
            <Slider {...settings} className={s.wrapper}>
                {info.map((el) => (
                    <ItemSlide info={el} />
                ))}
            </Slider>
        </div>
    );
}

export default ItemCarousel