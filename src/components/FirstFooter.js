import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../redux/actions';
import styled from 'styled-components';

const FirstFooter = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.reducer);
  return (
    <Wrapper>
      <p>
        {amount} item{amount > 1 ? 's' : null} left
      </p>
      <button type="button" onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
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
