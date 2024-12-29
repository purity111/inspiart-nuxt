<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  title: string;
  content: string;
  iconSrc: string;
  dir: string;
}>();
</script>

<template>
  <div v-if="dir === 'left'">
    <div class="flex overflow-x-hidden">
      <img
        :src="imgSrc"
        class="w-[250px] ml-[-80px] mr-[34px]"
        alt="ポイント"
        loading="lazy"
        decoding="async"
      />
      <div class="pr-5">
        <img src="/img/common/star.png" class="w-[16px]" alt="" />
        <h5 class="text-lg pt-[10px] pb-[20px] leading-[1]">{{ title }}</h5>
        <p class="text-[13px]">{{ content }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex overflow-x-hidden">
      <div class="flex flex-col justify-end pl-5">
        <img src="/img/common/star.png" class="w-[16px]" alt="" />
        <h5 class="text-lg pt-[10px] pb-[20px] leading-[1]">{{ title }}</h5>
        <p class="text-[13px]">{{ content }}</p>
      </div>
      <img
        :src="imgSrc"
        class="w-[250px] ml-5 mr-[-80px]"
        alt="ポイント"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>
