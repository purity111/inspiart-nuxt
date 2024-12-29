<template>
  <section class="reason1-section bg-[#FCFBFB] shadow-md">
    <ItemsStyleSelect />
    <SectionsOnlineSection />
    <ItemsSwitchOnline />
    <SectionsClassroomSection />
    <SectionsGuideSection />
    <SectionsQaSection />
    <SectionsBlogSection />
    <ItemsTrialForm :areas="areas" />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const areas = ref([]);
onMounted(async () => {
  areas.value = await fetch("/data/area.json").then((res) => res.json());
});
</script>
