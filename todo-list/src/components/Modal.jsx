import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

function Modall({ show, handleClose, handleAddTask, directories = [], selectedDirectory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [directory, setDirectory] = useState(selectedDirectory); //😫😪😫
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (show) {
      setTitle("");
      setDescription("");
      setDate(new Date().toISOString().split("T")[0]);
      setDirectory(selectedDirectory); //😫😪😫
      setIsImportant(false);
      setIsCompleted(false);
      setError(false);
    }
  }, [show, selectedDirectory]);

  const handleSubmit = () => {
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
      directory,
      isImportant,
      isCompleted,
    };

    handleAddTask(newTask);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            {error}
          </Alert>
        )}
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={!!error}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mt-3">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDate" className="mt-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDirectory" className="mt-3">
            <Form.Label>Directory</Form.Label>
            <Form.Select
              value={directory}
              onChange={(e) => setDirectory(e.target.value)}
            >
              {directories.length === 0 ? (
                <option value="">No directories available</option>
              ) : (
                directories.map((dir, index) => (
                  <option key={index} value={dir}>
                    {dir}
                  </option>
                ))
              )}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="Mark as Important"
              checked={isImportant}
              onChange={(e) => setIsImportant(e.target.checked)}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Check
              type="checkbox"
              label="Mark as Completed"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          className="w-100"
          style={{
            backgroundColor: "#9b72c7",
            borderColor: "#9b72c7",
          }}
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modall;
