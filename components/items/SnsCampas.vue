<script lang="ts" setup>
defineProps<{
  title: string;
  banner: string;
  sns_title: string;
  btn_name: string;
  mark_text: string;
}>();
</script>

<template>
  <div class="max-w-[335px] h-[430px] w-full mx-auto rounded-tr-[32px] rounded-bl-[32px] overflow-hidden relative pb-[21px] flex flex-col gap-[26px] items-center justify-end">
    <img
      :src="banner"
      alt="sns"
      width="335"
      height="430"
      loading="lazy"
      decoding="async"
      class="w-full h-auto absolute left-0 top-0"
    />
    <p class="w-[100px] aspect-square absolute bg-[url('/img/reason6/circle-outline.svg')] bg-contain bg-center text-white text-[10px] text-center content-center font-semibold top-[21px] right-[21px]" v-html="mark_text"></p>
    <div class="w-[263px] mx-auto relative">
      <h5 class="text-center font-normal text-white" v-html="title"></h5>
      <h6 class="satoshi-bi text-[48px] leading-[44px] text-white">{{ sns_title }}</h6>
      <h6 class="text-right satoshi-bi text-[48px] leading-[44px] text-transparent">Campas</h6>
    </div>
    <button class="w-[290px] block mx-auto rounded-full text-center text-sm py-[10px] bg-white relative font-normal">
      <span class="block">{{ btn_name }}</span>
      <span class="block">Campasへ</span>
      <span class="w-[36px] aspect-square rounded-full bg-[#C2B4A1] content-center absolute right-[10px] top-1/2 -translate-y-1/2">
        <img
          src="/img/reason6/button-arrow.svg"
          alt="arrow"
          width="12"
          height="10"
          loading="lazy"
          decoding="async"
          class="w-3 h-auto mx-auto"
        />
      </span>
    </button>
  </div>
</template>

<style scoped>
.text-transparent {
  -webkit-text-stroke: 1px white;
}
</style>