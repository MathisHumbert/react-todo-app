import { combineReducers } from 'redux';
import uniqid from 'uniqid';
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

const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: localTasks,
  theme: true,
  tasks_view: 'all',
};

const reducer = (state = initialState, { type, payload }) => {
  if (type === ADD_TASK) {
    const task = { id: uniqid(), value: payload, completed: false };
    const tasks = [...state.tasks, task];

    localStorage.setItem('tasks', JSON.stringify(tasks));
    return { ...state, tasks };
  }
  return state;
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
