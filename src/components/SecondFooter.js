import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShow } from '../redux/actions';
import styled from 'styled-components';

const SecondFooter = () => {
  const { tasks_view } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button
        type="button"
        className={tasks_view === 'all' ? 'active' : null}
        onClick={() => dispatch(toggleShow('all'))}
      >
        all
      </button>
      <button
        type="button"
        className={tasks_view === 'active' ? 'active' : null}
        onClick={() => dispatch(toggleShow('active'))}
      >
        active
      </button>
      <button
        type="button"
        className={tasks_view === 'completed' ? 'active' : null}
        onClick={() => dispatch(toggleShow('completed'))}
      >
        completed
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: var(--primary-color);
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  button {
    border: 0;
    font-size: 14px;
    font-weight: 700;
    color: var(--ternary-color);
    text-transform: capitalize;

    &:hover {
      color: var(--secondary-color);
    }

    &.active {
      color: var(--blue-color);
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    background: transparent;
    box-shadow: none;
    top: 6px;
    right: 50%;
    transform: translateX(50%);
    width: fit-content;
  }
`;

export default SecondFooter;
