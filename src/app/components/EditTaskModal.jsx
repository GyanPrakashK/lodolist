import { useState } from 'react';
import Modal from 'react-modal';

const EditTaskModal = ({ isOpen, onClose, onEdit, initialTaskName }) => {
  const [taskName, setTaskName] = useState(initialTaskName);

  const handleEdit = () => {
    onEdit(taskName);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Edit Task</h2>
      <textarea
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default EditTaskModal;
