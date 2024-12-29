<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  text: string;
}>();
</script>

<template>
  <div class="brand-item">
    <img
      :src="imgSrc"
      class="h-[40px] m-auto"
      alt="ブランド"
      loading="lazy"
      decoding="async"
    />
    <div class="w-full h-[1px] border border-[#E6E1DD] border-b-0 mt-8 mb-4"></div>
    <p class="brand-text">{{text}}</p>
  </div>
</template>

<style scoped>
.brand-item {
    border-radius: 0 28px 0 28px;
    background-color: #F5F3F1;
    padding: 20px;
    padding-top: 40px;
    margin-top: 20px;
}

.brand-text {
    font-size: 13px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
