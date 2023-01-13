import { ListNode } from "@/types/ListNode";
function init() {
  // const l1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(1))));
  // const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  // const l1 = new ListNode(
  //   9,
  //   new ListNode(
  //     9,
  //     new ListNode(
  //       9,
  //       new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
  //     )
  //   )
  // );
  // const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  const l1 = new ListNode(5);
  const l2 = new ListNode(5);
  return [l1, l2];
}
const [l1, l2] = init();
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let result = new ListNode();
  let head = null;
  let current = null;
  let l1Index: ListNode | null = l1;
  let l2Index: ListNode | null = l2;
  let tenFalg = false;
  while (l1Index || l2Index) {
    let resultNode: ListNode = new ListNode();
    if (l1Index && l2Index) {
      if (!tenFalg) {
        if (l1Index.val + l2Index.val < 10) {
          resultNode.val = l1Index.val + l2Index.val;
          tenFalg = false;
        } else {
          resultNode.val = (l1Index.val + l2Index.val) % 10;
          tenFalg = true;
        }
      } else {
        if (l1Index.val + l2Index.val + 1 < 10) {
          resultNode.val = l1Index.val + l2Index.val + 1;
          tenFalg = false;
        } else {
          resultNode.val = (l1Index.val + l2Index.val + 1) % 10;
          tenFalg = true;
        }
      }
    }
    if (l1Index && !l2Index) {
      if (!tenFalg) {
        if (l1Index.val < 10) {
          resultNode.val = l1Index.val;
          tenFalg = false;
        } else {
          resultNode.val = l1Index.val % 10;
          tenFalg = true;
        }
      } else {
        if (l1Index.val + 1 < 10) {
          resultNode.val = l1Index.val + 1;
          tenFalg = false;
        } else {
          resultNode.val = (l1Index.val + 1) % 10;
          tenFalg = true;
        }
      }
    }
    if (!l1Index && l2Index) {
      if (!tenFalg) {
        if (l2Index.val < 10) {
          resultNode.val = l2Index.val;
          tenFalg = false;
        } else {
          resultNode.val = l2Index.val % 10;
          tenFalg = true;
        }
      } else {
        if (l2Index.val + 1 < 10) {
          resultNode.val = l2Index.val + 1;
          tenFalg = false;
        } else {
          resultNode.val = (l2Index.val + 1) % 10;
          tenFalg = true;
        }
      }
    }
    if (l1Index?.next) l1Index = l1Index.next;
    else l1Index = null;
    if (l2Index?.next) l2Index = l2Index.next;
    else l2Index = null;
    if (head === null) {
      result = resultNode;
      head = result;
      current = head;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = resultNode;
    }
  }
  if (tenFalg && current) {
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(1);
  }
  return result;
};
console.log(addTwoNumbers(l1, l2));
