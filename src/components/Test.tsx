import { defineComponent, ref, onMounted, computed } from "vue";
import dayjs from "dayjs";
// import SvgIcon from "@/components/svgIcon/index.vue";
import SvgIcon from "@/components/svgIcon/index";
// import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay.vue";
import Child from "./Child";
export default defineComponent({
  name: "Test",
  setup() {
    const numberString = ref("990");
    const time = ref(Date.now());
    onMounted(() => {
      setInterval(() => {
        numberString.value = Number(numberString.value) + 1 + "";
        time.value = Date.now();
      }, 1000);
    });
    const timeStr = computed(() => dayjs(time.value).format("HH:mm:ss"));

    // 测试父子组件通信
    const msg = ref("123");
    const changeMsgHandle = (value: string) => {
      msg.value = value;
    };
    return () => (
      <>
        <div>test jsx组件</div>
        <div>{numberString.value}</div>
        <div>{timeStr.value}</div>
        <SvgIcon name="vite" />
        <SvgIcon name="vue" />
        <p>=========</p>
        <div style={{ padding: "12px", border: "1px solid #333" }}>
          <div>父组件msg---{msg.value}</div>
          <Child msg={msg.value} onOnChangeMsg={changeMsgHandle} />
        </div>
        <p>=========</p>
        <NumberDisplay numberString={numberString.value} />
        <p>=========</p>
        <NumberDisplay numberString={timeStr.value} />
      </>
    );
  },
});
