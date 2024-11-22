import React from "react";
import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { TfiLayoutGrid2, TfiMenuAlt } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

function Header({
  handleOpenModal,
  tasksCount,
  importantCount,
  completedCount,
  uncompletedCount,
  onSearch,
  onSort,
}) {
  const date = new Date().toLocaleDateString();
  const location = useLocation();

  const routeNames = {
    "/": "All tasks",
    "/important": "Important tasks",
    "/completed": "Completed tasks",
    "/uncompleted": "Uncompleted tasks",
  };

  const currentRouteName = routeNames[location.pathname] || location.pathname;

  const routeTaskCount =
    location.pathname === "/important"
      ? importantCount
      : location.pathname === "/completed"
      ? completedCount
      : location.pathname === "/uncompleted"
      ? uncompletedCount
      : tasksCount;

  return (
    <div className="mb-4 mt-3 px-5 header-container d-flex flex-column">
      <div className="w-100 d-flex align-items-center justify-content-between">

        <InputGroup
          className="search-input"
          style={{ marginRight: "40px", width: "300px" }}
        >
          <FormControl
            placeholder="Search task"
            aria-label="Search"
            onChange={(e) => onSearch(e.target.value)}
          />
          <InputGroup.Text
            style={{ backgroundColor: "white", borderLeft: "0" }}
          >
            <FaSearch color="#888" />
          </InputGroup.Text>
        </InputGroup>

        <span className="date">{date}</span>

        <Button
          variant="primary"
          className="custom-header-button"
          style={{
            backgroundColor: "#9b72c7",
            borderColor: "#9b72c7",
            fontSize: "0.8rem",
            marginRight: "100px",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
          onClick={handleOpenModal}
        >
          Add New Task
        </Button>
      </div>

      <div className="mt-4">
        <h4 style={{ marginBottom: "20px" }}>
          {currentRouteName} ({routeTaskCount} tasks)
        </h4>
      </div>

      <div
        className="mt-3 d-flex align-items-center"
        style={{ marginLeft: "10px" }}
      >
        <TfiMenuAlt
          className="icon-hover"
          style={{ fontSize: "1.2rem", color: "#9b72c7", marginRight: "20px" }}
        />
        <TfiLayoutGrid2
          className="icon-hover"
          style={{ fontSize: "1.2rem", color: "#9b72c7", marginRight: "20px" }}
        />

        <Dropdown
          className="ms-auto"
          style={{ width: "150px", marginTop: "5px", marginRight: "100px" }}
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{
              backgroundColor: "#f5f5f5",
              color: "#333",
              border: "1px solid #ddd",
              width: "150px",
            }}
          >
            Sort by...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onSort("orderAdded")}>
              Order added
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("earlierFirst")}>
              Earlier first
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("laterFirst")}>
              Later first
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("completedFirst")}>
              Completed first
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onSort("uncompletedFirst")}>
              Uncompleted first
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
