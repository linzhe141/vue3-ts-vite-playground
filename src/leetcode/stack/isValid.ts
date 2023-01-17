// [20] 有效的括号
console.log(isValid("({[]([[()]()])})"));
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = new Map<string, string>();
  map.set("{", "}");
  map.set("[", "]");
  map.set("(", ")");
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (stack.length) {
      const tail = stack[stack.length - 1];
      if (map.get(tail) === item) {
        stack.pop();
      } else {
        stack.push(item);
      }
    } else {
      stack.push(item);
    }
  }
  return stack.length === 0;
}

export default isValid;
