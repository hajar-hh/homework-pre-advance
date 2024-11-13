import React from "react";
import { Row, Col } from "react-bootstrap";
import TaskCard from "../components/TaskCard";
import tasks from "../tasks";

function UncompletedTasks() {
  const uncompletedTasks = tasks.filter(task => !task.isCompleted);

  return (
    <Row>
      {uncompletedTasks.map((task) => (
        <Col key={task.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <TaskCard
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            isStarred={task.isStarred}
          />
        </Col>
      ))}
    </Row>
  );
}

export default UncompletedTasks;
