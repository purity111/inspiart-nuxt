<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  answer: string;
  description: string;
  isOpen: boolean;
}>();

const isOpen = ref(props.isOpen);

const toggleDescription = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div
    class="mt-5 bg-white shadow-lg border-t-0 pb-[10px] border border-[#0000000D]"
    @click="toggleDescription()"
  >
    <h2
      class="text-sm font-semibold pt-[13px] px-[12px] pb-[5px] w-full flex gap-2 items-center border-b-[1px] border-[#EEEEEE] border-solid -translate-y-[6px]"
    >
      <span class="text-[#CBA8A4] text-[16px] font-roboto font-bold">Q.</span
      ><span v-html="title"></span>
    </h2>

    <p class="text-sm font-semibold p-[14px] flex gap-2 items-start text-start">
      <span class="text-[#9DB7CC] text-xl font-roboto font-medium">A.</span
      ><span v-html="answer"></span>
    </p>
    <div v-show="isOpen" class="ml-[28px] px-[14px] pb-[14px]">
      <div class="text-xs font-light text-left" v-html="description"></div>
    </div>
    <div v-show="!isOpen" class="ml-[28px] px-[14px] pb-[14px] relative">
      <div
        class="text-xs font-light text-left overflow-hidden"
        style="max-height: 1.5em"
        v-html="description"
      ></div>
      <div
        class="text-[10px] flex justify-center items-center gap-[5px] pb-2 pt-2 absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF80] before:bg-white-to-transparent-y before:block before:w-full before:h-4 before:absolute before:bottom-full before:inset-x-0"
      >
        もっと見る
        <img
          src="/img/reason8/arrow-qa.svg"
          width="10"
          height="8"
          alt="arrow-right"
          loading="lazy"
          decoding="async"
          class="w-[10px] h-auto"
        />
      </div>
    </div>
  </div>
</template>
