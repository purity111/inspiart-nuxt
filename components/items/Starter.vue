<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
        star: string,
        imgSrc: string,
        titleLeft: string,
        titleRight: string,
        description1: string,
        color1: string,
        description2: string,
        color2: string,
        description3: string,
        color3: string,
    }>();
</script>

<template>
    <div class="relative">
        <img :src="star" alt="3star" loading="lazy" decoding="async" class="star3" />
        <img :src="imgSrc" alt="理由MV" loading="lazy" decoding="async" />
        <div class="title">
            <h2 class="reason-title">{{titleLeft}}</h2>
            <h2 class="satoshi-bi text-[74px] text-white">{{titleRight}}</h2>
        </div>
        <div class="title-desc">
            <h5 :style="{color: color1}">{{ description1 }}</h5>
            <h2 :style="{color: color2}">{{ description2 }}</h2>
            <p :style="{color: color3}" class="satoshi opacity-60">{{ description3 }}</p>
        </div>
    </div>
</template>

<style scoped>
.star3 {
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translateX(-50%)
}
.title {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-desc {
    text-align: center;
    position: absolute;
    transform: translate(-50%, 155%);
    top: 50%;
    left: 50%;
    width: 100%;
}

.title-desc h5 {
    font-size: 16px;
    color: #FCFBFB;
}

.title-desc h2 {
    color: #FCFBFB;
    font-size: 28px;
    line-height: 2;
    letter-spacing: -0.18em;
}

.title-desc p {
    font-size: 16px;
    color: #FCFBFB;
}

</style>