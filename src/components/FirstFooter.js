import React from 'react';
import styled from 'styled-components';

const FirstFooter = () => {
  return (
    <Wrapper>
      <p>items left</p>
      <button type="button">Clear Completed</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
  padding: 16px 20px 20px 20px;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  box-shadow: var(--shadow);

  button,
  p {
    border: 0;
    font-size: 12px;
    color: var(--ternary-color);
  }
`;
export default FirstFooter;
