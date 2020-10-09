import React, { useState } from "react";
import TreeItem from "./treeItem";
import classNameHandler from "../utils/classes";
import "./tree.scss";

const ch = classNameHandler("tree");

const Tree: React.FC<TreeProps> = (props) => {
  const [selected, setSelect] = useState(props.selected);

  return (
    <div className={ch("tree")}>
      {props.treeData?.map((item) => {
          return (
          <TreeItem
            item={item}
            selected={selected}
            setSelect={setSelect}
            treeProps={props}
            level={0}
            key={item.value}
          />
        );
      })}
    </div>
  );
};

Tree.defaultProps = {
  multiple: true,
};

export default Tree;
