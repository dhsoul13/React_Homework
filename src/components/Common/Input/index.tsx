/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { setConstantValue } from 'typescript';
import Checkbox from '../Checkbox';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
  styles?: React.CSSProperties | undefined;
  classAdd?: string;
};

let proverka = 0;

const Input = ({
  title,
  id,
  placeholder,
  value,
  setValue,
  classAdd,
  type = 'text',
  styles,
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [hidden, setHidden] = useState(true);
  const change = () => {
    setHidden(!hidden);
  };
  if (type === 'password') {
    proverka = 1;
  } else {
    proverka = 0;
  }
  if (type === 'password' && hidden === false) {
    type = 'text';
  }
  return (
    <label className={style.wrapper} htmlFor={id}>
      <span className={style.span}>{`${title}:`}</span>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handler}
        type={type}
        className={`${style.input} ${classAdd}`}
      />
      <div className={style.checkbox}>
        {type === 'password' || proverka === 1 ? (
          <Checkbox title="Показать пароль" id={id} onChange={change} />
        ) : (
          ''
        )}
      </div>
    </label>
  );
};

export default Input;
