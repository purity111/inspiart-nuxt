<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  review1: string;
  review2: string;
  review3: string;
  review4: string;
  review5: string;
  mark1: number;
  mark2: number;
  mark3: number;
  mark4: number;
  mark5: number;
}>();

const averMark = (props.mark1 + props.mark2 + props.mark3 + props.mark4 + props.mark5) / 5;
</script>

<template>
  <div>
    <div class="mx-5 mt-4">
      <div class="flex mb-5 items-center hiragino">
        <div class="bg-[#222222] h-7 w-1 mb-[2px]"></div>
        <h5 class="mr-5 ml-[10px]">{{ title }}</h5>
        <h5 class="apart">での評価</h5>
      </div>
      <div class="flex items-center">
        <div class="text-xs">総合評価</div>
        <ItemsStarRating
          :modelValue="averMark"
          :starSize="'14px'"
          class="ml-6 mr-[10px]"
        />
        <div class="text-red-500">{{ averMark.toFixed(1) }}</div>
      </div>
      <div class="flex flex-wrap pr-[15px] justify-between">
        <ItemsStarItem :text="review1" :mark="mark1" />
        <ItemsStarItem :text="review2" :mark="mark2" />
        <ItemsStarItem :text="review3" :mark="mark3" />
        <ItemsStarItem :text="review4" :mark="mark4" />
        <ItemsStarItem :text="review5" :mark="mark5" />
      </div>
      <div class="text-xs pt-[13px] pb-[34px]">
        {{description}}
      </div>
    </div>
  </div>
</template>
