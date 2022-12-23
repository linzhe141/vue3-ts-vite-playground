<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  name: string;
  color: string;
}
const props = withDefaults(defineProps<Props>(), {
  color: "#000",
});

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
