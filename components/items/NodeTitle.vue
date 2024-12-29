<script lang="ts" setup>
defineProps<{
  sm_title: string;
  title: string;
}>();
</script>

<template>
  <div class="node-title w-full max-w-[295px] mx-auto relative">
    <h3
      class="text-xs bg-white text-[#8E795D] text-center font-semibold content-center w-[225px] h-[18px] rounded-full mx-auto relative z-10 -mb-2 !font-normal"
    >
      {{ sm_title }}
    </h3>
    <h4 class="text-lg text-center text-white bg-[#C1B4A1] pt-[14px] pb-[10px] !font-normal">
      {{ title }}
    </h4>
  </div>
</template>

<style scoped>
.node-title>h4 {
  clip-path: polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%, 4% 50%);
}
</style>
