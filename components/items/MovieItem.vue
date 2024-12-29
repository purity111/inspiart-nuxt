<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  imgSrc: string;
  badgeStr: string;
  description: string;
}>();
</script>

<template>
  <div class="movie-item rounded-[12px] shadow-md overflow-hidden">
    <img
      :src="imgSrc"
      class="w-full"
      alt="映画アイテム"
      loading="lazy"
      decoding="async"
    />
    <div class="card-badge">
      {{ badgeStr }}
    </div>
    <img
      src="/img/reason3/play.png"
      class="play-btn"
      alt="プレイボタン"
    />
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.movie-item {
  position: relative;
  width: 220px;
}

.card-badge {
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
  background-color: #C2B4A1;
  width: 96px;
  height: 22px;
  display: grid;
  place-content: center;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 20px;
  font-family: 'Hiragino Sans', sans-serif;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
}

.description {
  color: white;
  position: absolute;
  bottom: 15px;
  left: 20px;
  right: 20px;
  font-size: 13px;
}
</style>