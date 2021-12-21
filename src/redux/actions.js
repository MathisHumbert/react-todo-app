import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TOGGLE_COMPLETED,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  TOGGLE_THEME,
} from './index';

const addTask = (value) => {
  return (dispatch) => dispatch({ type: ADD_TASK, payload: value });
};

export { addTask };
