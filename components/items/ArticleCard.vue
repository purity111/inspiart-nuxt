<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  date: string;
  author: string;
  title: string;
  content: string;
}>();
</script>

<template>
  <div class="article-card">
    <img
      :src="imgSrc"
      class="h-[130px]"
      alt="記事"
      loading="lazy"
      decoding="async"
    />
    <div class="p-[10px]">
      <div class="date-author">
        <p class="text-[#999999]">{{ date }}</p>
        <p class="text-[#999999]">{{ author }}</p>
      </div>
      <div class="flex justify-around flex-col">
        <p class="text-xs pt-[10px] mb-[30px] line-clamp-1 text-center fSize12">
          {{ title }}
        </p>
        <p class="text-xs line-clamp-2 fSize11">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  display: flex;
  justify-content: center;
  margin: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
}

.date-author {
  display: flex;
  justify-content: space-between;
}

.date-author p {
  font-size: 10px;
}

.fSize12 {
  font-size: 12px;
}

.fSize11 {
  font-size: 11px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
</style>
