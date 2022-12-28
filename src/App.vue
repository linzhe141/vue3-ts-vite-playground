<script setup lang="ts">
import SvgIcon from "./components/svgIcon/index.vue";
import Test from "./components/Test";
import { result } from "./tree/pathSum";
console.log(result);
</script>
<template>
  <p>伪元素svg</p>
  <div class="x"></div>
  <p>=========</p>
  <SvgIcon name="export" />
  <SvgIcon name="import" />
  <SvgIcon name="logout" />
  <SvgIcon name="theme" />
  <p>=========</p>
  <Test />
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
</style>
