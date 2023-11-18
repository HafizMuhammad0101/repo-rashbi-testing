import React, { useState } from 'react';
import './modal.css'; // Create a separate CSS file for styling your modal

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
