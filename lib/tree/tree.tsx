import React, { Fragment, useState } from "react";
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
    level = 0
    ) => {
    const [expanded, setExpanded] = useState(true);
    const labelPadddingLeft = {
      paddingLeft: `${level * 16}px`,
    };
    
    return (
      <div className={ch("item")} key={item.value}>
        <div className={ch("item-inner")} style={labelPadddingLeft}>
          <div className={ch('icon-wrap')}>
            {
              item.children &&
                <Fragment>{
                  expanded
                    ? <span className={ch('icon')} onClick={()=>{ setExpanded(false) }}>+</span>
                    : <span className={ch('icon')} onClick={()=>{ setExpanded(true) }}>-</span>
                }</Fragment>
            }
          </div>
          <label className={ch("item-label")}>
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
          </label>
        </div>
        <div className={ch('children', expanded && 'children-expanded')}>
          {item.children?.map((sub) => {
            return renderTreeItem(sub, selected, level + 1);
          })}
        </div>
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
