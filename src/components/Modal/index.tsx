import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
