interface Foo {
  type: "foo";
}

interface Bar {
  type: "bar";
}

interface Baz {
  type: "baz";
}

// 但是假如后来有一天改了 All 的类型：
// 然而他忘记了在 handleValue 里面加上针对 Baz 的处理逻辑
// 这个时候在 default branch 里面 val 会被收窄为 Baz，
// 导致无法赋值给 never，产生一个编译错误。
// 所以通过这个办法，可以确保 handleValue 总是穷尽 (exhaust) 了所有 All 的可能类型。
type All = Foo | Bar /*  | Baz */;

function handleValue(val: All) {
  switch (val.type) {
    case "foo":
      // 这里 val 被收窄为 Foo
      break;
    case "bar":
      // val 在这里是 Bar
      break;
    default:
      // val 在这里是 never
      const exhaustiveCheck: never = val;
      break;
  }
}
export default {};
