import React from "react";
import Aside from './aside'
import "./style/index.scss";
import classNameHandler from "@lib/utils/classes";

const ch = classNameHandler("layout");

interface props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement | Array<React.ReactNode>;
}

const Layout: React.FC<props> = (props) => {
  const { className, children, ...rest } = props;

  const childrenAsArray = props.children as Array<React.ReactElement>;
  const hasAside = Array.isArray(childrenAsArray) && childrenAsArray.some((node) => node.type === Aside);

  return (
    <div
      className={ch("layout", hasAside && "hasAside", [className])}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;