import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditTaskModal({ task, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
      setIsImportant(task.isImportant || false);
      setIsCompleted(task.isCompleted || false);
    }
  }, [task]);

  const handleSave = () => {
    if (!title.trim()) {
      alert("Title is required.");
      return;
    }
    if (!date.trim()) {
      alert("Date is required.");
      return;
    }

    onSave({ ...task, title, description, date, isImportant, isCompleted });
  };

  return (
    <Modal show={!!task} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mt-3">
            <Form.Label>Description</Form.Label>
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
          variant="secondary"
          onClick={onCancel}
          style={{
            backgroundColor: "#e0e0e0",
            borderColor: "#e0e0e0",
            color: "#333",
          }}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={handleSave}
          style={{
            backgroundColor: "#9b72c7", 
            borderColor: "#9b72c7",
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTaskModal;
