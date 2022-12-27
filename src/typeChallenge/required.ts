type X = {
  name?: string;
  age: number;
  id: number;
};

type Required<T> = {
  // 可以理解为就是 TS 中把?可选属性减去的意思
  [P in keyof T]-?: T[P];
};
// 将类型X的属性全变成必选的
type Y = Required<X>;
export default {};
