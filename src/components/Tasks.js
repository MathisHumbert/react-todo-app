import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCompleted,
  toggleAmount,
  toggleShow,
  removeTask,
} from '../redux/actions';
import styled from 'styled-components';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

const Tasks = () => {
  const { show_tasks, tasks_view, tasks, amount } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(toggleAmount());
    dispatch(toggleShow(tasks_view));
  }, [tasks]);

  return (
    <Wrapper>
      {show_tasks.map((task) => {
        const { id, value, completed } = task;
        return (
          <article key={id}>
            <div className="container">
              <button
                className={
                  completed ? `circle-button completed` : `circle-button`
                }
                onClick={() => {
                  dispatch(toggleCompleted(id));
                }}
              >
                {completed && <img src={check} alt="check-btn" />}
              </button>
              <p className={completed ? 'completed' : null}>{value}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeTask(id))}
            >
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

    /* &:last-child {
      border-bottom: none;
    } */
  }

  h1 {
    color: var(--secondary-color);
    text-align: center;
    padding-top: 1rem;
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

  .circle-button {
    img {
      width: 7px;
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
