<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  startLetter?: string;
  mark: number;
  totalNumber: number;
  titleLg: string;
  titleSm: string;
  starUrl: string;
  chartUrl: string;
}>();

</script>

<template>
  <div class="flex items-center gap-[10px] justify-center flex-col">
    <div class="flex items-center justify-center gap-[7px]">
      <div>
        <div class="relative">
          <img :src="starUrl" class="w-[31px]" alt="コメント星" />
          <h5 class="star-letter">{{ startLetter }}</h5>
        </div>
        <p class="mark">{{ mark.toFixed(1) }}</p>
      </div>
      <div class="pt-[5px] flex flex-col justify-between items-center">
        <div class="flex">
          <h4>{{ titleLg }}</h4>
          <h5>{{ titleSm }}</h5>
        </div>
        <p>(全{{ totalNumber }}件)</p>
      </div>
    </div>
    <img
      :src="chartUrl"
      class="w-[97px]"
      alt="挑戦"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<style scoped>
h4 {
  font-size: 16px;
}

h5 {
  font-size: 11px;
  display: grid;
  place-content: end;
}

p {
    font-size: 11px;
}

.star-letter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
}

.mark {
  font-size: 11px;
  color: #99bbee;
  line-height: 1;
  margin-top: 5px;
  text-align: center;
}
</style>
