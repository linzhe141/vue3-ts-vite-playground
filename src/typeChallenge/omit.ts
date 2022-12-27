type User = {
  id: string; // 用户id
  name: string; // 用户名
  password: string; // 密码
  createdAt: Date; // 创建时间
  updatedAt: Date; // 更新时间
};
// Omit 忽略
// 与Pick相反
type RegisterUser = Omit<User, "id" | "createdAt" | "updatedAt">;

interface UserUI extends Omit<User, "createdAt" | "updatedAt"> {
  createdAt: string;
  updatedAt: string;
}
// 利用接口继承的方式来实现覆盖已有对象类型中已知属性的类型 Date -> string
const x: UserUI = {
  id: "s",
  name: "s",
  password: "s",
  createdAt: "2020",
  updatedAt: "2020",
};
export default {};
