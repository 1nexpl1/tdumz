import React from 'react'
import { Parallax } from 'react-parallax';
import s from './ParallaxAbout2.module.css'
import { Link } from 'react-router-dom';
import image2 from '../../images/parallax2.png'
const ParallaxAbout2 = (props) => {
    return (
        <div style={{marginTop: '50px'}}>
            <Parallax bgImage={image2} strength={600}>
                <div style={{ height: 560 }}>
                    <div className={s.wrapper}>                  
                    </div>
                    <div className={s.wrapperText}>
                        <div className={s.title}>
                        ДОСТАВКА ОБОРУДОВАНИЯ
                        </div>
                        <div className={s.text}>
                        Все импортное оборудование и запасные части к ним поставляются на условиях DDP в г. Екатеринбург и далее в согласованный пункт на территории России.
                        </div>
                        <div className={s.text}>
                        Условия поставки и оплаты определяются договором, при этом допускается как рассрочка платежа, так и поставка в несколько этапов согласованными партиями.
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default ParallaxAbout2