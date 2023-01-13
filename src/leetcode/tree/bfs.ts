import { TreeNode } from "@/types/binaryTreeNode";
function init() {
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
  /* 
  bfs
  queue = []
  qTop = undefined

  queue = [1]
  qTop = 1
  queue = [2,3]
  qTop = 2
  queue = [3,4,5]
  qTop = 3 
  queue = [4,5,6]
  qTop = 4
  queue = [5,6]
  qTop = 5
  queue = [6]
  qTop = 6
  queue = []
        1
       / \
      2   3
     / \   \         
    4   5   6
  */
  return root;
}
const root = init();
function bfs(root: TreeNode, result: TreeNode[] = []) {
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const qTop = queue.shift();
    if (qTop) {
      result.push(qTop);
      if (qTop.left) {
        queue.push(qTop.left);
      }
      if (qTop.right) {
        queue.push(qTop.right);
      }
    }
  }
  return result;
}

console.log(bfs(root));
