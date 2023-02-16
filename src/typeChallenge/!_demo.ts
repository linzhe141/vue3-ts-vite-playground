function onClick(callback?: () => void) {
  // 非空断言，告诉编辑器这个一定有值
  callback!(); // 参数是可选入参，加了这个感叹号!之后，TS编译不报错
}
export default {};
