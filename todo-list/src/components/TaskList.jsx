import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, toggleImportant, toggleCompleted, setTaskToDelete, setTaskToEdit }) {
  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
          <TaskCard
            {...task}
            toggleImportant={() => toggleImportant(task.id)}
            toggleCompleted={() => toggleCompleted(task.id)}
            onDelete={() => setTaskToDelete(task)}
            onEdit={() => setTaskToEdit(task)}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
