import React from 'react';
import styled from 'styled-components';
import { Tasks } from '.';

const List = () => {
  return (
    <Wrapper>
      <Tasks />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-color);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  width: 100%;
`;

export default List;
