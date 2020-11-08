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
            selected={(selected as string[])}
            setSelect={setSelect}
            treeProps={props}
            level={0}
            onItemChange={ (values: string[]) => setSelect(values) }
            key={item.value}
          />
        );
      })}
    </div>
  );
};

Tree.defaultProps = {
  selected: [],
  multiple: false,
  checkable: false,
  expanded: true,
};

export default Tree;
