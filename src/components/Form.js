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

const Wrapper = styled.form``;
export default Form;
