// [101] 对称二叉树
import { TreeNode } from "@/types/binaryTreeNode";
function init() {
  const root = new TreeNode(1);
  const node1 = new TreeNode(2);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(3);
  root.left = node1;
  root.right = node2;
  node1.left = node3;
  node2.right = node4;
  return root;
}
const root = init();
function isSymmetric(root: TreeNode): boolean {
  return dfs(root, root);
}
function dfs(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;
  if (p !== null && q !== null && p.val !== q.val) return false;
  if (p !== null && q !== null && p.val === q.val) {
    return dfs(p.left, q.right) && dfs(p.right, q.left);
  }
  return false;
}
console.log(isSymmetric(root));
