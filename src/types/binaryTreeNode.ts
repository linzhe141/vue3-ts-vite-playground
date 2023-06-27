export class TreeNode {
  constructor(val: number) {
    this.val = val;
    this.left = this.right = null;
  }
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  height?: number;
}
