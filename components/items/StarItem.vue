<script setup>
import { defineProps } from "vue";

const props = defineProps({
  mark: Number,
  text: String,
});
</script>

<template>
  <div class="flex items-center justify-between w-[42%]">
    <div class="text-[11px] tracking-[-0.12em]">{{ text }}</div>
    <div class="flex justify-center gap-[5px] items-center">
      <ItemsStarRating :modelValue="mark" :starSize="'9px'" />
      <div class="text-red text-[11px] text-red-500">{{ mark.toFixed(1) }}</div>
    </div>
  </div>
</template>
