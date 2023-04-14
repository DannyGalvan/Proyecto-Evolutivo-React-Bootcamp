import React, { useEffect } from "react";
import "../../styles/Task.scss";
import { LEVELS } from "../../models/levels.enum";
import { Link } from "react-router-dom";

export const TaskComponent = ({ task, completed, deleted }) => {
  useEffect(() => {
    console.log("created task");
    return () => console.log(`task: ${task.name} is going to unmount`);
  }, [task]);

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return <span className="badge bg-info">{task.level}</span>;
      case LEVELS.URGENT:
        return <span className="badge bg-warning">{task.level}</span>;
      case LEVELS.BLOCKING:
        return <span className="badge bg-danger">{task.level}</span>;
      default:
        break;
    }
  };

  const taskIconComplete = () => {
    return task.completed ? (
      <span
        className="text-success h4 task-action"
        onClick={() => completed(task)}
      >
        <i className="bi bi-check-circle-fill text-success"></i>
      </span>
    ) : (
      <span
        className="text-danger h4 task-action"
        onClick={() => completed(task)}
      >
        <i className="bi bi-x-circle-fill"></i>
      </span>
    );
  };

  return (
    <tr
      className="fw-normal"
      style={
        task.completed ? { textDecoration: "line-through" } : { color: "red" }
      }
    >
      <th>
        <Link className="ms-2 task-action" to={task.name}>
          {task.name}
        </Link>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        <span>{taskLevelBadge()}</span>
      </td>
      <td className="align-middle ">
        <span className="d-flex justify-content-around">
          {taskIconComplete()}
          <span
            className="fw-bold text-danger h4 task-action"
            onClick={() => deleted(task)}
          >
            <i className="bi bi-trash"></i>
          </span>
        </span>
      </td>
    </tr>
  );
};
