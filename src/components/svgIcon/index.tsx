import { defineComponent, computed } from "vue";
import style from "./index.module.scss";
export default defineComponent({
  props: {
    name: String,
    color: String,
  },
  setup(props) {
    const { name, color } = props;
    const symbolId = computed(() => `#icon-${name}`);
    // TODO css module svg 加不上样式
    return () => (
      <>
        <svg aria-hidden="true" className={style.svgIcon}>
          <use xlink:href={symbolId.value} fill={color} />
        </svg>
      </>
    );
  },
});
