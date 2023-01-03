// 泛型 T 中排除掉 null 和 undefined
type X = NonNullable<number | null | undefined>;
export default {};
