<template>
  <div class="reason3-section bg-[#F5F3F1]">
    <img
      src="/img/common/Ribbon.webp"
      class="w-full"
      alt="ブランド"
      loading="lazy"
      decoding="async"
    />
    <div class="pb-[50px] pt-[60px]">
      <h3 class="text-2xl pb-5 text-center tracking-tight">
        選べる2つのコース
      </h3>
      <p class="text-sm text-center">
        InspiartZモデルスクールでは、<br />
        ビギナーコースとプロフェッショナルコースを<br />
        ご用意しております。
      </p>
    </div>
    <ItemsCourseCard :course="proCourseProps" v-if="proCourseProps" />
    <ItemsCourseCard
      :course="freeCourseProps"
      v-if="freeCourseProps"
      class="mt-[60px]"
    />
    <div class="movie">
      <div class="movie-title-sm m-auto mb-[30px]">
        <div class="relative">
          <img src="/img/reason3/slash.svg" class="h-[22px] m-auto" alt="" />
          <h5 class="slash-title">モデルレッスンを覗き見</h5>
        </div>
        <div class="flex gap-3 justify-center pt-[10px]">
          <h2 class="lesson satoshi-bi">Lesson</h2>
          <h2 class="satoshi-bi">Movie</h2>
        </div>
      </div>
      <div class="slider pt-[10px] pb-[100px]">
        <ItemsMovieSlider />
      </div>
    </div>
    <SectionsNaraSection />
    <SectionsRecruitSection />
    <SectionsStepSection />
    <div
      style="background: url(&quot;/img/common/challenge-bg.avif&quot;)"
      class="rounded-[40px] relative pt-[90px] pb-[70px]"
    >
      <h2 class="check-it">Check it!</h2>
      <ItemsApplyCardCom
        :bgColor="'#E1CBC8'"
        :title1="'まずは試してみたい！という方へ'"
        :title2="'体験入学開催'"
        :leftContent="'Trial admission'"
        :rightContent="'For new students'"
        :imgSrc="'/img/reason12/premium.webp'"
        :btnTitle="'体験入学（有料）'"
        class="mb-[60px]"
      />
      <ItemsApplyCardCom
        :bgColor="'#C7D5E1'"
        :title1="'まだちょっと迷っている…という方は'"
        :title2="'無料カウンセリング'"
        :leftContent="'Free counseling'"
        :rightContent="'Free counseling'"
        :imgSrc="'/img/reason12/webp.png'"
        :btnTitle="'無料カウンセリング'"
      />
    </div>
    <SectionsBossSection />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const proCourseProps = ref();
const freeCourseProps = ref();

onMounted(async () => {
  proCourseProps.value = await (await fetch("/data/ProCourseData.json")).json();
  freeCourseProps.value = await (
    await fetch("/data/FreeCourseData.json")
  ).json();
});
</script>

<style scoped>
.movie {
  padding-top: 60px;
}

.movie h2 {
  font-size: 52px;
  color: #cdbfac;
  line-height: 1;
}

.slash-title {
  position: absolute;
  font-size: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: -0.15em;
}

.lesson {
  -webkit-text-stroke: 1px #cdbfac;
  color: transparent !important;
  font-size: 52px;
}

.check-it {
  color: #e1cbc8;
  transform: rotate(-5deg);
  font-size: 64px;
  top: -40px;
  line-height: 1;
  position: absolute;
}
</style>
