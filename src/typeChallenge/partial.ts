type X = {
  id: number;
  name: string;
  age: number;
};
// 将X 类型的所有属性变成可选属性
type Y = Partial<X>;
export default {};
