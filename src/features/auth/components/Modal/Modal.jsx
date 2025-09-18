import React, { useRef, useEffect } from "react";

const closeButtonStyle = {
  position: "absolute",
  top: "0px",
  right: "0px",
  border: "none",
  background: "transparent",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  color: "black",
  outline: "none",
};

export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [isOpen]);

  const handleClick = (e) => {
    if (e.target === dialogRef.current) onClose(); // click outside
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className="dialog" onClick={handleClick}>
      <button style={closeButtonStyle} onClick={onClose}>
        X
      </button>
      {children}
    </dialog>
  );
}
