<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
        text: string,
        fSize: number,
        color: string
    }>();
</script>

<template>
    <div class="paral" :style="{backgroundColor: color}">
        <h4 :style="{fontSize: fSize+'px'}">{{text}}</h4>
    </div>
</template>

<style scoped>
.paral {
    place-content: center;
    padding: 3px 0;
    background-color: #C2B4A1;
    transform: skew(-20deg);
    display: grid;
    width: max-content;
    margin: auto;
    margin-bottom: 0;
    margin-top: 60px;
    width: 312px;
}

.paral h4 {
    transform: skew(20deg);
    letter-spacing: -0.1em;
}
</style>