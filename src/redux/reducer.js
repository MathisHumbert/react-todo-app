import { combineReducers } from 'redux';
import uniqid from 'uniqid';
import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TOGGLE_COMPLETED,
  TOGGLE_SHOW,
  TOGGLE_THEME,
} from './index';

const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: localTasks,
  show_tasks: localTasks,
  theme: true,
  tasks_view: 'all',
  active: 0,
  completed: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  if (type === ADD_TASK) {
    const task = { id: uniqid(), value: payload, completed: false };
    const tasks = [...state.tasks, task];

    localStorage.setItem('tasks', JSON.stringify(tasks));
    return { ...state, tasks, show_tasks: tasks };
  }
  if (type === TOGGLE_COMPLETED) {
    const tasks = state.tasks.map((task) => {
      if (task.id === payload) {
        task.completed = !task.completed;
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    return { ...state, tasks };
  }
  if (type === TOGGLE_SHOW) {
    let show_tasks;
    if (payload === 'all') {
      show_tasks = state.tasks;
    }
    if (payload === 'active') {
      show_tasks = state.tasks.filter((task) => task.completed === false);
    }
    if (payload === 'completed') {
      show_tasks = state.tasks.filter((task) => task.completed === true);
    }

    return { ...state, show_tasks, tasks_view: payload };
  }
  return state;
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;

// const { active, completed } = tasks.reduce(
//   (acc, curr) => {
//     if (curr.completed) {
//       completed++;
//     } else {
//       active++;
//     }
//     return acc;
//   },
//   { active: 0, completed: 0 }
// );
