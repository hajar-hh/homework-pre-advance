import React from "react";
import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { TfiLayoutGrid2, TfiMenuAlt } from "react-icons/tfi";

function Header() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="mb-4 mt-3 px-5 header-container d-flex flex-column ">
      <div className="w-100 d-flex align-items-center justify-content-between ">
        <InputGroup
          className="search-input"
          style={{ marginRight: "100px", width: "300px" }}
        >
          <FormControl placeholder="Search task" aria-label="Search" />
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
            marginLeft: "100px",
          }}
        >
          Add New Task
        </Button>
      </div>

      <div className="mt-4">
        <h4 style={{ marginBottom: "20px" }}>All tasks (3 tasks)</h4>
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
          style={{ width: "120px", marginTop: "5px" }}
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{
              backgroundColor: "#f5f5f5",
              color: "#333",
              border: "1px solid #ddd",
              width: "120px",
              textAlign: "center",
            }}
          >
            Sort by...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Sort by</Dropdown.Item>
            <Dropdown.Item href="#">Order added</Dropdown.Item>
            <Dropdown.Item href="#">Earlier first</Dropdown.Item>
            <Dropdown.Item href="#">Later first</Dropdown.Item>
            <Dropdown.Item href="#">Completed first</Dropdown.Item>
            <Dropdown.Item href="#">Uncompleted first</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
