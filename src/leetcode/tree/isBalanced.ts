import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  if (checkNode(root) === false) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}
function checkNode(node: TreeNode | null) {
  if (!node) return true;
  let leftHeight = 0;
  let rightHeight = 0;
  setNodeHeight(node);
  if (node.left) {
    leftHeight = dfs(node.left).sort((a, b) => b - a)[0];
  }
  if (node.right) {
    rightHeight = dfs(node.right).sort((a, b) => b - a)[0];
  }
  return Math.abs(leftHeight - rightHeight) <= 1;
}
function setNodeHeight(node: TreeNode, height = -1) {
  if (!node) return;
  node.height = height + 1;
  if (node.left) {
    setNodeHeight(node.left, node.height);
  }
  if (node.right) {
    setNodeHeight(node.right, node.height);
  }
}
function dfs(node: TreeNode, result: number[] = []) {
  result.push(node.height!);
  if (node.left) dfs(node.left, result);
  if (node.right) dfs(node.right, result);
  return result;
}
isBalanced(root);
