import "./Modal.css";
import ReactDOM from "react-dom";
import React from "react";
import { UI_Context } from "../../Context/UIContext";

const Back = () => {
  const { hideModal } = UI_Context();
  return <div className="Back" onClick={hideModal}></div>;
};

const Overlay = ({ children }) => {
  return <div className="Overlay">{children}</div>;
};

const Modal = ({ children }) => {
  const { modal } = UI_Context();
  return (
    <div>
      {ReactDOM.createPortal(
        <div className={`${modal ? "showModal" : "hideModal"}`}>
          <Back />
          <Overlay>{children}</Overlay>
        </div>,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;
