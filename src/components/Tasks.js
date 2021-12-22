import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

const Tasks = () => {
  const { tasks } = useSelector((state) => state.reducer);
  console.log(tasks);

  return (
    <Wrapper>
      {tasks.map((task) => {
        const { id, value, completed } = task;
        return (
          <article key={id}>
            <div className="container">
              <button className="circle-button">{completed && check}</button>
              <p className={completed ? 'completed' : null}>{value}</p>
            </div>
            <button className="delete-btn">
              <img src={cross} alt="cross-btn" />
            </button>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11.5px 20px;
    border-bottom: 1px solid var(--circle-color);

    &:last-child {
      border-bottom: none;
    }
  }

  .container {
    display: flex;
    align-items: center;
    gap: 12px;

    p {
      font-size: 12px;
      letter-spacing: -0.17px;
      color: var(--secondary-color);

      &.completed {
        color: var(--completed-color);
        text-decoration: line-through;
      }
    }
  }

  .delete-btn {
    border: 0;
    width: fit-content;

    img {
      width: 12px;
    }
  }
`;

export default Tasks;
