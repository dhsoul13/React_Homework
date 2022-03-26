/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import Wrapper from '../../Common/Wrapper/Wrapper';
import Card from '../../Card';
import Basked from '../../Basked';
import Button from '../../Common/Button1';

const MainPage = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Wrapper>
      <div>
        <Button
          title={!visible ? 'Показать список' : 'Скрыть список'}
          onClick={handler}
          width="100px"
        />
        {visible ? <Card /> : ''}
      </div>
    </Wrapper>
  );
};
export default MainPage;
