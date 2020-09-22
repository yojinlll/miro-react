import React from "react";
import classNameHandler from "@lib/utils/classes";

const ch = classNameHandler("layout");

interface props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FC<props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div className={ch("aside", [className])} {...rest}>
      {children}
    </div>
  );
};

export default Aside;
