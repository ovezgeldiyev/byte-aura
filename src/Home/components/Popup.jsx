import React from "react";
import { closeIcon } from "../../Base/SVG";

export default function Popup({ setModal }) {
  return (
    <>
      <div className="modal__inner-circle top"></div>
      <div className="modal__inner-circle"></div>
      <div className="modal__inner-close" onClick={() => setModal(false)}>
        {closeIcon}
      </div>
      <div className="modal__inner-content">
        <div className="modal__inner-icon">
          <img src="/images/success.png" alt="" />
        </div>
        <h3>Great!</h3>
        <p>
          I hope everything goes smoothly with your form submission. If you have
          any questions or need further assistance, feel free to reach out.
        </p>
      </div>
    </>
  );
}
