/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Button from '../../Common/Button1';
import Input from '../../Common/Input';
import Form from '../../Common/Form';
import Wrapper from '../../Common/Wrapper/Wrapper';
import style from './RegistrationPage.module.scss';
import { cheackNameFunction, validateEmail } from '../../../helpers/function';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [cheackEmail, setCheackEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cheack, setCheack] = useState(true);
  const [cheackname, setCheackname] = useState(true);
  const [cheackPassword, setCheackPassword] = useState('');
  const [cheack2, setCheack2] = useState(true);

  const sumbitHandler = () => {
    if (password.length > 10) {
      setCheack(true);
    } else {
      console.log('Error');
      setCheack(false);
    }
    let result = true;
    if (name[name.length - 1] === ' ') {
      const end = name.length - 1;
      const nameCorrect = name.slice(0, end);
      result = cheackNameFunction(nameCorrect);
    } else {
      cheackNameFunction(name);
      result = cheackNameFunction(name);
    }
    if (result) {
      setCheackname(true);
    } else {
      setCheackname(false);
    }
    if (validateEmail(email)) {
      setCheackEmail(true);
    } else {
      setCheackEmail(false);
    }
    if (password === cheackPassword) {
      setCheack2(true);
    } else {
      setCheack2(false);
    }
    console.log({ name, email, password });
  };

  useEffect(() => {
    if (password.length > 0) {
      if (password.length > 10) {
        setCheack(true);
      } else {
        setCheack(false);
      }
    }
    if (cheackPassword.length > 0) {
      if (password === cheackPassword) {
        setCheack2(true);
      } else {
        setCheack2(false);
      }
    }
  }, [password, cheackPassword]);

  return (
    <Wrapper>
      <div className={style.wrapper}>
        <Form title="Регистрация">
          <div className={style.el}>
            <Input
              title="ФИО"
              id="name"
              placeholder="Введите ФИО"
              value={name}
              setValue={setName}
              classAdd={cheackname ? '' : 'err'}
            />
            <div className={style.span}>
              <span>{cheackname ? '' : 'Не правильное введеное имя'}</span>
            </div>
          </div>
          <div className={style.el}>
            <Input
              title="Email"
              id="email"
              placeholder="Введите почту"
              value={email}
              setValue={setEmail}
              classAdd={cheackEmail ? '' : 'err'}
            />
            <div className={style.span}>
              <span>{cheackEmail ? '' : 'Не правильное введеное email'}</span>
            </div>
          </div>
          <div className={style.el}>
            <Input
              title="Password"
              id="password"
              placeholder="Введите пароль"
              value={password}
              setValue={setPassword}
              type="password"
              classAdd={cheack ? '' : 'err'}
            />
            <div className={style.span}>
              <span>{cheack ? '' : 'Не хватает букв'}</span>
            </div>
          </div>
          <div className={style.el}>
            <Input
              title="Проверить пароль"
              id="checkpassword"
              placeholder="Введите пароль"
              value={cheackPassword}
              setValue={setCheackPassword}
              type="password"
              classAdd={cheack2 ? '' : 'err'}
            />
            <div className={style.span}>
              <span>{cheack2 ? '' : 'Пароль не совпадает'}</span>
            </div>
          </div>
          <Button title="Регистрация" onClick={sumbitHandler} />
        </Form>
      </div>
    </Wrapper>
  );
};

export default RegistrationPage;
