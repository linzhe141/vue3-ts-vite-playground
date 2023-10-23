// 索引签名
// 作用：告诉TS实际属性比计划的更多一些。
type X = {
  name: string;
  age: number;
  [x: number]: boolean;
};
// 获取对象类型属性名的类型
// 类似js的动态属性名
type Name = X["name"];
type T = keyof X; // "age" | "name"
const t: T = "name";
type W = X[keyof X]; // string | number | boolean
// 遍历 结合对象类型定义使用
type Y = {
  [P in keyof X]: number;
};
let y: Y = {
  name: 1,
  age: 1,
  1: 1,
  2: 1,
};
// 数组
type A = {
  name: "1";
}[];
export default {};
