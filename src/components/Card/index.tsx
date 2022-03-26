import React, { useState } from 'react';
import CardVid from './CardVid';
import style from './Card.style.module.scss';

const Card = () => (
  <div className={style.wrapper}>
    <CardVid />
  </div>
);

export default Card;
