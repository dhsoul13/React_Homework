import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './Wrapper.style.module.scss';

type wrapperProb = {
  children: React.ReactNode;
};

const Wrapper: React.FC<wrapperProb> = ({ children }) => (
  <div className={style.wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Wrapper;
