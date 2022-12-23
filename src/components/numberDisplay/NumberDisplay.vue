<template>
  <div class="numberDisplay">
    <div v-for="(digit, i) in numberString" :key="i">
      <div v-if="isNumber(digit)" class="wrap">
        <div
          v-for="(item, index) in numbers"
          :key="index"
          class="numberItem"
          :style="{ transform: `translate(-50%, -${Number(digit) * 30}px)` }"
        >
          {{ item }}
        </div>
      </div>
      <div v-else class="wrap">
        <div class="splitItem">{{ digit }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.numberDisplay {
  display: flex;
  .wrap {
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    font-style: italic;
    background-color: #000;
    overflow: hidden;
    .numberItem {
      margin-left: 50%;
      transform: translate(-50%);
      transition: all 0.5s;
    }
    .splitItem {
      text-align: center;
    }
  }
}
</style>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
  numberString: string;
}
defineProps<Props>();
const numReg = /\d/;
const isNumber = computed(() => (data: string) => numReg.test(data));
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>
