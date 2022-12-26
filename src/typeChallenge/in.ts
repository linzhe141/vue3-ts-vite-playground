interface X {
  name: string;
  age: number;
}
type Y = {
  // 等同 [k in 'name'|'age']: number;
  // in 后⾯的类型值必须是 string 或者 number 或者 symbol
  [k in keyof X]: number;
};
export default {};
