<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: string;
  imgSrc: string;
  title: string;
  description?: string;
  mvSrc?: string;
}>();
</script>

<template>
  <div
    class="relative w-[113px] h-[161px] py-[27px] flex items-center justify-end border border-[#E6E1DD] border-l-0 border-r-0"
  >
    <div>
      <h5 class="slider-num">{{ num }}</h5>
      <img
        :src="imgSrc"
        class="w-[80px] pb-[10px] m-auto"
        alt="スライダーアイテム"
        loading="lazy"
        decoding="async"
      />
      <p class="text-sm text-center w-full tracking-[-0.15em]">
        {{ title }}
      </p>
      <img
        src="/img/common/btn.png"
        class="arrow absolute left-[45%] bottom-[6px] m-auto pt-[12px] opacity-0"
        alt="詳細へ"
      />
    </div>
    <div class="bg-[#E6E1DD] w-[1px] h-[120px] ml-[16px]"></div>
  </div>
</template>

<style scoped>
.slider-num {
  position: absolute;
  font-size: 12px;
  left: 12px;
  top: 18px;
  color: #8e795d;
}
</style>
