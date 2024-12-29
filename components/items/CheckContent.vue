<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  text: string;
  imgSrc: string;
  isFinal?: boolean;
}>();
</script>

<template>
  <div class="flex justify-start gap-[10px] mt-5">
    <img :src="imgSrc" class="w-[15px]" alt="チェック" />
    <p class="text-[14px] leading-none">{{ text }}</p>
  </div>
</template>
