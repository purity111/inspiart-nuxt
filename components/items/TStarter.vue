<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  imgSrc: string;
  num: string;
  subtitle: string;
  description: string;
  dots_left: boolean;
}>();
</script>

<template>
  <div class="top">
    <div class="relative">
      <img
        src="/img/common/dots-group.webp"
        alt="バック"
        width="133"
        height="150"
        loading="lazy"
        decoding="async"
        class="w-[133px] h-auto absolute -bottom-14 opacity-60"
        :class="dots_left ? '-left-10' : '-right-10'"
      />
      <img
        src="/img/common/act-top-t.svg"
        alt="バック"
        width="375"
        height="68"
        loading="lazy"
        decoding="async"
        class="w-full h-auto mx-auto"
      />
      <img
        src="/img/common/reason-mv-star-2.svg"
        alt="星"
        width="92"
        height="33"
        loading="lazy"
        decoding="async"
        class="w-[92px] h-auto mx-auto relative bottom-6"
      />
      <img
        :src="imgSrc"
        alt="理由MV"
        loading="lazy"
        decoding="async"
        width="265"
        height="356"
        class="w-[265px] h-auto relative mx-auto mt-3"
      />
      <h2 class="title">
        <span class="text-[78px]">Reason</span>
        <span class="text-[74px] text-[#c2b4a1]">{{ num }}</span>
      </h2>
    </div>
    <div class="title-desc">
      <h4 v-html="subtitle" />
      <h3 v-html="description" />
      <p class="text-[#8E795D] opacity-60">Actual curriculum</p>
    </div>
    <img
      src="/img/common/Ribbon.webp"
      alt="リボン"
      width="375"
      height="66"
      loading="lazy"
      decoding="async"
      class="w-full h-auto mt-[45px]"
    />
  </div>
</template>

<style scoped>
.top {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background-color: #fcfbfb;
  border-top: 86px solid #f5f3f1;
}

.title {
  position: absolute;
  text-align: center;
  bottom: 80px;
  left: 50%;
  padding-left: 12px;
  transform: translateX(-50%);
  font-family: "Satoshi-BoldItalic", sans-serif;
  letter-spacing: -0.05em;
  font-weight: 300;
}

.title > span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 1px #c2b4a1;
  margin-right: 7px;
}

.title-desc {
  text-align: center;
  padding-top: 36px;
}

.title-desc h3 {
  margin-top: 9px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.4;
}

.title-desc p {
  margin-top: 22px;
  font-family: "Satoshi", sans-serif;
}
</style>
