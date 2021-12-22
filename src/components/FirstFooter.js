import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FirstFooter = () => {
  const { amount } = useSelector((state) => state.reducer);
  return (
    <Wrapper>
      <p>
        {amount} item{amount > 1 ? 's' : null} left
      </p>
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
