import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Modall from "./components/Modal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import EditTaskModal from "./components/EditTaskModal";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProtectedRoute from "./components/Auth/ProtectedRoute"; 
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [directories, setDirectories] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("orderAdded");
  const [selectedDirectory, setSelectedDirectory] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);

    if (newTask.directory && !directories.includes(newTask.directory)) {
      setDirectories((prevDirs) => [...prevDirs, newTask.directory]);
    }
  };

  const toggleImportant = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  };

  const toggleCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
    setTaskToDelete(null);
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery)
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "earlierFirst")
      return new Date(a.date) - new Date(b.date);
    if (sortOrder === "laterFirst") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "completedFirst") return b.isCompleted - a.isCompleted;
    if (sortOrder === "uncompletedFirst") return a.isCompleted - b.isCompleted;
    return tasks;
  });

  const importantTasks = sortedTasks.filter((task) => task.isImportant);
  const completedTasks = sortedTasks.filter((task) => task.isCompleted);
  const uncompletedTasks = sortedTasks.filter((task) => !task.isCompleted);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app-container d-flex">
                <SideBar
                  directories={directories}
                  selectedDirectory={selectedDirectory}
                  setSelectedDirectory={setSelectedDirectory}
                  onAddTask={handleOpenModal}
                />
                <div
                  className="main-content-container flex-grow-1 d-flex flex-column"
                  style={{ marginLeft: "20px" }}
                >
                  <Header
                    handleOpenModal={handleOpenModal}
                    tasksCount={tasks.length}
                    importantCount={importantTasks.length}
                    completedCount={completedTasks.length}
                    uncompletedCount={uncompletedTasks.length}
                    onSearch={handleSearch}
                    onSort={handleSort}
                  />

                  <div className="mt-5">
                    <Routes>
                      {["/", "/important", "/completed", "/uncompleted"].map(
                        (path) => (
                          <Route
                            key={path}
                            path={path}
                            element={
                              <TaskList
                                tasks={
                                  path === "/"
                                    ? sortedTasks
                                    : path === "/important"
                                    ? importantTasks
                                    : path === "/completed"
                                    ? completedTasks
                                    : uncompletedTasks
                                }
                                toggleImportant={toggleImportant}
                                toggleCompleted={toggleCompleted}
                                setTaskToDelete={setTaskToDelete}
                                setTaskToEdit={setTaskToEdit}
                              />
                            }
                          />
                        )
                      )}
                    </Routes>
                  </div>
                </div>
              </div>
              <Modall
                show={isModalOpen}
                handleClose={handleCloseModal}
                handleAddTask={handleAddTask}
                directories={directories}
                selectedDirectory={selectedDirectory}
              />
              <ConfirmDeleteModal
                task={taskToDelete}
                onConfirm={handleDeleteTask}
                onCancel={() => setTaskToDelete(null)}
              />
              <EditTaskModal
                task={taskToEdit}
                onSave={handleEditTask}
                onCancel={() => setTaskToEdit(null)}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
