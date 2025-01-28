import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Overlay modal
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      {/* Konten modal */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Konten modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
