import React from 'react'
import { Parallax } from 'react-parallax';
import s from './ParallaxAbout.module.css'
import { Link } from 'react-router-dom';

import image1 from '../../images/parallaxAbout.png'

const ParallaxAbout = (props) => {
    return (
        <div style={{ marginTop: '50px' }}>
            <Parallax bgImage={image1} strength={600}>
                <div style={{ height: 560, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={s.wrapper}>
                        <span className={s.text}>
                            ТД "УМЗ" производит запасные части и оборудование, исходя из требований ТУ и чертежно-конструкторской документации, включая приемо-сдаточные испытания
                        </span>
                    </div>
                </div>
            </Parallax>

        </div>
    )
}

export default ParallaxAbout