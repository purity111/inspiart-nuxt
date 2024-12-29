<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  nameEng: string;
  nameJp: string;
  shop: string;
  age: string;
  instrument: string;
}>();
</script>

<template>
  <div class="player-card">
    <div class="title">
        <h4>{{ nameEng }}</h4>
        <h5>{{ nameJp }}</h5>
        <p>{{ shop }} / {{ age }} / {{ instrument }}</p>
    </div>
    <img
      :src="imgSrc"
      class="h-[90px]"
      alt="プレイヤー"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.player-card {
  display: flex;
  justify-content: center;
  margin: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
}

.title h4 {
    font-size: 18px;
    line-height: 1;
    margin-right: -10px;
    padding-top: 10px;
    color: #DDDDDD;
    text-align: right;
    position: relative;
    z-index: 20;
}

.title h5 {
    font-size: 16px;
    padding-bottom: 6px;
    padding-left: 22px;
    line-height: 1;
}

.title p {
    font-size: 11px;
    padding-left: 22px;
}
</style>
