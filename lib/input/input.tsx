import React, { InputHTMLAttributes } from "react";
import classNameHandler from "../utils/classes";
import "./input.scss"

const ch = classNameHandler("input");

interface Props extends InputHTMLAttributes<HTMLInputElement>{}

const Input: React.FC<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <input className={ch('input', [className])} {...rest} />
  );
};

export default Input;