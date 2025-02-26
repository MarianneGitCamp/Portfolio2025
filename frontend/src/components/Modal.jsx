import React from "react";
import "../index.css";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;