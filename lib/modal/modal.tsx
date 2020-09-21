import React, { useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import classNameHandler from "../utils/classes";
import "./modal.scss";

const ch = classNameHandler("modal");

interface ModalProps {
  visible: boolean;
  title?: string | number;
  onConfirm?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
  mask?: boolean;
  maskClosable?: Boolean;
  customized?: React.ReactNode;
  style?: React.CSSProperties
  className?: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const onConfirm: React.MouseEventHandler = (e) => {
    props.onConfirm && props.onConfirm(e);
  };
  const onCancel: React.MouseEventHandler = (e) => {
    props.onCancel && props.onCancel(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    props.onCancel && props.maskClosable && props.onCancel(e);
  };

  useEffect(() => {
    props.mask && (document.body.style.overflow = props.visible ? "hidden" : "");
  }, [props.mask, props.visible]);

  const modalTemplate = (
    <Fragment>
      <header className={ch("header")}>{props.title}</header>
      <main className={ch("main")}>{props.children}</main>
      <footer className={ch("footer")}>
        <button onClick={onConfirm}>ok</button>
        <button onClick={onCancel}>cancel</button>
      </footer>
    </Fragment>
  );

  const _modal = props.visible && (
    <Fragment>
      {props.mask && <div className={ch("mask")} onClick={onClickMask} />}
      <div className={ch("modal", [props.className])} style={props.style}>{props.customized ? props.customized : modalTemplate}</div>
    </Fragment>
  );

  return ReactDOM.createPortal(_modal, document.body);
};

Modal.defaultProps = {
  mask: true,
  maskClosable: false,
};

export default Modal;
