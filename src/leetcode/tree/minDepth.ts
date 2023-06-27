import { TreeNode } from "@/types/binaryTreeNode";
import { initRoot } from "./initRoot";
const root = initRoot();

function minDepth(root: TreeNode | null) {
  if (!root) return 0;
  return dfs(root).sort((a, b) => a - b)[0];
}
function dfs(node: TreeNode, height = 0, redult: number[] = []) {
  node.height = height + 1;
  if (!node.left && !node.right) {
    redult.push(node.height);
  }
  if (node.left) dfs(node.left, node.height, redult);
  if (node.left) dfs(node.left, node.height, redult);
  return redult;
}
console.log(minDepth(root));
