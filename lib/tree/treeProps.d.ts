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
  checkable?: boolean;
  expanded?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string[] | string>>
}
interface TreeItemProps {
  treeProps: TreeProps;

  item: TreeDataItem;
  level: number;
  onItemChange: (i:any)=>void
}