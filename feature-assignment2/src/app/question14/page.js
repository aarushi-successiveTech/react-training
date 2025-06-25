/* create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks. */

'use client'
const { useState, useCallback } = require("react");

const TaskItem = ({task, onComplete}) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.name}
      <button
        onClick={() => onComplete(task.id)}
        style={{ marginleft: "10px" }}
      >
        {task.completed ? 'Undo' : 'complete'}
      </button>
    </li>
  );
};

const TaskList = () => {
  const [tasks, setTask] = useState([
    { id: 1, name: "groceries", completed: false },
    { id: 2, name: "assignment", completed: false },
    { id: 3, name: "assignment2", completed: false },
  ]);

  const completeTask = useCallback(
    (taskId) => {
      setTask((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTask]
  );

    return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={completeTask} />
      ))}
    </ul>
  );
};

export default TaskList; 