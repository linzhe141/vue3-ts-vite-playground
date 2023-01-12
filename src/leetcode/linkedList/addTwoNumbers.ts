import { ListNode } from "@/types/ListNode";
function init() {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  return [l1, l2];
}
const [l1, l2] = init();
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const result = new ListNode();
  let l1Index: ListNode | null = l1;
  let l2Index: ListNode | null = l2;
  while (l1Index || l2Index) {
    if (l1Index && l2Index) {
      if (l1Index.val + l2Index.val < 10) {
        result.val = l1Index.val + l2Index.val;
      }
    }
    if (l1Index?.next) l1Index = l1Index.next;
    if (l2Index?.next) l2Index = l2Index.next;
  }
  // if (l1.val + l2.val < 10) {
  //   result.val = l1.val + l2.val;
  //   if (l1.next || l2.next) {
  //   }
  // }
  return result;
};
