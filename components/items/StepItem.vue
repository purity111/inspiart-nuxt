<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: string;
  imgSrc: string;
  title: string;
  content: string;
}>();
</script>

<template>
  <div class="px-5">
    <div class="relative flex justify-around gap-5 items-center">
      <div class="rounded-full w-[90px] h-[90px]">
        <div class="step-num satoshi-bi">{{ num }}</div>
        <img
          :src="imgSrc"
          class="min-w-[90px]"
          alt="ステップアイテム"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <p class="text-base text-[#4E463D] leading-none pb-[10px]">{{ title }}</p>
        <p class="text-[#4E463D] leading-none">{{ content }}</p>
      </div>
    </div>
    <hr class="border border-[#E6E1DD] border-t-0 my-5" />
  </div>
</template>

<style scoped>
.content {
  font-size: 13px;
  padding-top: 10px;
}

.step-num {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 26px;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px #CDBFAC;
}
</style>
