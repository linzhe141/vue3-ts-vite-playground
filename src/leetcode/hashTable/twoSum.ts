// [1] 两数之和
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(item)) {
      return [map.get(item) as number, i];
    } else {
      map.set(target - item, i);
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
