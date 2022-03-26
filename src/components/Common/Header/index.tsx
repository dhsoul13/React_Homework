import React from 'react';
import Logo from '../../../img/logo.png';
import style from './Header.style.module.scss';

const Header = () => (
  <div className={style.wrapper}>
    <div className={style.menu}>
      <div className={style.logo}>
        <img src={Logo} alt="" />
      </div>
      <nav className={style.nav}>
        <ul className={style.firstNav}>
          <li>
            <a href="/">Частным клиентам</a>
          </li>
          <li>
            <a href="/">Бизнесу</a>
          </li>
          <li>
            <a href="/">Самозанятым</a>
          </li>
        </ul>
        <ul className={style.firstNav}>
          <li>
            <a href="/">Оделения и банкоматы</a>
          </li>
          <li>
            <a href="/">Рубльбанк онлайн</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
