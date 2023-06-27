// !后序遍历就是先遍历左子树，在遍历右子树，最后遍历自己
// !记忆技巧 后序遍历就是根节点在最后面，所有就是左右中，如下就是2->3->1
//    1
//   /  \
//  2    3
import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return dfs(root);
}
function dfs(node: TreeNode, result: number[] = []) {
  if (node.left) dfs(node.left, result);
  if (node.right) dfs(node.right, result);
  result.push(node.val);
  return result;
}

console.log(postorderTraversal(root));
