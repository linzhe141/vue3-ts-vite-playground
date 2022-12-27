function onClick(callback?: () => void) {
  callback!(); // 参数是可选入参，加了这个感叹号!之后，TS编译不报错
}
export default {};
