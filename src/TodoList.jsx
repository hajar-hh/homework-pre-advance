import React, { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setTasks(data);
    };
    fetchTask();
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("plz enter a task❌");
      return;
    }

    const newItem = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask("");
    alert("aded successfully🆗");
  };

  const taskComplet = (taskId) => {
    setTasks((update) =>
      update.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((del) => del.filter((task) => task.id !== taskId));
    alert("the task was cleared🧻");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">✍🏻to do list✍🏻</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          add ⌨
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success" : ""
            }`}
          >
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={task.completed}
                onChange={() => taskComplet(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => deleteTask(task.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
