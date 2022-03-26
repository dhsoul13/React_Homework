import React from 'react';
import style from './Card.style.module.scss';
import { cardsData } from '../../helpers/CardsData';
import CardUl from './CardUl';

const CardVid = () => <CardUl data={cardsData} />;

export default CardVid;

// <div className={style.cards}>
//       {cardsData.map((el) => (
//         <CardShow id={el.id} img={el.img} title={el.title} price={el.price} count={el.count} />
//       ))}
//     </div>
