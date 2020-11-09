import React, { Fragment, useState, useRef, useEffect } from "react";
import classNameHandler from "../utils/classes";
import { Icon } from "@lib/index";

const ch = classNameHandler("tree");
// const checkboxCh = classNameHandler("checkbox");

interface RecursiveArray<T> extends Array<T | RecursiveArray<T> | []> {}

const treeItemStyle = {
  paddingLeft:(lv: number) => { return { paddingLeft: `${lv * 16}px` } },
  expandIcon: {width: 10, paddingBottom: 1}
}

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const {treeProps, item, level } = props
  const [expanded, setExpanded] = useState(treeProps.expanded);
  const inputRef = useRef<HTMLInputElement>(null)

  const checked = treeProps.multiple
    ? treeProps.selected?.includes(item.value)
    : treeProps.selected && treeProps.selected[0] === item.value

  // 递归的 treeItem 调用
  const onItemChange = (values: string[])=>{
    const childrenValues = collectChlidrenValues(item)
    const common = intersect<string>(values, childrenValues)
    /**
     * common交集存在，表示上级 checkbox 应为 半选
     * common交集与 childrenValues 相同长度，表示上级 checkbo 应为 全选
     */
    if (common.length !== 0) {
      // if(common.length === childrenValues.length){
      //   inputRef.current?.classList.remove(checkboxCh('indeterminate'))
      //   inputRef.current?.classList.add(checkboxCh('checked'))
      // }else{
      //   inputRef.current?.classList.remove(checkboxCh('checked'))
      //   inputRef.current?.classList.add(checkboxCh('indeterminate'))
      // }

      inputRef.current!.indeterminate = common.length !== childrenValues.length
      props.onItemChange(Array.from(new Set(values.concat(item.value))))
    }else{
      // inputRef.current?.classList.remove(checkboxCh('indeterminate'))
      // inputRef.current?.classList.remove(checkboxCh('checked'))

      inputRef.current!.indeterminate = false
      props.onItemChange(values.filter((i: string) => i !== item.value))
    }
  }

  useEffect(() => {
    if(treeProps.multiple && treeProps.checkable){
      // if(treeProps.selected.includes(item.value)){
        // onItemChange([...treeProps.selected, ...collectChlidrenValues(item)])
        onItemChange(treeProps.selected)
      // }
    }
  }, [])

  return (
    <div className={ch("item")}>
      <div className={ch("item-inner")} style={treeItemStyle.paddingLeft(level)}>
        <div className={ch('icon-wrap')}>
          {
            item.children &&
              <Fragment>{
                expanded
                  ? <span className={ch('icon')} onClick={()=>{ setExpanded(false) }}>
                    <Icon name="arrow-down" style={treeItemStyle.expandIcon} />
                  </span>
                  : <span className={ch('icon')} onClick={()=>{ setExpanded(true) }}>
                    <Icon name="arrow-right" style={treeItemStyle.expandIcon} />
                  </span>
              }</Fragment>
          }
        </div>
        {
          treeProps.checkable
            ? <label className={ch("item-label")}>
              <input
                ref={inputRef}
                className={ch("checkbox")}
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  if(treeProps.multiple){
                    e.target.checked
                    ? props.onItemChange([...treeProps.selected, item.value, ...collectChlidrenValues(item)])
                      : props.onItemChange(treeProps.selected.filter((v) => v !== item.value && !collectChlidrenValues(item).includes(v)));
                  }else{
                    e.target.checked ? treeProps.onChange([item.value]) : treeProps.onChange([]);
                  }
                }}
              />
              <span>{item.text}</span>
            </label>
            : <span>{item.text}</span> 
        }
      </div>
      {
        item.children &&
        <div className={ch('children', !expanded && 'children-collapse')}>
          {
            item.children.map((childrenItem) => {
              return <TreeItem
                item={childrenItem}
                treeProps={treeProps}
                level={level + 1}
                onItemChange={onItemChange}
                key={childrenItem.value}
              />
            })
          }
        </div>
      }
    </div>
  );
}

export default TreeItem;

function flatten(array: RecursiveArray<string>): any{
  return array.reduce<string[]>((result, current) => 
    result.concat(Array.isArray(current) ? flatten(current) : current ), [])
}

function collectChlidrenValues(item: TreeDataItem): string[] {
  return flatten(item.children ? item.children.map(i => [i.value, collectChlidrenValues(i)]) : [])
}

function intersect<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) >= 0) {
      result.push(array1[i]);
    }
  }
  return result
}