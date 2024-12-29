<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps<{
  bgColor: string;
  title1: string;
  title2: string;
  leftContent: string;
  rightContent: string;
  imgSrc: string;
  btnTitle: string;
}>();
</script>

<template>
  <div class="relative mx-5">
    <div class="circle" :style="{ backgroundColor: bgColor }"></div>
    <img
      src="/img/common/star.png"
      class="apply-star"
      alt="星"
      loading="lazy"
      decoding="async"
    />
    <div
      class="w-full relative pb-[30px]"
      :style="{ backgroundColor: bgColor }"
    >
      <h5 class="text-white text-sm text-center pt-[30px] tracking-tight">{{ title1 }}</h5>
      <h5 class="white-under">{{ title2 }}</h5>
      <div class="my-[30px] flex gap-5 justify-center text-center">
        <p class="bottom-up">{{ leftContent }}</p>
        <img
          src="/img/reason12/premium.webp"
          class="rounded-full p-[7px] border border-dashed border-white w-[187px] z-20 relative"
          alt="申請メインビュー"
          loading="lazy"
          decoding="async"
        />
        <p class="up-bottom">{{ rightContent }}</p>
      </div>
      <a
        class="apply-btn"
        href="#"
      >
        <p class="text-xm">{{ btnTitle }}</p>
        <img
          src="/img/reason12/right-arrow.png"
          class="h-9 absolute top-3 right-3"
          alt="申請ボタン"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.circle {
  position: absolute;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  transform: translateX(-50%);
  left: 50%;
  top: -40px;
}

.apply-star {
  width: 20px;
  margin: auto;
  margin-top: -20px;
  position: absolute;
  left: 50%;
  top: 0px;
  z-index: 20;
  transform: translateX(-50%);
}

.white-under {
  margin: auto;
  text-align: center;
  width: max-content;
  font-size: 22px;
  position: relative;
  z-index: 20;
  background-color: transparent;
}

.white-under::after {
  content: "";
  position: absolute;
  bottom: 3px;
  width: 100%;
  height: 6px;
  left: 0;
  background-color: white;
  margin: auto;
  opacity: 0.7;
  bottom: 7px;
  z-index: -1;
}

.bottom-up {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: white;
  font-family: "Gallient", sans-serif;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.up-bottom {
  writing-mode: vertical-lr;
  color: white;
  font-family: "Gallient", sans-serif;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.apply-btn {
  position: relative;
  height: 60px;
  margin: 0 20px;
  display: grid;
  place-content: center;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 3px 6px rgb(0, 0, 0, 0.12);
}
</style>
