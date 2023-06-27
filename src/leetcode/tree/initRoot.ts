import { TreeNode } from "@/types/binaryTreeNode";
/**
 * 二叉树示例：
 *
 *      1
 *     / \
 *    2   3
 *   / \   \
 *  4   5   6
 */
export function initRoot() {
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.right = node6;

  return root;
}
