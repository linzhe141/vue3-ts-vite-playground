export class MinHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  swap(i1: number, i2: number) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
    // return (i - 1) >> 1;
  }
  getLeftIndex(i: number) {
    return i * 2 + 1;
  }
  getRightIndex(i: number) {
    return i * 2 + 2;
  }
  shiftUp(index: number) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    // 如果父节点大于当前，就交互位置 再递归
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index: number) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    //左子节点小于父节点，交互位置 再递归
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    //右子节点小于父节点，交互位置 再递归
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value: number) {
    this.heap.push(value);
    // 每次从尾部开始遍历，直到根节点
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    if (this.size() === 0) {
      return null;
    }
    // 将尾部的元素删除，再将尾部元素放到头部
    const last = this.heap.pop() as number;
    if (this.size() !== 0) {
      this.heap[0] = last;
      this.shiftDown(0);
    }
  }
  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const unsortedArray: number[] = [7, 3, 5, 2, 8, 4, 1, 9, 6];

const minHeap = new MinHeap();

// 将所有元素添加到最小堆中
unsortedArray.forEach((element) => minHeap.insert(element));

const sortedArray: number[] = [];

// 从最小堆中取出元素，直到堆为空，这样就得到了一个有序数组
while (minHeap.peek() !== null) {
  sortedArray.push(minHeap.peek() as number);
  minHeap.pop();
}
