/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import style from './Footer.style.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.block}>
          <ul className={style.list}>
            <li className={style.decoration}>© 2001-2020 Рубльбанк</li>
            <li>
              Генеральная лицензия на осуществление банковских операций от 11 августа 2015 года.
              Регистрационный номер - 1234.
            </li>
          </ul>
        </div>
        <div className={style.block}>
          <ul className={style.list}>
            <li>
              <a href="#/">Обратная связь</a>
            </li>
            <li>
              Россия,
              <br /> Москва, 113337, ул. Советская, д. 42
            </li>
          </ul>
        </div>
        <div className={style.block}>
          <ul className={style.list}>
            <li>
              Информация о процентных ставках по договорам банковского вклада с физическими лицами
            </li>
            <li>Информация, обязательная к размещению</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
