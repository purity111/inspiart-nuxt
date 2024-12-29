<template>
  <div class="reason2-section bg-[#F5F3F1]">
    <img
      src="/img/common/Ribbon.webp"
      class="w-full"
      alt="ブランド"
      loading="lazy"
      decoding="async"
    />
    <h5 class="py-10 text-center text-sm leading-relaxed">
      モデルとしてお仕事をしていく上で、<br />
      必要不可欠なスキルを体系的に網羅。<br />
      マインドセットや栄養学まで、<br />
      幅広くカバーしています。
    </h5>
    <div class="walking">
      <img
        src="/img/reason12/imgbulk.avif"
        class="w-full px-5"
        alt="歩きサンプル"
        loading="lazy"
        decoding="async"
      />
      <div class="aya">
        <div class="aya-title">カリキュラム統括ディレクター</div>
        <div class="aya-body">
          <img
            src="/img/reason12/aya.webp"
            class="w-full px-9"
            alt="aya"
            loading="lazy"
            decoding="async"
          />
          <div class="aya-name">
            <h2 class="aya-left satoshi-bi leading-[1.2]">Aya</h2>
            <h2 class="text-right pr-[30px] leading-[1.2] satoshi">Takizawa</h2>
          </div>
          <h5 class="text-xl pb-8 text-center">善いモデルに。</h5>
          <p class="text-sm px-5 leading-[1.8] aya-msg">
            世間から、仕事仲間から、自分自身から。<br />
            全方位から愛されるモデルになるために必要な要素はビジュアルだけではありません。InspiartZモデルスクールは人間として魅力的なモデルを育成します。それはモデルとしての成功においては必要不可欠。そして、今後の人生においても必ず武器になります。
          </p>
          <ItemsMoreBtn
            :color="'#B6B0AB'"
            text="インタビューを読む"
            class="m-auto mt-[50px]"
          />
          <hr class="w-full border border-[#E6E1DD] mt-[30px] mb-6" />
          <h5 class="text-base text-[#8E795D] pb-5 px-5 opacity-60">Profile</h5>
          <p class="dummy px-5">
            ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
          </p>
        </div>
      </div>
      <Swiper
        v-if="walks"
        :grabCursor="true"
        :wheel="true"
        :slidesPerView="3.3"
        :loop="true"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(walk, index) in walks" :key="index">
          <ItemsWalkingSliderItem
            :imgSrc="walk?.imgSrc"
            :num="walk?.num"
            :title="walk?.title"
          />
        </SwiperSlide>
      </Swiper>
      <div class="pt-[30px]">
        <img
          src="/img/common/star.png"
          class="w-[26px] m-auto pb-[10px]"
          alt="星"
        />
        <h3 class="text-2xl pb-[10px] leading-0 tracking-[-0.18em] text-center">
          ウォーキング
        </h3>
        <h5 class="text-center pb-[30px] text-[#8E795D] opacity-60">Walking</h5>
      </div>
      <img
        v-if="walks"
        :src="walks[activeSlideIndex].mvSrc"
        class="w-full px-5"
        alt="ウォーキング"
        loading="lazy"
        decoding="async"
      />
      <p v-if="walks" class="text-sm pt-[30px] pb-[80px] px-10">{{ walks[activeSlideIndex].description }}</p>
    </div>
    <!-- <ItemsNaraSection /> -->
  </div>
</template>

<style scoped>
.walking .swiper-slide-active {
  background-color: #ebe7e1;
}

.walking .swiper-slide-active img {
  opacity: 1;
}

.aya {
  padding-top: 55px;
  padding-bottom: 60px;
}

.aya-title {
  margin-left: 20px;
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
  background-color: #4e463d;
  width: 220px;
  height: 26px;
  display: grid;
  place-content: center;
  color: white;
  font-size: 12px;
}

.aya-body {
  margin: 0 20px;
  background-color: white;
  border-radius: 0px 32px 0px 32px;
  padding: 50px 0;
}

.aya-left {
  padding-left: 20px;
  -webkit-text-stroke: 1px #4e463d;
  color: transparent;
  font-size: 56px;
}

.aya-name {
  margin-top: -100px;
  margin-bottom: 40px;
}

.aya-name h2 {
  font-size: 56px;
}

.aya-msg {
  letter-spacing: -0.12em;
}

.dummy {
  font-size: 13px;
  letter-spacing: -0.2em;
}
</style>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const walks = ref();
const activeSlideIndex = ref(0);

onMounted(async () => {
  walks.value = await (await fetch("/data/WalkSlider.json")).json();
});

const onSlideChange = (swiper: { realIndex: number }) => {
  activeSlideIndex.value = swiper.realIndex;
};
</script>
