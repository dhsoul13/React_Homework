/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import CardLi from '../CardLi';
import style from '../Card.style.module.scss';

type CardUlType = {
  data: any[];
};
const CardUl = (probs: CardUlType) => {
  const { data } = probs;
  return (
    <ul className={style.cards}>
      {data.map((el, id) => (
        <CardLi
          key={el.id}
          id={el.id}
          img={el.img}
          title={el.title}
          price={el.price}
          count={el.count}
        />
      ))}
    </ul>
  );
};

export default CardUl;
