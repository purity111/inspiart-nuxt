<template>
  <section class="reason4-section bg-[#F5F3F1] shadow-md">
    <ItemsGainSkills />
    <ItemsMentorSystem :mentors="mentors" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const mentors = ref([]);
onMounted(async () => {
  await fetch("/data/mentors.json").then((res) => res.json()).then((data) => {
    mentors.value = data;
  });
});
</script>
