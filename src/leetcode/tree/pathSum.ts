// [112] 路径总和
import { TreeNode } from "@/types/binaryTreeNode";

function init() {
  const root = new TreeNode(5);
  const node1 = new TreeNode(4);
  const node2 = new TreeNode(8);
  const node3 = new TreeNode(11);
  const node4 = new TreeNode(13);
  const node5 = new TreeNode(4);
  const node6 = new TreeNode(7);
  const node7 = new TreeNode(2);
  const node8 = new TreeNode(1);
  root.left = node1;
  root.right = node2;
  node1.left = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;
  node5.right = node8;
  return root;
}
const root = init();

const hasPathSum = function (root: TreeNode, targetSum: number) {
  if (root === null) return false;
  return dfs(root, targetSum);
};
const dfs = (node: TreeNode, target: number): boolean => {
  if (node.left === null && node.right === null && target == node.val) {
    return true;
  }
  if (node.left) {
    const result = dfs(node.left, target - node.val);
    // 停止递归 当找到时直接return
    if (result) return result;
  }
  if (node.right) {
    const result = dfs(node.right, target - node.val);
    // 停止递归 当找到时直接return
    if (result) return result;
  }
  return false;
};

console.log(hasPathSum(root, 22));
