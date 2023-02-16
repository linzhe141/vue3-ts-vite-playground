// [27] 移除元素
export function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = 0;
  let result = 0;
  let temp = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  console.log(nums);
  return left;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
