import React, { useState } from 'react';
import { Modal, Input, Button, Form } from 'antd';
import { LeadsTypes } from '@modules/Leads/types';

interface AddNoteModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (note: string) => void;
  record: LeadsTypes;
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ visible, onClose, onSave, record }) => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (note.trim()) {
      onSave(note);
      setNote('');
      onClose();
    }
  };

  return (
    <Modal
      title={`Add Note for Lead ${record.id}`}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Note">
          <Input.TextArea
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNoteModal;
