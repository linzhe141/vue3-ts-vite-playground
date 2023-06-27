// !中序遍历就是先遍历左子树，在遍历自己，后遍历右子树
// !记忆技巧 中序遍历就是根节点在中间，所有就是左中右，如下就是2->1->3
//    1
//   /  \
//  2    3
import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return dfs(root);
}
function dfs(node: TreeNode, result: number[] = []) {
  if (node.left) dfs(node.left, result);
  result.push(node.val);
  if (node.right) dfs(node.right, result);
  return result;
}

console.log(inorderTraversal(root));
