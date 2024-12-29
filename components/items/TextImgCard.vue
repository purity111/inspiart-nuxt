<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  imgSrc: string;
  num?: string;
  str?: string;
  target?: string;
}>();
</script>

<template>
  <div
    class="p-5 gap-6 flex justify-between bg-[#FCFBFB] border-t border-[#E6E1DD]"
  >
    <div class="r-title">
      <h5 class="satoshi-subTitle">{{ num }}</h5>
      <p v-html="str" class="leading-normal tracking-tighter"></p>
    </div>
    <div class="flex justify-end gap-6 items-center">
      <img
        :src="imgSrc"
        class="h-[100px] w-[100px]"
        alt="reasonItem"
        loading="lazy"
        decoding="async"
      />
      <a :href="'#'+target">
        <img
          src="/img/reason12/toBottom.png"
          class="to-Bottom"
          alt="アイテムへ"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.to-Bottom {
  border-color: white;
  border-radius: 50%;
  box-shadow: 1px 5px 12px #00000029;
  height: 36px;
  width: 36px;
}

.r-title h5 {
  font-size: 26px;
  padding-bottom: 10px;
}

.r-title p {
  font-size: 14px;
}
</style>
