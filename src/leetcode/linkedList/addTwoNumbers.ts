// [2] 两数相加
import { ListNode } from "@/types/ListNode";
function init() {
  // const l1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(1))));
  // const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  // const l1 = new ListNode(5);
  // const l2 = new ListNode(5);
  return [l1, l2];
}
const [l1, l2] = init();
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode();
  let current = null;
  let l1Index: ListNode | null = l1;
  let l2Index: ListNode | null = l2;
  let tenFlag = 0;
  while (l1Index || l2Index) {
    let node: ListNode = new ListNode();
    const temp1 = l1Index ?? new ListNode();
    const temp2 = l2Index ?? new ListNode();
    const timeVal = temp1.val + temp2.val;
    if (!tenFlag) {
      if (timeVal < 10) {
        node.val = timeVal;
        tenFlag = 0;
      } else {
        node.val = timeVal % 10;
        tenFlag = 1;
      }
    } else {
      if (timeVal + 1 < 10) {
        node.val = timeVal + 1;
        tenFlag = 0;
      } else {
        node.val = (timeVal + 1) % 10;
        tenFlag = 1;
      }
    }
    if (l1Index?.next) l1Index = l1Index.next;
    else l1Index = null;
    if (l2Index?.next) l2Index = l2Index.next;
    else l2Index = null;
    if (current === null) {
      result = node;
      current = result;
    } else {
      if (current) {
        current.next = node;
        current = current.next;
      }
    }
  }
  if (tenFlag && current) {
    current.next = new ListNode(1);
  }
  return result;
}
console.log(addTwoNumbers(l1, l2));
