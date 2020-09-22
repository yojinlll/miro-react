import React, { SVGAttributes } from "react";
import "../svg/index.js";
import "./icon.scss";
import classNameHandler from "../utils/classes";

const ch = classNameHandler("icon");

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, name, ...rest } = props;
  return (
    <svg className={ch("icon", [className])} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
