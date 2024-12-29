<script lang="ts" setup>
defineProps<{
  title: string;
  banner: string;
  sub_title: string;
}>();
</script>

<template>
  <div
    class="bg-white w-[335px] rounded-bl-[32px] rounded-tr-[32px] overflow-hidden mx-auto"
  >
    <img
      :src="banner"
      :alt="title"
      width="335"
      height="207"
      loading="lazy"
      decoding="async"
      class="w-full h-auto"
    />
    <div class="pt-6 px-5 pb-7 text-center">
      <h4
        class="text-lg text-[#8E795D] font-medium leading-[25px]"
        v-html="title"
        v-if="title"
      ></h4>
      <p
        class="text-[13px] text-[#4E463D] font-medium mt-3.5 leading-[20px]"
        v-html="sub_title"
      ></p>
    </div>
  </div>
</template>
