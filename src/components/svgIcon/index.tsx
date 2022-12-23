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
    return () => (
      <>
        <svg aria-hidden="true" class={style.svgIcon}>
          <use xlinkHref={symbolId.value} fill={color} />
        </svg>
      </>
    );
  },
});
