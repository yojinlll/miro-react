import React from "react";
import classNameHandler from "@lib/utils/classes";

const ch = classNameHandler("layout");

interface props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={ch("header", [className])} {...rest}>
      {children}
    </div>
  );
};

export default Header;
