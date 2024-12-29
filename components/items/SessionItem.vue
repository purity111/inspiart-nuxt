<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: string;
  text: string;
  letterColor: string;
}>();
</script>

<template>
  <div>
    <div class="flex justify-start items-center py-2 pl-5 relative">
      <p :style="{ color: letterColor }" class="text-[10px] satoshi">Session</p>
      <h5
        :style="{ WebkitTextStroke: '1px' + letterColor }"
        class="pl-[5px] pr-[20px] pb-[0px] leading-none satoshi-subTitle text-[20px] color-transparent"
        style="font-size: 20px"
      >
        {{ num }}
      </h5>
      <div class="flex justify-start absolute left-[102px] items-center">
        <div class="border-[#E6E1DD] border border-r-0 mr-4 h-5 w-[1px]"></div>
        <p class="text-xs">{{ text }}</p>
      </div>
    </div>
    <hr class="border border-[#E6E1DD] border-t-0" />
  </div>
</template>
