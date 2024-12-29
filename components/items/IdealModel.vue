<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  cardNumber: string;
  imgSrc: string;
  failText1: string;
  failText2: string;
  descTitle1: string;
  descTitle2: string;
  descContent1: string;
  descContent2: string;
}>();
</script>

<template>
  <div class="relative">
    <hr class="border-[#E6E1DD]" />
    <div class="relative mt-[-20px] mb-7">
      <img
        src="/img/reason12/polygon.webp"
        alt="ポリゴン"
        loading="lazy"
        decoding="async"
        class="w-[80px] h-[80px] m-auto"
      />
      <h2 class="card-number">{{ cardNumber }}</h2>
    </div>
    <div class="flex justify-between">
      <img
        :src="imgSrc"
        alt="理想のモデル1"
        loading="lazy"
        decoding="async"
        class="w-[175px] h-[280px]"
      />
      <div class="relative">
        <img
          src="/img/reason12/arrow.png"
          alt="arrow"
          loading="lazy"
          decoding="async"
          class="w-[95px] ml-[-10px] pt-5 left-0 top-7"
        />
        <img
          src="/img/reason12/sicky.webp"
          alt="病気"
          loading="lazy"
          decoding="async"
          class="w-[150px] right-0 pb-[10px]"
        />
        <div class="fail-text">
          <p>{{ failText1 }}</p>
          <hr
            class="border-t border-dashed border-[#E6E1DD] h-1 mt-[3px] mb-[7px]"
          />
          <p>{{ failText2 }}</p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="/img/reason12/description-title.png"
        alt="説明-タイトル"
        loading="lazy"
        decoding="async"
        class="h-[50px]"
      />
      <div class="desc-titles">
        <p class="text-sm">{{ descTitle2 }}</p>
        <p class="text-xs tracking-tight text-white">{{ descTitle1 }}</p>
      </div>
    </div>
    <div class="p-5 pb-[50px]">
      <div class="flex gap-[10px] justify-start">
        <img
          src="/img/reason12/check.webp"
          alt="チェック"
          loading="lazy"
          decoding="async"
          class="w-[18px]"
        />
        <p class="text-sm leading-none">{{ descContent1 }}</p>
      </div>
      <hr
        class="border-t border-dashed border-[#E6E1DD] h-1 mt-[12px] mb-[15px]"
      />
      <div class="flex gap-[10px] justify-start">
        <img
          src="/img/reason12/check.webp"
          alt="チェック"
          loading="lazy"
          decoding="async"
          class="w-[18px]"
        />
        <p class="text-sm leading-none">{{ descContent2 }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 20;
  font-size: 28px;
  -webkit-text-stroke: 1px white;
  color: transparent;
  font-weight: 600;
  line-height: 1;
  font-family: "Satoshi-BoldItalic", sans-serif;
}

.fail-text {
  padding-left: 8px;
}

.fail-text p {
  font-size: 10px;
}

.desc-titles {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
