import React from 'react';
import styled from 'styled-components';
import { Tasks, Footer } from '.';

const List = () => {
  return (
    <Wrapper>
      <Tasks />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default List;
