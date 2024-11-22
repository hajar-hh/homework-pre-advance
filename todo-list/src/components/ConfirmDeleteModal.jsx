import React from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmDeleteModal({ task, onConfirm, onCancel }) {
  return (
    <Modal show={!!task} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>delete task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure delete the task "{task?.title}"?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onCancel}
          style={{
            backgroundColor: "#9b72c7",
            borderColor: "#9b72c7",
          }}
        >
          No
        </Button>
        <Button
          variant="danger"
          onClick={onConfirm}
          style={{
            backgroundColor: "#9b72c7",
            borderColor: "#9b72c7",
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
