import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <Container
      fluid
      className="d-flex flex-column vh-100 p-3 bg-light "
      style={{ width: "300px" }}
    >
      <h4 className="text-center" style={{ color: "#7b4ba3" }}>
        To-Do List
      </h4>

      <Button
        variant="primary"
        className="custom-button my-3 w-100"
        style={{ backgroundColor: "#9b72c7", borderColor: "#9b72c7" }}
      >
        Add New Task
      </Button>

      <h6
        className="p-1"
        style={{
          backgroundColor: "#f2f2f2",
          color: "red",
          width: "100%",
        }}
      >
        All tasks
      </h6>

      <h6 className="task-hover">Important tasks</h6>
      <h6 className="task-hover">Completed tasks</h6>
      <h6 className="task-hover">Uncompleted tasks</h6>

      <h6
        className="task-hover d-flex align-items-center"
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer" }}
      >
        <span className="me-2">
          {show ? <FaChevronDown /> : <FaChevronRight />}
        </span>
        Directories
      </h6>
      {show && (
        <div className="ms-3">
          <h6 className="task-hover">Secondary</h6>
          <h6 className="task-hover">Main</h6>
        </div>
      )}

      <Button
        variant="outline-primary"
        className="custom-button mt-3 d-flex align-items-center "
        style={{
          borderStyle: "dashed",
          fontSize: "0.8rem",
          backgroundColor: "transparent",
          width: "60px",
          marginLeft: "10px",
        }}
      >
        <span className="me-1">+New</span>
      </Button>
    </Container>
  );
}

export default SideBar;
