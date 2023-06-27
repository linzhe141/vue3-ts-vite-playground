// 在 TypeScript 中对象、class 对应的类型是索引类型（Index Type）
// keyof 可以接收一个索引类型，并获得索引类型 xx 中的所有索引组成的联合类型
// 而 in 则可以对联合类型完成遍历。
interface X {
  name: string;
  age: number;
}
// 等同：type personKeys = "name" | "age"
type Y = keyof X;
const y: Y = "name";
type W = keyof "";
export default {};
