import React, { useEffect, useState } from 'react';
import s from './Navbar.module.css';
import logo from '../../images/tdlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useHover } from "@uidotdev/usehooks";
import NavbarDrop from './NavbarDrop/NavbarDrop';
import { fetchTypes } from '../../http/itemAPI';

const Navbar = () => {
  const router = useNavigate();
  const [ref, hovering] = useHover();
  const [types, setTypes] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchTypes().then(data => setTypes(data));
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <div className={s.navbar}>
      {/* Desktop */}
      <div className={s.wrapper}>
        <div className={s.upNav}>
          <div className={s.leftBlockUpNav}>
            <div className={s.leftBlockNumberWrapper}>
              <span className={s.leftBlockNumber}>+7 (343) 382-35-89</span>
            </div>
            <div className={s.leftBlockDescriptionWrapper}>
              <span className={s.leftBlockDescription}>общий</span>
            </div>
            <div className={s.leftBlockMailWrapper}>
              <span className={s.leftBlockMail}>info@tdumz.ru</span>
            </div>
          </div>

          <div className={s.centerBlockUpNav}>
            <div className={s.centerBlockLogoWrapper}>
              <img className={s.centerBlockLogo} src={logo} alt="Логотип" />
            </div>
            <div className={s.centerBlockAdressWrapper}>
              <span className={s.centerBlockAdress}>
                г. Екатеринбург, ул. Антона Валека, 15, офис 503
              </span>
            </div>
          </div>

          <div className={s.rightBlockUpNav}>
            <div className={s.rightBlockPhoneWrapper}>
              <span className={s.rightBlockPhone}>+7 (343) 383-28-16</span>
            </div>
            <div className={s.rightBlockDescriptionWrapper}>
              <span className={s.rightBlockDescription}>отдел продаж</span>
            </div>
            <div className={s.rightBlockMailWrapper}>
              <span className={s.rightBlockMail}>sale@tdumz.com</span>
            </div>
          </div>
        </div>

        <div className={s.linksWrapper}>
          <Link className={s.link} to="/main">Главная</Link>
          <div className={s.dropDownWrapper} ref={ref}>
            <Link className={s.link} to="#">Продукция и услуги</Link>
            {hovering && <NavbarDrop types={types} />}
          </div>
          <Link className={s.link} to="/about">ТД УМЗ</Link>
        </div>
      </div>

      {/* Mobile */}
      <div className={s.mobileWrapper}>
        <div className={s.mobileMenu} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={s.mobileLogo}>
          <img src={logo} alt="logo" />
        </div>
        {mobileMenuOpen && (
          <div className={s.mobileLinksWrapper}>
            <Link className={s.mobileLink} to="/main" onClick={toggleMobileMenu}>Главная</Link>
            {types.rows.map((el) =>
                    <Link className={s.mobileLink} key={el.id} to={`/items/${el.id}/${el.name}`} onClick={toggleMobileMenu}>
                      {el.name}
                    </Link>
                  )}
            <Link className={s.mobileLink} to="/about" onClick={toggleMobileMenu}>ТД УМЗ</Link>

            <div className={s.mobileContacts}>
              <span className={s.contactTitle}>Контакты</span>
              <div className={s.contactBlock}>
                <span className={s.contactItem}>+7 (922) 209-83-08 (общий)</span>
                <span className={s.contactItem}>info@tdumz.ru</span>
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
    </div>
  );
};

export default Navbar;
