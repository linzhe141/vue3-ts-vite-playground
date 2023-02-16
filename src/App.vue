<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "./components/svgIcon/index.vue";
import Test from "./components/Test";
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
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const list = ref([
  {
    title: "Vue3.0 无缝滚动组件展示数据第1条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第2条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第3条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第4条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第5条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第6条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第7条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第8条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第9条",
    date: Date.now(),
  },
]);
// console.log(result);
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
  <Test />
  <p>=========</p>
  <vue3-seamless-scroll
    :list="list"
    class="scroll"
    hover
    :singleHeight="32"
    :step="4"
  >
    <div class="item" v-for="(item, index) in list" :key="index">
      <span>{{ item.title }}</span>
      <span>{{ item.date }}</span>
    </div>
  </vue3-seamless-scroll>
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
