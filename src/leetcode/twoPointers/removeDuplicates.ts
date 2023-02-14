// [26] 删除有序数组中的重复项
export function removeDuplicates(nums: number[]): number {
  let left = 0;
  let right = 0;
  let result = 1;
  while (right <= nums.length) {
    if (nums[left] < nums[right]) {
      result++;
      nums[left + 1] = nums[right];
      left++;
    }
    right++;
  }
  return result;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3]));
