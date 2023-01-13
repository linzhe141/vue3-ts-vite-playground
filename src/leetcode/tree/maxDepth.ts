// [104] 二叉树的最大深度
import { TreeNode } from "@/types/binaryTreeNode";

function init() {
  const root = new TreeNode(1);
  const node1 = new TreeNode(2);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(3);
  const node5 = new TreeNode(4);
  root.left = node1;
  root.right = node2;
  node1.left = node3;
  node2.right = node4;
  node4.left = node5;
  return root;
}
const root = init();
console.log(maxDepth(root));
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let a = 1;
  return dfs(root);
}
// xxx
// 求阶乘写法
function dfs(data: TreeNode | null): number {
  if (data === null) return 0;
  const left_Max = dfs(data.left) + 1;
  const right_Max = dfs(data.right) + 1;
  return left_Max > right_Max ? left_Max : right_Max;
}
