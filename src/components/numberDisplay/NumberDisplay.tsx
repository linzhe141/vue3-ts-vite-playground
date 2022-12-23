import { defineComponent, toRefs } from "vue";
import style from "./index.module.scss";
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numReg = /\d/;

export default defineComponent({
  name: "NumberDisplay",
  props: {
    numberString: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { numberString } = toRefs(props);
    return () => (
      <div class={style.numberDisplay}>
        {numberString.value.split("").map((digit, i) =>
          numReg.test(digit) ? (
            <div class={style.wrap} key={i}>
              {numbers.map((item, index) => (
                <div
                  key={index}
                  class={style.numberItem}
                  style={{
                    transform: `translate(-50%, -${Number(digit) * 30}px)`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div class={style.wrap} key={i}>
              <div class={style.splitItem}>{digit}</div>
            </div>
          )
        )}
      </div>
    );
  },
});
