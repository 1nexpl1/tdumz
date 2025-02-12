import React from 'react'
import s from './AboutContacts.module.css'

const AboutContacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.insideWrapper}>
                <div className={s.title}>
                КОНТАКТЫ ООО ТД "УМЗ"
                </div>
                <div className={s.subTitle}>
                Общество с ограниченной ответственностью ТД «УМЗ»
                </div>
                <div className={s.adressWrapper}>
                    <div className={s.inn}>
                    ИНН: 6686022694
                    </div>
                    <div className={s.adress}>
                    <span>Юридический и почтовый адрес:</span> 620014, Российская Федерация, Свердловская область, г. Екатеринбург, ул. Антона Валека, 15, офис 503.
                    </div>
                </div>
                <div className={s.number}>
                +7 (922) 209-83-08
                </div>
                <div className={s.subTitle}>
                общий
                </div>
                <div className={s.mail1}>
                E-mail: <span>info@tdumz.com</span>
                </div>
                <div className={s.line}/>
                <div className={s.contactsWrapper}>
                    <div className={s.contactWrapper1}>
                        <div className={s.number}>+7 (922) 105-05-85</div>
                        <div className={s.subTitle}>отдел продаж</div>
                        <div className={s.mail}>E-mail: <span>tdumz@bk.ru</span></div>
                    </div>
                    <div className={s.contactWrapper2}>
                        <div className={s.number}>+7 (922) 209-83-80</div>
                        <div className={s.subTitle}>специалист отдела продаж</div>
                        <div className={s.mail}>Email: <span>sale@tdumz.com</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContacts