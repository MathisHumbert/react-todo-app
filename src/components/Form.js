import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../redux/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTask(value));
      setValue('');
    }
  };

  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
      <button className="circle-button"></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  height: 48px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px 20px;
  border-radius: var(--radius);
  margin-bottom: 1rem;

  input {
    width: 100%;
    height: 100%;
    border: 0;
    color: var(--input-color);

    &::placeholder {
      color: var(--ternary-color);
      font-size: 12px;
    }

    &:focus {
      outline: none;
    }
  }
`;
export default Form;
