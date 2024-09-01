import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ children, setModal }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setModal(false);
  };

  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="modal"
      onClick={closeModal}
    >
      <div className="modal__inner">{children}</div>
    </motion.div>,
    document.getElementById("popups")
  );
}
