import React, { ButtonHTMLAttributes } from "react";
import classNameHandler from "../utils/classes";
import "./button.scss"

const ch = classNameHandler("button");

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button: React.FC<Props> = (props) => {
  const {className, children, ...rest} = props
  return (
  <button className={ch('button')} {...rest}>{children}</button>
  );
};

export default Button;