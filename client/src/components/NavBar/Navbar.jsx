import React from 'react'
import s from './Navbar.module.css'
import logo from '../../images/tdlogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useHover } from "@uidotdev/usehooks";
import NavbarDrop from './NavbarDrop/NavbarDrop';
import { fetchTypes } from '../../http/itemAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const router = useNavigate()
    const [ref, hovering] = useHover();
    const [types, setTypes] = useState()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchTypes().then(data => setTypes(data))
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const mediaQuerry = window.matchMedia("(max-width: 890px)")
    return (
        <>
            {mediaQuerry.matches ? (
                <div className={s.mobileWrapper}>
                    <div className={s.mobileMenu} onClick={toggleMobileMenu}>
                        <span className={`${s.line} ${s.line1}`}></span>
                        <span className={`${s.line} ${s.line2}`}></span>
                        <span className={`${s.line} ${s.line3}`}></span>
                    </div>
                    <div className={s.mobileLogo}>
                        <img src={logo} alt="logo" />
                    </div>
                    {mobileMenuOpen && (
                        <div className={s.mobileLinksWrapper}>
                            <Link className={s.mobileLink} to="/main" onClick={toggleMobileMenu}>Главная</Link>
                            {types && types.rows.map(type => (
                                <Link key={type.id} className={s.mobileLink} to={`/items-${type.id}`} onClick={toggleMobileMenu}>{type.name}</Link>
                            ))}
                            <Link className={s.mobileLink} to="/about" onClick={toggleMobileMenu}>ТД УМЗ</Link>
                            <div className={s.mobileContacts}>
                                <span className={s.contactTitle}>Контакты</span>
                                <div className={s.contactBlock}>
                                    <span className={s.contactItem}>+7 (922) 209-83-08 (общий)</span>
                                    <span className={s.contactItem}>info@tdumz@ru</span>
                                </div>
                                <div className={s.contactBlock}>
                                    <span className={s.contactItem}>+7 (922) 209-83-80 (отдел продаж)</span>
                                    <span className={s.contactItem}>tdumz@bk.ru</span>
                                    <span className={s.contactItem}>sale@tdumz.com</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className={s.wrapper}>
                    <div className={s.upNav}>
                        <div className={s.leftBlockUpNav}>
                            <div className={s.leftBlockNumberWrapper}>
                                <span className={s.leftBlockNumber}>+7 (922) 209-83-08</span>
                            </div>
                            <div className={s.leftBlockDescriptionWrapper}>
                                <span className={s.leftBlockDescription}>общий</span>
                            </div>
                            <div className={s.leftBlockMailWrapper}>
                                <span className={s.leftBlockMail}>info@tdumz@ru</span>
                            </div>
                        </div>
                        <div className={s.centerBlockUpNav}>
                            <div className={s.centerBlockLogoWrapper}>
                                <img className={s.centerBlockLogo} src={logo} alt="" />
                            </div>
                            <div className={s.centerBlockAdressWrapper}>
                                <span className={s.centerBlockAdress}>г. Екатеринбург, ул. Антона Валека, 15, офис 503</span>
                            </div>
                        </div>
                        <div className={s.rightBlockUpNav}>
                            <div className={s.rightBlockPhoneWrapper}>
                                <span className={s.rightBlockPhone}>+7 (922) 209-83-80</span>
                            </div>
                            <div className={s.rightBlockDescriptionWrapper}>
                                <span className={s.rightBlockDescription}>отдел продаж</span>
                            </div>
                            <div className={s.rightBlockMailWrapper}>
                                <span className={s.rightBlockMail}>tdumz@bk.ru</span>
                            </div>
                            <div className={s.rightBlockMailWrapper}>
                                <span className={s.rightBlockMail}>sale@tdumz.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.linksWrapper}>
                        <Link className={s.link} to="/main">Главная</Link>
                        <div className={s.dropDownWrapper} ref={ref}>
                            <Link className={s.link} >Продукция и услуги</Link>
                            {hovering ? (
                                <>
                                    <NavbarDrop types={types} />
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                        <Link className={s.link} to="/about">ТД УМЗ</Link>
                    </div>
                </div>
            )}

        </>
    )
}

export default Navbar