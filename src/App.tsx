import React from 'react';
import './assets/style/main.scss';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => (
  <div>
    {/* <MainContainer /> */}
    <AuthContainer />
    <RegistrationContainer />
  </div>
);

export default App;
