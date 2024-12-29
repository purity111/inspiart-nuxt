<script setup>
import { onMounted, ref } from "vue";
import "../style/global.css";

const showTop = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);

const reasonTop = ref(null);
const reason1 = ref(null);
const reason2 = ref(null);
const reason3 = ref(null);
const reason4 = ref(null);
const reason5 = ref(null);
const reason6 = ref(null);
const reason7 = ref(null);
const reason8 = ref(null);
const footer = ref(null);

onMounted(async () => {
  createObserver(reasonTop.value, (entries) => {
    if (entries[0].isIntersecting) {
      showTop.value = true;
    }
  });
  createObserver(reason1.value, (entries) => {
    if (entries[0].isIntersecting) {
      show1.value = true;
    }
  });
  createObserver(reason2.value, (entries) => {
    if (entries[0].isIntersecting) {
      show2.value = true;
    }
  });
  createObserver(reason3.value, (entries) => {
    if (entries[0].isIntersecting) {
      show3.value = true;
    }
  });
  createObserver(reason4.value, (entries) => {
    if (entries[0].isIntersecting) {
      show4.value = true;
    }
  });
  createObserver(reason5.value, (entries) => {
    if (entries[0].isIntersecting) {
      show5.value = true;
    }
  });
  createObserver(reason6.value, (entries) => {
    if (entries[0].isIntersecting) {
      show6.value = true;
    }
  });
  createObserver(reason7.value, (entries) => {
    if (entries[0].isIntersecting) {
      show7.value = true;
    }
  });
  createObserver(reason8.value, (entries) => {
    if (entries[0].isIntersecting) {
      show8.value = true;
    }
  });
  createObserver(footer.value, (entries) => {
    if (entries[0].isIntersecting) {
      show9.value = true;
    }
  });
});
</script>

<template>
  <div>
    <LazyTop />
    <div ref="reasonTop">
      <LazyReasonReasonsTop v-if="showTop" />
    </div>
    <ItemsStarter
      star="/img/common/3star.png"
      imgSrc="/img/reason12/reason1.avif"
      titleLeft="Reason"
      titleRight="01"
      description1="事務所に依存しない"
      description2="モデルが育っているから"
      description3="Model training ability"
      color1="white"
      color2="white"
      color3="white"
      id="reason1"
    />
    <div ref="reason1">
      <LazyReasonReason1 v-if="show1" />
    </div>
    <ItemsStarter
      star="/img/common/3star.png"
      imgSrc="/img/reason12/Reason02.webp"
      titleLeft="Reason"
      titleRight="02"
      description1="しっかりした"
      description2="カリキュラムだから"
      description3="Actual curriculum"
      color1="#4E463D"
      color2="#4E463D"
      color3="#8E795D"
      class="mt-[-85px]"
      id="reason2"
    />
    <div ref="reason2">
      <LazyReasonReason2 v-if="show2" />
    </div>
    <ItemsStarter
      star="/img/common/3star.png"
      imgSrc="/img/reason3/reason3.webp"
      titleLeft="Reason"
      titleRight="03"
      description1="レベルに応じた"
      description2="クラス分けが丁寧だから"
      description3="Careful classification"
      color1="white"
      color2="white"
      color3="#FFFFFF99"
      id="reason3"
    />
    <div ref="reason3">
      <LazyReasonReason3 v-if="show3" />
    </div>
    <ItemsTStarter
      imgSrc="/img/reason4/reason04.avif"
      num="04"
      subtitle="講師として"
      description="カリスマモデルも<br>登壇するから"
      :dots_left="false"
      id="reason4"
    />
    <div ref="reason4">
      <LazyReasonReason4 v-if="show4" />
    </div>
    <ItemsTStarter
      imgSrc="/img/reason5/reason05.avif"
      num="05"
      subtitle="チャンスを手繰り寄せる"
      description="サポートがあるから"
      :dots_left="false"
      class="relative z-20"
      id="reason5"
    />
    <div ref="reason5">
      <LazyReasonReason5 v-if="show5" />
    </div>
    <ItemsTStarter
      imgSrc="/img/reason6/reason06.avif"
      num="06"
      subtitle="在学中から"
      description="インフルエンサーとして<br>活躍できるから"
      :dots_left="true"
      id="reason6"
    />
    <div ref="reason6">
      <LazyReasonReason6 v-if="show6" />
    </div>
    <ItemsTStarter
      imgSrc="/img/reason7/reason07.avif"
      num="07"
      subtitle="在学中から"
      description="お仕事がたくさん<br>あるから"
      :dots_left="false"
      id="reason7"
    />
    <div ref="reason7">
      <LazyReasonReason7 v-if="show7" />
    </div>
    <ItemsTStarter
      imgSrc="/img/reason8/reason08.avif"
      num="08"
      subtitle="受講できる"
      description="拠点がたくさん<br>あるから"
      :dots_left="false"
      id="reason8"
    />
    <div ref="reason8">
      <LazyReasonReason8 v-if="show8" />
    </div>
    <div ref="footer">
      <LazySectionsFooterSection />
    </div>
  </div>
</template>
