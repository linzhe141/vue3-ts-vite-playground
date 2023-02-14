// [100] 相同的树
import { TreeNode } from "@/types/binaryTreeNode";

function init() {
  const root1 = new TreeNode(1);
  const nodel1 = new TreeNode(2);
  const noder1 = new TreeNode(3);
  root1.left = nodel1;
  root1.right = noder1;

  const root2 = new TreeNode(1);
  const nodel2 = new TreeNode(2);
  const noder2 = new TreeNode(3);
  root2.left = nodel2;
  root2.right = noder2;
  return [root1, root2];
}
const [root1, root2] = init();
const isSameTree = function (p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;
  if (p !== null && q !== null && p.val !== q.val) return false;
  if (p !== null && q !== null && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};
isSameTree(root1, root2);
