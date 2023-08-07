export class LRUCache {
  cache: Record<number, number> = {};
  keys: number[] = [];
  capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
  get(key: number) {
    if (this.cache[key]) {
      // 如果存在就用更新位置
      this.remove(key);
      this.keys.push(key);
      return this.cache[key];
    }
  }
  put(key: number, value: number) {
    if (this.cache[key] !== undefined) {
      // 如果缓存存在就更新
      this.cache[key] = value;
      this.remove(key);
      this.keys.push(key);
    } else {
      // 如果缓存不存在就加入
      this.cache[key] = value;
      this.keys.push(key);
      // 如果超过了容量，则表明需要删除 最久未使用的， 也就是keys数组第一个
      if (this.keys.length > this.capacity) {
        const target = this.keys[0];
        this.remove(target);
        delete this.cache[target];
      }
    }
  }
  remove(key: number) {
    const index = this.keys.indexOf(key);
    if (index > -1) {
      this.keys.splice(index, 1);
    }
  }
}
const list = new LRUCache(4);
list.put(2, 2); // 入 2，剩余容量3
list.put(3, 3); // 入 3，剩余容量2
list.put(4, 4); // 入 4，剩余容量1
list.put(5, 5); // 入 5，已满    从头至尾         2-3-4-5
list.put(4, 4); // 入4，已存在 ——> 置队尾         2-3-5-4
list.put(1, 1); // 入1，不存在 ——> 删除队首 插入1  3-5-4-1
list.get(3);
  