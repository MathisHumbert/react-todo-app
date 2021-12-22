import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
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

export { addTask, toggleCompleted, toggleShow, toggleAmount };
