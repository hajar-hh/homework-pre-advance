import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

function SideBar({ onAddTask }) {
  const [show, setShow] = useState(false); 
  const [directories, setDirectories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDirectory, setNewDirectory] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleAddDirectory = () => {
    if (newDirectory.trim() && !directories.includes(newDirectory)) {
      setDirectories((prevDirectories) => [...prevDirectories, newDirectory]);
      setNewDirectory(""); 
      setIsModalOpen(false); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/login"); 
  };

  const isActiveRoute = (path) => location.pathname === path;

  const activeStyle = {
    backgroundColor: "#f2f2f2", 
    fontWeight: "bold",        
    color: "red",              
    padding: "5px",            
    borderRadius: "5px",       
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
  };

  return (
    <Container fluid className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: "300px" }}>
      <h4 className="text-center" style={{ color: "#7b4ba3" }}>To-Do List</h4>

      <Button
        variant="primary"
        className="custom-button my-3 w-100"
        style={{ backgroundColor: "#9b72c7", borderColor: "#9b72c7" }}
        onClick={() => onAddTask(directories)} 
      >
        Add New Task
      </Button>

      <h6
        className="p-1"
        style={isActiveRoute("/") ? activeStyle : { ...linkStyle, padding: "5px" }}
      >
        <Link to="/" style={isActiveRoute("/") ? activeStyle : linkStyle}>
          All tasks
        </Link>
      </h6>
      <h6 style={isActiveRoute("/important") ? activeStyle : { ...linkStyle, padding: "5px" }}>
        <Link
          to="/important"
          style={isActiveRoute("/important") ? activeStyle : linkStyle}
        >
          Important tasks
        </Link>
      </h6>
      <h6 style={isActiveRoute("/completed") ? activeStyle : { ...linkStyle, padding: "5px" }}>
        <Link
          to="/completed"
          style={isActiveRoute("/completed") ? activeStyle : linkStyle}
        >
          Completed tasks
        </Link>
      </h6>
      <h6 style={isActiveRoute("/uncompleted") ? activeStyle : { ...linkStyle, padding: "5px" }}>
        <Link
          to="/uncompleted"
          style={isActiveRoute("/uncompleted") ? activeStyle : linkStyle}
        >
          Uncompleted tasks
        </Link>
      </h6>

      <h6
        className="task-hover d-flex align-items-center"
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer" }}
      >
        <span className="me-2">{show ? <FaChevronDown /> : <FaChevronRight />}</span>
        Directories
      </h6>

      {show && (
        <div className="ms-3">
          {directories.map((dir, index) => (
            <h6
              key={index}
              className="task-hover"
              style={isActiveRoute(`/directory/${dir}`) ? activeStyle : { ...linkStyle, padding: "5px" }}
            >
              <Link
                to={`/directory/${dir}`}
                style={isActiveRoute(`/directory/${dir}`) ? activeStyle : linkStyle}
              >
                {dir}
              </Link>
            </h6>
          ))}
        </div>
      )}

      <Button
        variant="outline-primary"
        className="custom-button mt-3 d-flex align-items-center"
        style={{
          borderStyle: "dashed",
          fontSize: "0.8rem",
          backgroundColor: "transparent",
          width: "60px",
          marginLeft: "10px",
        }}
        onClick={() => setIsModalOpen(true)} 
      >
        <span className="me-1">+New</span>
      </Button>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Directory Name</Form.Label>
              <Form.Control
                type="text"
                value={newDirectory}
                onChange={(e) => setNewDirectory(e.target.value)}
                placeholder="Enter your directory name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleAddDirectory}
            style={{ backgroundColor: "#9b72c7", borderColor: "#9b72c7" }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="mt-auto">
        <Button
          variant="danger"
          className="w-100"
          onClick={handleLogout} 
        >
          Logout
        </Button>
      </div>
    </Container>
  );
}

export default SideBar;
