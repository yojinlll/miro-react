import Button from '@lib/button/button';
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
  confirmText?: string
  cancelText?: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const { confirmText, cancelText } = props
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
        <Button onClick={onConfirm}>{confirmText || '确认'}</Button>
        <Button onClick={onCancel}>{cancelText || '取消'}</Button>
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
  mask: false,
  maskClosable: false,
};

export default Modal;
