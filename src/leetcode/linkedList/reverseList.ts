// [206] 反转链表
import { ListNode } from "@/types/ListNode";
function init() {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  return node1;
}
const head = init();
function reverseList(head: ListNode | null): ListNode | null {
  let current: ListNode | null = null;
  let result: ListNode | null = null;
  const stack = [];
  current = head;
  if (current) {
    stack.push(current.val);
    while (current.next) {
      current = current?.next;
      stack.push(current.val);
    }
    let sTail = stack.pop();
    result = new ListNode(sTail);
    current = result;
    while (stack.length) {
      sTail = stack.pop();
      current.next = new ListNode(sTail);
      current = current?.next;
    }
  }
  return result;
}
console.log(reverseList(head));
