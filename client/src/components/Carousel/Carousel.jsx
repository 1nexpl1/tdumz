import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './Carousel.module.css'
import Slide from './Slide/Slide';
import Next from './Arrows/Next/Next';
import Prev from './Arrows/Prev/Prev';

const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <Next />,
        prevArrow: <Prev />
    };

    let info = [
        { number: '01', title: 'ГАРАНТИЯ', text: 'ТД "УМЗ" ТД «УМЗ» предоставляет гарантию на приобретенную у нас продукцию и изготовление деталей. Согласно соблюдению технологических процессов и технических условий производства и проведению приемо-сдаточных испытаний.' },
        { number: '02', title: 'ОПЫТ', text: 'ТД "УМЗ" реализует масштабные проекты  для таких компаний, как ООО «КНГ-Кубанское УТТ» (ООО «РН-Транспорт»), ООО «Буровая компания «Евразия», ООО "ПетроИнжиниринг", ОАО «Подзембургаз» и многих других.' },
        { number: '03', title: 'МАСШТАБ', text: 'Продажа продукции по всем регионам России и в страны ближнего и дальнего зарубежья.' },
        { number: '04', title: 'АССОРТИМЕНТ', text: 'Широкий спектр услуг и большой ассортимент продукции ТД "УМЗ": \n продажа оборудования, собственное производство деталей, ремонтные работы и обслуживание' },
        { number: '05', title: 'УРОВЕНЬ', text: 'ТД "УМЗ" - это высококвалифицированные специалисты, современное производство, качественный ремонт и обслуживание оборудования и специальной техники.' }
    ]
    return (
        <div className={s.wrapperMain}>
            <Slider {...settings} className={s.wrapper}>
                {info.map((el) => (
                    <Slide info={el} />
                ))}
            </Slider>
        </div>
    );
}

export default Carousel