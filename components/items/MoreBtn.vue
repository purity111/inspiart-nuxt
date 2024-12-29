<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    text: string,
    color: string
}>();

</script>

<template>
   <div class="w-[275px] h-[52px] rounded-[50px] border relative grid place-content-center hover:bg-[#B6B0AB]" :style="{borderColor: color}">
    <p class="btn-txt">{{ text }}</p>
    <img
      src="/img/common/btn.png"
      class="w-[12px] absolute top-[22px] right-[20px]"
      alt="ボタンアイコン"
    />
   </div>
</template>

<style scoped>
.btn-txt {
    font-size: 13px;
}
</style>