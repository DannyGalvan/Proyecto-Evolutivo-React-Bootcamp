//actions
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const ALL_TASKS = "ALL_TASKS";
export const COMPLETED_TASKS = "COMPLETED_TASKS";
export const PENDING_TASKS = "PENDING_TASKS";

export const TaskReducer = (state, action) => {
  let tempTask, indx;

  switch (action.type) {
    case ADD_TASK:
      tempTask = [...state.tasks];
      tempTask.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(tempTask, null, 2));
      return  {
        ...state,
        tasks: tempTask,
      };;
    case REMOVE_TASK:
      tempTask = [...state.tasks];
      indx = tempTask.indexOf(action.payload);
      tempTask.splice(indx, 1);
      localStorage.setItem("tasks", JSON.stringify(tempTask, null, 2));
      return  {
        ...state,
        tasks: tempTask,
      };;
    case COMPLETE_TASK:
      tempTask = [...state.tasks];
      indx = tempTask.indexOf(action.payload);
      tempTask[indx].completed = !tempTask[indx].completed;
      localStorage.setItem("tasks", JSON.stringify(tempTask, null, 2));
      return  {
        ...state,
        tasks: tempTask,
      };;
    case ALL_TASKS:
      return {
        ...state,
        action: ALL_TASKS,
      };
    case COMPLETED_TASKS:
      return {
        ...state,
        action: COMPLETED_TASKS,
      };
    case PENDING_TASKS:
      return {
        ...state,
        action: PENDING_TASKS,
      };
    default:
      return state;
  }
};
