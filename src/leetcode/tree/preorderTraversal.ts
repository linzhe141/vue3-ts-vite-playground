// !前序遍历就是在遍历自己，先遍历左子树，后遍历右子树
// !记忆技巧 前序遍历就是根节点在最前面，所有就是中左右，如下就是1->2->3
//    1
//   /  \
//  2    3
import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return dfs(root);
}
function dfs(node: TreeNode, result: number[] = []) {
  result.push(node.val);
  if (node.left) dfs(node.left, result);
  if (node.right) dfs(node.right, result);
  return result;
}

console.log(preorderTraversal(root));
