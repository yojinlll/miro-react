import React, { Fragment, useState } from "react";
import classNameHandler from "../utils/classes";

const ch = classNameHandler("tree");

interface RecursiveArray<T> extends Array<T | RecursiveArray<T> | []> {}

function flatten(array: RecursiveArray<string>): any{
  return array.reduce<string[]>((result, current) => 
    result.concat(Array.isArray(current) ? flatten(current) : current ), [])
}

function collectChlidrenValues(item: TreeDataItem): string[] {
  return flatten(item.children ? item.children.map(i => [i.value, collectChlidrenValues(i)]) : [])
}

const treeItemStyle = {
  paddingLeft:(lv: number) => { return { paddingLeft: `${lv * 16}px` } }
}

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const {treeProps, item, level, selected, setSelect } = props
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={ch("item")}>
      <div className={ch("item-inner")} style={treeItemStyle.paddingLeft(level)}>
        <div className={ch('icon-wrap')}>
          {
            item.children &&
              <Fragment>{
                expanded
                  ? <span className={ch('icon')} onClick={()=>{ setExpanded(false) }}>-</span>
                  : <span className={ch('icon')} onClick={()=>{ setExpanded(true) }}>+</span>
              }</Fragment>
          }
        </div>
        <label className={ch("item-label")}>
          <input
            className={ch("checkbox")}
            type="checkbox"
            checked={selected.includes(item.value)}
            onChange={(e) => {
              if(treeProps.multiple){
                e.target.checked
                  ? setSelect([...selected, item.value, ...collectChlidrenValues(item)])
                  : setSelect(selected.filter((v) => v !== item.value && !collectChlidrenValues(item).includes(v)));
              }else{
                e.target.checked ? setSelect([item.value]) : setSelect([]);
              }
            }}
          />
          <span>{item.text}</span>
        </label>
      </div>
      <div className={ch('children', !expanded && 'children-collapse')}>
        {item.children?.map((childrenItem) => {
          return <TreeItem
            item={childrenItem}
            selected={selected}
            setSelect={setSelect}
            treeProps={treeProps}
            level={level + 1}
            key={childrenItem.value}
          />
        })}
      </div>
    </div>
  );
}

export default TreeItem;
