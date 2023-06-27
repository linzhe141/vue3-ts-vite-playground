<script setup lang="ts">
import dayjs from "dayjs";
import { onMounted, ref, computed, reactive, effect, watchEffect } from "vue";
import SvgIcon from "./components/svgIcon/index.vue";
import {
  SeamlessScroll,
  NumberScroll,
  CarouselItem,
  Carousel,
} from "linzhe_tools";
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
// import "./leetcode/linkedList/addTwoNumbers";
// import "./leetcode/heap/minHeap";
// import "./leetcode/tree/inorderTraversal";
// import "./leetcode/tree/preorderTraversal";
// import "./leetcode/tree/postorderTraversal";
// import "./leetcode/tree/invertTree";
// import "./leetcode/tree/isBalanced";
// import "./leetcode/tree/find";
import "./leetcode/tree/minDepth";
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
const arr = reactive({ foo: [1, 2, 3] });
watchEffect(() => {
  console.log("effect----->", JSON.stringify(arr.foo));
});
(window as any).arr = arr;
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
    <!--  -->
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
  <div>{{ arr.foo }}</div>
  <div>{{ arr }}</div>
  <div style="width: 340px; height: 180px">
    <Carousel>
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: rgb(110, 46, 46);
          "
        >
          1
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: rgb(31, 97, 29);
          "
        >
          2
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: rgb(39, 176, 185);
          "
        >
          3
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: #ff0000;
          "
        >
          4
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: #cc00ff;
          "
        >
          5
        </div></CarouselItem
      >
      <CarouselItem
        ><div
          style="
            line-height: 180px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            background-color: #ff8800;
          "
        >
          6
        </div></CarouselItem
      >
    </Carousel>
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
