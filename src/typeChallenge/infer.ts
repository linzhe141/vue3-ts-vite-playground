/* 
infer 就相当于声明了一个类型变量，这个变量随后可以使用，并在真正使用泛型时进行类型推导
类似于 infer R => const x
需要注意的是infer声明的这个变量只能在extends为true分支中使用
*/
type Flatten<T> = T extends Array<infer U> ? U : T;
const x: Flatten<string> = ""; //<=> string
const y: Flatten<Array<number>> = 1; //<=> number

type Func<T> = T extends () => infer R ? R : boolean;
let func1: Func<number>; // => boolean
let func2: Func<"">; // => boolean
let func3: Func<() => Promise<number>>; // => Promise<number>
let func4: Func<() => 1> = 1;

type Obj<T> = T extends { a: infer VType; b: infer VType } ? VType : number;
let obj1: Obj<string>; // number
let obj2: Obj<true>; // number
let obj3: Obj<{ a: number; b: number }>; // number | number => number
let obj4: Obj<{ a: number; b: () => void }>; // number | () => void

export default {};
