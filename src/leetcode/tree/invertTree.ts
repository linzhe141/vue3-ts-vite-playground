import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function invertTree(root: TreeNode | null) {
  if (!root) return null;
  const newRoot = { val: root.val, left: null, right: null };
  return dfs(root, newRoot);
}
function dfs(node: TreeNode, cloneNode: TreeNode) {
  if (node.right) {
    cloneNode.left = { val: node.right.val, left: null, right: null };
    dfs(node.right, cloneNode.left);
  }
  if (node.left) {
    cloneNode.right = { val: node.left.val, left: null, right: null };
    dfs(node.left, cloneNode.right);
  }
  return cloneNode;
}
console.log(invertTree(root));
