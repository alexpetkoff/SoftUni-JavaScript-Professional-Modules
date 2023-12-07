import React from "react";
import "./CheckoutModal.css";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          Close
        </button>
        <p>Thank you for your order!</p>
      </div>
    </div>
  );
};

export default CheckoutModal;
