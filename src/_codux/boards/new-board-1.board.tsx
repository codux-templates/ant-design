import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Modal, Button } from 'antd';

const showModal = (type) => {
  Modal[type]({
    title: 'Title',
    content: 'Content',
    onOk() { console.log('OK'); },
    onCancel() { console.log('Cancel'); },
  });
};

export default createBoard({
  name: 'ModalBoard',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
      <Button onClick={() => showModal('confirm')}>Confirm Modal</Button>
      <Button onClick={() => showModal('info')}>Info Modal</Button>
      <Button onClick={() => showModal('success')}>Success Modal</Button>
      <Button onClick={() => showModal('error')}>Error Modal</Button>
      <Button onClick={() => showModal('warning')}>Warning Modal</Button>
    </div>
  ),
  isSnippet: true,
});
