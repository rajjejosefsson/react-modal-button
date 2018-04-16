import React from 'react';
import { Modal } from 'react-plain-modal';

const TestModal = ({ isOpen, onClose }) => (
  <Modal animationDurationMS="200" isOpen={isOpen} onClose={onClose}>
    <header>
      <h3>Test Modal</h3>
    </header>
    <div className="content">
      React makes it painless to create interactive UIs. Design simple views for
      each state in your application, and React will efficiently update and
      render just the right components when your data changes.
    </div>
    <footer>
      <button onClick={onClose} className="btn">
        Close Modal
      </button>
    </footer>
  </Modal>
);

export default TestModal;
