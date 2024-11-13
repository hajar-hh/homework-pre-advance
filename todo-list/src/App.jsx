import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import tasks from './tasks';
import './App.css';

function App() {
  const importantTasks = tasks.filter(task => task.isImportant);
  const completedTasks = tasks.filter(task => task.isCompleted);
  const uncompletedTasks = tasks.filter(task => !task.isCompleted);

  return (
    <Router>
      <div className="app-container d-flex">
        <SideBar />
        <div className="main-content-container flex-grow-1 d-flex flex-column" style={{ marginLeft: "20px" }}>
          <Header />
          <div className="mt-5">
            <Routes>
              <Route path="/" element={<TaskList tasks={tasks} />} />
              <Route path="/important" element={<TaskList tasks={importantTasks} />} />
              <Route path="/completed" element={<TaskList tasks={completedTasks} />} />
              <Route path="/uncompleted" element={<TaskList tasks={uncompletedTasks} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
          <TaskCard
            title={task.title}
            description={task.description}
            date={task.date}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
