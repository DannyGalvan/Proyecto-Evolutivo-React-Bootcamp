import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetail = () => {
  const {taskId} = useParams();

  return (
    <div>
      <h1>Entraste a la tarea: {taskId}</h1>
    </div>
  )
}

export default TaskDetail
