<template>
  <div class="slider-container">
    <Swiper
      v-if="movies"
      :modules="[Navigation, Pagination]"
      :grabCursor="true"
      :wheel="true"
      :slidesPerView="1.7"
      :spaceBetween="-30"
      :centered-slides="true"
      :loop="true"
      class="!overflow-visible"
    >
      <SwiperSlide
        v-for="(movie, index) in movies"
        :key="index"
        :class="{ active: SwiperSlide.isActive }"
      >
        <ItemsMovieItem
          :imgSrc="movie?.imgSrc"
          :badgeStr="movie?.badgeStr"
          :description="movie?.description"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const movies = ref();
onMounted(async () => {
  movies.value = await (await fetch("/data/MovieSlider.json")).json();
});
</script>

<style scoped>
.slider-container .swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>