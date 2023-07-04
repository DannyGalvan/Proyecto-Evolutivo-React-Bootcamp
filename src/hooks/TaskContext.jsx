import React, { createContext, useReducer } from "react";
import {
  ADD_TASK,
  ALL_TASKS,
  COMPLETED_TASKS,
  COMPLETE_TASK,
  PENDING_TASKS,
  REMOVE_TASK,
  TaskReducer,
} from "./TaskReducer";
import { Task } from "../models/task.class";
import { LEVELS } from "../models/levels.enum";

const defaultTask1 = new Task(
    "Ejemplo1",
    "Descripcion por defecto 1",
    false,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Ejemplo2",
    "Descripcion por defecto 2",
    false,
    LEVELS.BLOCKING
  );

  const defaultTask3 = new Task(
    "Ejemplo3",
    "Descripcion por defecto 3",
    false,
    LEVELS.URGENT
  );

export const InitialTasks = {
  tasks: JSON.parse(localStorage.getItem('tasks')) ?? [defaultTask1,defaultTask2,defaultTask3],
  action: ALL_TASKS,
};

export const TaskContextProps = {
  state: InitialTasks,
  addTask: () => {},
  removeTask: () => {},
  completedTask: () => {},
  allTasks: () => {},
  completedTasks: () => {},
  pendingTasks: () => {},
  filter: [],
};

export const TaskContext = createContext(TaskContextProps);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, InitialTasks);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const removeTask = (task) => {
    dispatch({ type: REMOVE_TASK, payload: task });
  };

  const completedTask = (task) => {
    dispatch({ type: COMPLETE_TASK, payload: task });
  };

  const allTasks = () => {
    dispatch({ type: ALL_TASKS });
  };

  const completedTasks = () => {
    dispatch({ type: COMPLETED_TASKS });
  };

  const pendingTasks = () => {
    dispatch({ type: PENDING_TASKS });
  };

  // Filter Todo List
  const filterTodos = (todos, filter) => {
    switch (filter) {
      case ALL_TASKS:
        return todos;
      case COMPLETED_TASKS:
        return todos.filter((todo) => todo.completed);
      case PENDING_TASKS:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        state,
        addTask,
        removeTask,
        completedTask,
        allTasks,
        completedTasks,
        pendingTasks,
        filter: filterTodos(state.tasks, state.action),
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
