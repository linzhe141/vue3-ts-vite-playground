import { initRoot } from "./initRoot";
import { TreeNode } from "../../types/binaryTreeNode";
const root = initRoot();
function findMode(root: TreeNode) {
  if (!root) return [0];
  const res = dfs(root);
  const map = res.reduce((obj: Record<string, number>, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    return obj;
  }, {});
  const maxSort = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return maxSort
    .filter((item) => item[1] === maxSort[0][1])
    .map((item) => +item[0]);
}
function dfs(node: TreeNode, result: number[] = []) {
  result.push(node.val);
  if (node.left) dfs(node.left, result);
  if (node.right) dfs(node.right, result);
  return result;
}
console.log(findMode(root));
