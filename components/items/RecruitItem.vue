<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  left: string;
  right: string;
}>();
</script>

<template>
  <div class="px-5">
    <div class="flex justify-start items-center py-[22px] relative">
      <h5 class="pl-[5px] pr-[20px] text-[#8E795D] text-sm">
        {{ left }}
      </h5>
      <div class="border-[#E6E1DD] border border-r-0 mr-4 h-5 w-[1px] absolute left-[100px]"></div>
      <p class="text-xs absolute left-[120px]">{{ right }}</p>
    </div>
    <hr class="border border-[#E6E1DD] border-t-0" />
  </div>
</template>
