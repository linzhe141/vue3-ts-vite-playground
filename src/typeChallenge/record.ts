type X<T> = {
  data: Record<string, T>;
};
const x: X<string | number> = {
  data: {
    "": "",
    f: 1,
  },
};
export default {};
