import { defineComponent, PropType, toRefs, ref } from "vue";
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
    // onChangeMsg: {
    //   type: Function as PropType<(value: string) => void>,
    // },
  },
  emits: {
    onChangeMsg: (value: string) => {
      // perform runtime validation
      // 运行时验证
      console.log("xx", value.length);
      return value.length > 0;
    },
  },
  setup(props, { emit }) {
    // 必须时相应式数据 子组件才能更新ui
    const { msg } = toRefs(props);

    const temp = ref("");
    // const
    return () => (
      <div style={{ padding: "12px", border: "1px solid #333" }}>
        <div>子组件msg---{msg.value}</div>
        <input v-model={temp.value} />
        <button onClick={() => emit("onChangeMsg", temp.value)}>
          change msg
        </button>
      </div>
    );
  },
});
