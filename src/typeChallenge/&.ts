// 交叉类型
// 类型W  A 是公共属性 type属性为TEXT或者SELECT
// (TEXT | SELECT) 联合类型 (只需满足其中一个接口类型所定义的属性)
type A = { x: string; y?: number };
type TEXT = { type: "text" };
type SELECT = { type: "select"; options: { value: number; label: string }[] };
type W = A & (TEXT | SELECT);
// type W = { x: string; y?: number } & (
//   | { type: "text" }
//   | { type: "select"; options: { value: number; label: string }[] }
// );
const obj1: W = { x: "1", y: 1, type: "select", options: [] };
const obj2: W = { x: "2", y: 2, type: "text" };
// 非空断言，告诉编辑器这个一定有值
const x = obj1.y! + 1;
export default {};
