import React from "react";
import TreeItem from "./treeItem";
import classNameHandler from "../utils/classes";
import "./tree.scss";

const ch = classNameHandler("tree");

const Tree: React.FC<TreeProps> = (props) => {

  const onItemChange = (values: string[] | string) => {
    if (props.multiple) {
      props.onChange(Array.from(new Set(values)) as string[]);
    } else {
      props.onChange(values as string);
    }
  };

  return (
    <div className={ch("tree")}>
      {props.treeData?.map((item) => {
        return (
          <TreeItem
            item={item}
            treeProps={props}
            level={0}
            onItemChange={onItemChange}
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
