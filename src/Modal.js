import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
