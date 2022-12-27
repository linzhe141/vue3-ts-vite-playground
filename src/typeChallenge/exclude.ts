// 排除 联合类型使用
type X = {
  // data: "2" | "3"
  // 排除
  data: Exclude<"1" | "2" | "3", "1">;
  /* 
  "1" -> never
  "2"-> "2"
  "3"-> "3"
  data: never | "2" | "3"
  never 是所有类型的子类型
  data: "2" | "3"
  */
};
export default {};
