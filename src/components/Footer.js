import React from 'react';
import styled from 'styled-components';
import { FirstFooter, SecondFooter } from '.';

const Footer = () => {
  return (
    <Wrapper>
      <FirstFooter />
      <SecondFooter />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
`;

export default Footer;
