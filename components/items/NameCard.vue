<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  title: string;
  nameEng: string;
  nameJp: string;
  info: string;
  font1: string;
  font2: string;
  font3: string;
  font4: string;

}>();

</script>

<template>
  <div>
    <h5 :style="{fontSize: font1}" v-html="title" class="text-[18px] leading-[1.4] tracking-[-0.1em]"></h5>
    <p class="nameEn" :style="{fontSize: font2}">{{ nameEng }}</p>
    <p :style="{fontSize: font3}" class="mb-[10px] leading-none mt-[-5px]">{{ nameJp }}</p>
    <p :style="{fontSize: font4}">{{ info }}</p>
  </div>
</template>

<style scoped>
.nameEn {
  padding-top: 20px;
  line-height: 1;
  color: #DDDDDD;
  font-family: 'Apple Chancery';
  padding-left: 20px;
}

</style>