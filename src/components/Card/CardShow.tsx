/* eslint-disable object-curly-newline */
import React from 'react';
import style from './Card.style.module.scss';
import Button from '../Common/Button';

type cardType = {
  id: any;
  img: string;
  title: string;
  price: number;
  count: number;
};
const CardShow = (propbs: cardType) => {
  let cheack = false;
  const { id, img, title, price, count } = propbs;
  const [basked, setBasked] = React.useState(0);
  const addHandler = () => {
    setBasked(basked + 1);
  };
  if (count <= basked || count === 0) {
    cheack = true;
  }
  return (
    <div className={style.card} key={id}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.price}>{`Цена:${price}`}</p>
        <p className={style.count}>{basked || ''}</p>
        <Button onClick={addHandler} disable={!!cheack}>
          {!cheack ? 'Нажать' : 'Товар закончился'}
        </Button>
      </div>
    </div>
  );
};

export default CardShow;

// {
/* <div className={style.card} key={el.id}>
    <div className={style.img}>
      <img src={el.img} alt="" />
    </div>
    <div className={style.info}>
      <h2 className={style.title}>{el.title}</h2>
      <p className={style.price}>{`Цена:${el.price}`}</p>
      <p className={style.count}>{basked || ''}</p>
      <Button width={100} height={30} onClick={addHandler}>
        Нажать
      </Button>
    </div>
  </div> */
// }
