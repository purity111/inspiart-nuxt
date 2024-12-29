<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{
    text: string,
    color: string
}>();

</script>

<template>
   <div class="w-[200px] h-[34px] rounded-[50px] border relative grid place-content-center hover:bg-[#B6B0AB]" :style="{borderColor: color}" @click="$emit('click')">
    <p class="btn-txt">{{ text }}</p>
    <img
      src="/img/common/btn.png"
      class="w-[10px] absolute top-[14px] right-[20px]"
      alt="ボタンアイコン"
    />
   </div>
</template>

<style scoped>
.btn-txt {
    font-size: 13px;
}
</style>