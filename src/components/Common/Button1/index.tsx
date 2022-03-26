import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  width?: string | undefined;
};

const Button = ({ title, onClick, width = '100%' }: ButtonPropsType) => (
  <button className={style.wrapper} onClick={onClick} type="button" style={{ width }}>
    {title}
  </button>
);

export default Button;
