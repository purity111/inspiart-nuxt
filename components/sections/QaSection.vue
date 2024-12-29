<template>
  <div class="px-[10px] bg-white relative pt-[5px] pb-[95px]">
    <div
      class="w-[184px] aspect-square rounded-full bg-white -mt-10 pt-[60px] mx-auto"
    >
      <img
        src="/img/common/star.png"
        width="26"
        height="26"
        alt="星"
        loading="lazy"
        decoding="async"
        class="w-[26px] h-auto mx-auto"
      />
      <h2 class="text-2xl text-center mt-[10px]">
        よくあるご質問
      </h2>
      <h3 class="satoshi text-[#8E795D] pt-[10px] text-center">Q&A</h3>
    </div>
    <div class="mt-[10px]">
      <ItemsQaItem
        v-for="qa in more ? qaes : qaes?.slice(0, 5)"
        :key="qa.id"
        :title="qa.title"
        :answer="qa.answer"
        :description="qa.description"
        :isOpen="false"
      />
    </div>
    <div>
      <button
        @click="more = !more"
        class="block w-[275px] h-[52px] bg-transparent font-semibold text-sm rounded-full relative border border-[#B6B0AB] mt-7 mx-auto"
      >
        {{ more ? "閉じる" : "＋12件をすべて表示" }}
        <img
          src="/img/reason8/arrow-down.svg"
          alt="arrow"
          width="12"
          height="8"
          loading="lazy"
          decoding="async"
          class="w-3 h-auto absolute right-5 top-1/2 -translate-y-1/2"
          :class="more ? 'rotate-180' : ''"
        />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
const qaes = ref();
const more = ref(false);
onMounted(async () => {
  qaes.value = await fetch("/data/qa.json").then((res) => res.json());
});
</script>
