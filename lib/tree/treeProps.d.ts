interface TreeDataItem {
  text: string;
  value: string;
  children?: TreeDataItem[];
}
interface TreeProps {
  className?: string;
  treeData: TreeDataItem[];
  selected?: string[];
  multiple?: boolean;
  checkable?: boolean;
  expanded?: boolean;
}
interface TreeItemProps {
  treeProps: TreeProps;

  item: TreeDataItem;
  level: number;
  selected: string[];
  setSelect: React.Dispatch<React.SetStateAction<string[]>>;
  onItemChange: (i:any)=>void
}