function f() {
  return {
    x: 10,
    y: 20,
  };
}
// ReturnType来得到f函数的返回类型
// RunturnType是ts 封装好的获取函数返回类型工具类型
type X = ReturnType<typeof f>;

/* 
T如果是一个函数类型，那么GetReturnType<T> 就是这个函数类型的返回值类型
*/
type GetReturnType<T> = T extends () => infer Return ? Return : never;

type Num = GetReturnType<() => number>; // number
type Str = GetReturnType<() => string>; // string
type Bools = GetReturnType<() => boolean[]>; // boolean[]
export default {};
