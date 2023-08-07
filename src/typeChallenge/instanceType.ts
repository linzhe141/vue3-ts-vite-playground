class X {
  y: number;
  constructor(y: number) {
    this.y = y;
  }
}

const x = new X(1);

type TTT = typeof x;
type HHH = typeof X;
const h: HHH = class {
  y: number;
  constructor(y: number) {
    this.y = y;
  }
};
type ZZZ = InstanceType<HHH>;
