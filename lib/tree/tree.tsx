import React, { useState } from "react";
import classNameHandler from "../utils/classes";
import "./tree.scss";

const ch = classNameHandler("tree");

interface TreeDataItem {
  text: string;
  value: string;
  children?: TreeDataItem[];
}
interface TreeProps {
  className?: string;
  treeData: TreeDataItem[];
  selected: string[];
  multiple?: boolean;
}

const Tree: React.FC<TreeProps> = (props) => {
  const [selected, setSelect] = useState(props.selected);

  const renderTreeItem = (
    item: TreeDataItem,
    selected: string[],
    level = 1
  ) => {
    const labelPadddingLeft = {
      paddingLeft: `${level * 12}px`,
    };
    return (
      <div className={ch("item")} key={item.value}>
        <div className={ch("label")} style={labelPadddingLeft}>
          <input
            className={ch("checkbox")}
            type="checkbox"
            checked={selected.includes(item.value)}
            onChange={(e) => {
              console.log("change", item, e.target.checked);
              if(props.multiple){
                e.target.checked
                ? setSelect([...selected, item.value])
                : setSelect(selected.filter((v) => v !== item.value));
              }else{
                e.target.checked ? setSelect([item.value]) : setSelect([]);
              }
            }}
          />
          <span>{item.text}</span>
        </div>
        {item.children?.map((sub) => {
          return renderTreeItem(sub, selected, level + 1);
        })}
      </div>
    );
  };

  return (
    <div className={ch("tree")}>
      {props.treeData?.map((item) => {
        return renderTreeItem(item, selected);
      })}
    </div>
  );
};

Tree.defaultProps = {
  multiple: true
}

export default Tree;
