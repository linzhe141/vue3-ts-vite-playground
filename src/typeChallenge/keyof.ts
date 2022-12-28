interface X {
  name: string;
  age: number;
}
// 等同：type personKeys = "name" | "age"
type Y = keyof X;
const y: Y = "name";
type W = keyof "";
export default {};
