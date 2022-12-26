// T extends U ? X : Y
// 其实就是当上面的T为联合类型的时候，会进行拆分,一个一个进行extends
type Diff<T, U> = T extends U ? never : T; // 找出T的差集
type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; // => "b" | "d"
// 相当于
//1、 <'a', "a" | "c" | "f"> |
//2、 <'b', "a" | "c" | "f"> |
//3、 <'c', "a" | "c" | "f"> |
//4、 <'d', "a" | "c" | "f">
//5、 never | "b" | never| "d"
//6、 "b" | "d"
interface X {
  name: string;
  age: number;
}
interface Y {
  id: number;
  name: string;
  age: number;
}
type T40 = Diff<Y, X>; // => never
export default {};
