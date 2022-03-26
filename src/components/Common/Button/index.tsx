/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
import React, { Children } from 'react';
import styled from 'styled-components';

type buttonProb = {
  children: React.ReactNode;
  disable?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ButStyle = styled('button')`
  width: 100%;
  height: 30px;
`;

const Button: React.FC<buttonProb> = (probs) => {
  const { children } = probs;
  const { disable } = probs;
  const { onClick } = probs;
  return (
    <ButStyle type="button" disabled={!!disable} onClick={onClick}>
      {children}
    </ButStyle>
  );
};
export default Button;
