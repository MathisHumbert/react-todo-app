import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED,
  TOGGLE_SHOW,
  TOGGLE_THEME,
  TOGGLE_AMOUNT,
} from './index';

const addTask = (value) => {
  return (dispatch) => dispatch({ type: ADD_TASK, payload: value });
};

const toggleCompleted = (id) => {
  return (dispatch) => dispatch({ type: TOGGLE_COMPLETED, payload: id });
};

const toggleShow = (type) => {
  return (dispatch) => dispatch({ type: TOGGLE_SHOW, payload: type });
};

const toggleAmount = () => {
  return (dispatch) => dispatch({ type: TOGGLE_AMOUNT });
};

const removeTask = (id) => {
  return (dispatch) => dispatch({ type: REMOVE_TASK, payload: id });
};

const clearCompleted = () => {
  return (dispatch) => dispatch({ type: CLEAR_COMPLETED });
};

const toggleTheme = () => {
  return (dispatch) => dispatch({ type: TOGGLE_THEME });
};

export {
  addTask,
  toggleCompleted,
  toggleShow,
  toggleAmount,
  removeTask,
  clearCompleted,
  toggleTheme,
};
