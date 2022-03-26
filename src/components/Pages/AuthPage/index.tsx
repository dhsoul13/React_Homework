import React, { useEffect, useState } from 'react';
import Form from '../../Common/Form';
import Input from '../../Common/Input';
import Wrapper from '../../Common/Wrapper/Wrapper';
import style from './AuthPage.module.scss';
import Button from '../../Common/Button1';
import { cheackNameFunction, validateEmail } from '../../../helpers/function';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [cheack, setCheack] = useState(true);
  const [password, setPassword] = useState('');
  const [cheackPassword, setCheackPassword] = useState(true);
  const [count, setCount] = useState(1);
  const sumbitHandler = () => {
    const result = validateEmail(email);
    if (result) {
      setCheack(true);
    } else {
      setCheack(false);
    }
  };
  useEffect(() => {
    setCount((prev) => prev + 1);
    if (count < 25) {
      setCheackPassword(true);
    } else {
      setCheackPassword(false);
    }
  }, [password]);
  return (
    <Wrapper>
      <div className={style.wrapper}>
        <Form title="Авторизация">
          <div className={style.el}>
            <Input
              title="Email"
              id="email"
              placeholder="Введите почту"
              value={email}
              setValue={setEmail}
              classAdd={cheack ? '' : 'err'}
            />
          </div>
          <div className={style.el}>
            <Input
              title="Password"
              id="password"
              placeholder="Введите пароль"
              value={password}
              setValue={setPassword}
            />
            <div>
              <span>{cheackPassword ? '' : 'Воу воу воу'}</span>
            </div>
          </div>
          <Button title="Авторизация" onClick={sumbitHandler} />
        </Form>
      </div>
    </Wrapper>
  );
};

export default AuthPage;
