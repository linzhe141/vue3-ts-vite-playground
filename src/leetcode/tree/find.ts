import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function findByVal(node: TreeNode, val: number): TreeNode | null {
  if (node.val === val) {
    return node;
  }
  if (node.left) {
    const target = findByVal(node.left, val);
    if (target) return target;
  }
  if (node.right) {
    const target = findByVal(node.right, val);
    if (target) return target;
  }
  return null;
}
console.log(findByVal(root, 11));
type DataXX = {
  value: number;
  children?: DataXX[];
};
const data: DataXX[] = [
  {
    value: 1,
    children: [
      { value: 2 },
      { value: 3, children: [{ value: 4 }] },
      { value: 5 },
    ],
  },
  {
    value: 11,
    children: [
      {
        value: 12,
        children: [
          { value: 13 },
          { value: 14 },
          { value: 15, children: [{ value: 16 }] },
          { value: 17 },
        ],
      },
      { value: 18 },
    ],
  },
];
type Cbk = (item: DataXX) => boolean;
function find(data: DataXX[], cbk: Cbk): DataXX | null {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (cbk(item)) {
      return item;
    }
    if (item.children?.length) {
      const target = find(item.children, cbk);
      if (target) return target;
    }
  }
  return null;
}
console.log(
  "find----------->",
  find(data, (item) => !!item.children?.find((x) => x.value === 15))
);
