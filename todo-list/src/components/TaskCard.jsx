import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegCalendarAlt, FaRegStar, FaTrash, FaEllipsisV } from "react-icons/fa";

function TaskCard({
  title,
  description,
  date,
  isImportant,
  isCompleted,
  toggleImportant,
  toggleCompleted,
  onDelete,
  onEdit,
}) {
  return (
    <Card
      className="task-card p-3"
      style={{
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        fontSize: "0.9rem",
      }}
    >
      <Card.Body>
        <Card.Title className="mb-2" style={{ fontSize: "1.2rem" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
          {description}
        </Card.Text>
        <div
          className="d-flex align-items-center mt-3"
          style={{ fontSize: "1rem", color: "#666" }}
        >
          <FaRegCalendarAlt style={{ marginRight: "8px" }} />
          <span>{date}</span>
        </div>

        <hr style={{ borderTop: "2px dotted #666", margin: "20px 0" }} />

        <div className="d-flex align-items-center justify-content-between">
          <Button
            onClick={toggleCompleted}
            variant={isCompleted ? "success" : "warning"}
            size="sm"
            style={{
              backgroundColor: isCompleted ? "#98FB98" : "#f7eb86",
              color: "#333",
              borderColor: "transparent",
              borderRadius: "20px",
            }}
          >
            {isCompleted ? "Complete" : "Uncomplete"}
          </Button>
          <div className="icon-group d-flex align-items-center">
            <FaRegStar
              onClick={toggleImportant}
              style={{
                marginRight: "15px",
                color: isImportant ? "red" : "#666",
                cursor: "pointer",
              }}
            />
            <FaTrash
              onClick={onDelete}
              style={{ marginRight: "15px", color: "#666", cursor: "pointer" }}
            />
            <FaEllipsisV
              onClick={onEdit}
              style={{ color: "#666", cursor: "pointer" }}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
