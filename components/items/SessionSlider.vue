<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  num: string;
  title: string;
  items: string[];
  point: string;
  baseColor: string;
}>();
</script>

<template>
  <div
    class="pb-[1px] pt-[10px] rounded-bl-[28px]"
    :style="{ backgroundColor: baseColor }"
  >
    <img
      :src="imgSrc"
      class="w-full px-[10px]"
      alt="セッション"
      loading="lazy"
      decoding="async"
    />
    <p
      class="satoshi text-sm text-white text-center pt-[30px] pb-[10px] leading-none"
    >
      Session
    </p>
    <div class="relative mb-[15px]">
      <h2
        class="reason-title !pb-[0px] !text-[52px] text-center !leading-none opacity-60"
      >
        {{ num }}
      </h2>
      <h3
        class="absolute text-[20px] text-[#4E463D] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        {{ title }}
      </h3>
    </div>
    <div v-for="(item, i) of items" :key="i" class="px-5">
      <ItemsCheckContent :imgSrc="'/img/common/check.svg'" :text="item" />
      <div
        class="border border-dashed mt-[10px] mb-[15px] border-white opacity-60 h-[1px] border-t-0"
        v-if="i != item.length"
      ></div>
    </div>
    <div
      class="bg-white mx-[10px] mt-[50px] mb-[10px] rounded-bl-[28px] rounded-tr-[28px] pt-[25px] pb-[32px] px-5"
    >
      <p class="text-base text-[#8E795D] pb-[16px] opacity-60 leading-none">
        Point
      </p>
      <p class="text-[13px] leading-[1.6]">{{ point }}</p>
    </div>
  </div>
</template>
