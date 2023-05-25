<script setup lang="ts">
import dayjs from "dayjs";
import { onMounted, ref, computed } from "vue";
import SvgIcon from "./components/svgIcon/index.vue";
import { SeamlessScroll } from "@linzhe_tools/seamless-scroll";
// import "./leetcode/tree/pathSum";
// import "./leetcode/tree/isSameTree";
// import "./leetcode/tree/isSymmetric";
// import "./leetcode/tree/maxDepth";
// import "./leetcode/linkedList/addTwoNumbers";
// import "./leetcode/stack/isValid";
// import "./leetcode/tree/bfs";
// import "./leetcode/linkedList/reverseList";
// import "./leetcode/hashTable/twoSum";
// import "./leetcode/twoPointers/removeDuplicates";
import "./leetcode/linkedList/addTwoNumbers";
import "./leetcode/heap/minHeap";
// console.log(result);
const num = ref(100);
const time = ref(Date.now());
const numberValue = computed(() => num.value + "");
const timeValue = computed(() => dayjs(time.value).format("HH:mm:ss"));
onMounted(() => {
  setInterval(() => {
    num.value++;
    time.value = Date.now();
  }, 1000);
});
</script>
<template>
  <div>==</div>
  <p>伪元素svg</p>
  <div class="x"></div>
  <p>=========</p>
  <SvgIcon name="export" />
  <SvgIcon name="import" />
  <SvgIcon name="logout" />
  <SvgIcon name="theme" />
  <p>=========</p>
  <NumberScroll :number-string="numberValue" />
  <p>==============</p>
  <NumberScroll :number-string="timeValue" />
  <p>=========</p>
  <div>
    <div>默认滚动</div>
    <SeamlessScroll :height="108" style="background-color: #ccc">
      <div style="line-height: 22px">11111111111111111111</div>
      <div style="line-height: 22px">22222222222222222222</div>
      <div style="line-height: 22px">33333333333333333333</div>
      <div style="line-height: 22px">44444444444444444444</div>
      <div style="line-height: 22px">55555555555555555555</div>
      <div style="line-height: 22px">66666666666666666666</div>
    </SeamlessScroll>
  </div>
  <div>
    <div>分步滚动</div>
    <SeamlessScroll
      :height="108"
      :step-height="22"
      :step-wait-timeout="1000"
      style="background-color: #ccc"
    >
      <div style="line-height: 22px">11111111111111111111</div>
      <div style="line-height: 22px">22222222222222222222</div>
      <div style="line-height: 22px">33333333333333333333</div>
      <div style="line-height: 22px">44444444444444444444</div>
      <div style="line-height: 22px">55555555555555555555</div>
      <div style="line-height: 22px">66666666666666666666</div>
    </SeamlessScroll>
  </div>
</template>
<style lang="scss" scoped>
.x:before {
  display: block;
  content: " ";
  background-image: url("../src/assets/imgs/svg/export.svg");
  background-size: 32px 32px;
  height: 32px;
  width: 32px;
}

.scroll {
  height: 270px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
