import React, { useState, useEffect } from "react";
import "../Tasks.css";

function Tasks(props) {
  const [tasks, setTasks] = useState(props.list);

  useEffect(() => {
    setTasks(props.list);
  }, [props.list]);

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const uncompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const defaultImageUrl =
  `${process.env.PUBLIC_URL}/pictures/all_done.png`;

  const imageToShow =
    uncompletedTasks.length > 0
      ? uncompletedTasks[0].imageUrl
      : defaultImageUrl;

  return (
    <div className="tasks-container">
      <div className="tasks-sections">
        {uncompletedTasks.length > 0 ? (
          <div className="task-section uncompleted-tasks">
            <h2>Unchecked</h2>
            <ul>
              {uncompletedTasks.map((task) => (
                <li key={task.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                    />
                    {task.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {completedTasks.length > 0 ? (
          <div className="task-section completed-tasks">
            <h2>Checked</h2>
            <ul>
              {completedTasks.map((task) => (
                <li key={task.id}>
                  <span className="checkmark">✅</span>
                  {task.text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="task-images">
        <div>
          <img src={imageToShow} alt="Task" />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
