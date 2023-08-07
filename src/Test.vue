<script setup lang="ts">
import { watch } from "vue";
interface Props {
  isFull: { value: boolean };
}
const props = defineProps<Props>();
watch(
  () => props.isFull.value,
  (val) => console.log("watch------>", val)
);
</script>
<template>
  <div></div>
</template>
