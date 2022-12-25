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
      // TODO: 失效
      console.log("xx", value.length);
      return value.length > 0;
    },
  },
  setup(props, { emit }) {
    // 必须时相应式数据 子组件才能更新ui
    const { msg } = toRefs(props);
    const isError = ref(false);
    const temp = ref("");
    const keyUpHandle = (e: KeyboardEvent) => {
      isError.value = temp.value === "";
      if (isError.value) return;
      if (e.key === "Enter") {
        emit("onChangeMsg", temp.value);
        temp.value = "";
      }
    };
    const clickHandle = () => {
      isError.value = temp.value === "";
      if (isError.value) return;
      emit("onChangeMsg", temp.value);
      temp.value = "";
    };
    return () => (
      <div style={{ padding: "12px", border: "1px solid #333" }}>
        <div>子组件msg---{msg.value}</div>
        <input
          v-model={temp.value}
          onKeydown={(e) => keyUpHandle(e)}
          onInput={() => (isError.value = temp.value === "")}
          style={{
            borderColor: isError.value ? "#f00" : "#101010",
            borderRadius: "4px",
            WebkitAppearance: "none",
            MozAppearance: "none",
            outline: 0,
          }}
        />
        <button
          onClick={() => clickHandle()}
          style={{
            marginLeft: "10px",
            padding: "4px 8px",
            borderColor: "#646cff",
            outline: "none",
          }}
        >
          change msg
        </button>
      </div>
    );
  },
});
