type X = {
  name: string;
  age: number;
  id: number;
};
/**
 * type Pick<T, K extends keyof T> = {
 *  [P in K]: T[P];
 * }
 *  */
// 从X中取name和age 作为新的类型
type Y = Pick<X, "age" | "name">;
export default {};
