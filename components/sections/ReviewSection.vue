<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// const commentShowNum = 
</script>

<template>
  <div class="relative bg-[#F5F3F1]">
    <div class="circle"></div>
    <div class="recruit-top z-20 relative text-center pt-5">
      <img src="/img/common/star.png" class="w-[26px] m-auto" alt="星" />
      <h2 class="pt-5 pb-[10px] text-base leading-[1]">未来を変えつつある</h2>
      <h2 class="text-2xl pb-5 leading-[1]">卒業生・在学生の声</h2>
      <h5 class="text-[#8E795D] text-base opacity-60">Voice</h5>
    </div>
    <div class="voice-slider overflow-hidden pt-9 relative">
      <Swiper
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.voice-swiper-button-next',
          prevEl: '.voice-swiper-button-prev',
        }"
        :slides-per-view="1.7"
        :space-between="-30"
        :centered-slides="true"
        class="!overflow-visible !pb-2"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <ItemsVoiceSliderItem
            :snsUrl="'/img/reason4/facebook-icon.png'"
            :avatarUrl="'/img/reason4/avatar.webp'"
            :voiceString="'代官山スタジオについての感想や、コースについての評価など。代官山スタジオについての感想や、コースについての評価など。代官山…'"
            :name="'高谷 蒼汰'"
            :timeAgo="18"
            :shareNum="52"
            :commentNum="12"
            :allLikes="92"
            :mvUrl="'/img/reason4/voice-mv.webp'"
          />
        </SwiperSlide>
      </Swiper>
      <button
        class="voice-swiper-button-prev w-[50px] h-[50px] rounded-r-full top-11 left-0 absolute bg-[#4E463D]"
      >
        <img
          src="/img/common/arrow-left-white.svg"
          alt="arrow"
          width="8"
          height="12"
          class="w-2 h-auto mx-auto"
        />
      </button>
      <button
        class="voice-swiper-button-next w-[50px] h-[50px] rounded-l-full top-11 right-0 absolute bg-[#4E463D]"
      >
        <img
          src="/img/common/arrow-left-white.svg"
          alt="arrow"
          width="8"
          height="12"
          class="w-2 h-auto mx-auto rotate-180"
        />
      </button>
    </div>
    <div class="shadow-[0px_-10px_20px_#00000066] pt-[1px]">
      <div class="mx-5 mt-4">
        <div class="flex mb-5 hiragino">
          <div class="bg-[#222222] h-5 w-[3px] mr-[10px] leading-1"></div>
          <h5>会員からの評価とコメント</h5>
        </div>
        <div class="flex pl-[10px] pr-[26px] justify-between">
          <ItemsCommentItem
            :startLetter="'S'"
            :mark="5.0"
            :totalNumber="6"
            :titleLg="'体験'"
            :titleSm="'での評価'"
            :starUrl="'/img/reason4/star-blue.png'"
            :chartUrl="'/img/reason4/spider-blue.webp'"
          />
          <ItemsCommentItem
            :startLetter="'A'"
            :mark="4.0"
            :totalNumber="4"
            :titleLg="'通って'"
            :titleSm="'みた評価'"
            :starUrl="'/img/reason4/star-red.png'"
            :chartUrl="'/img/reason4/spider-red.webp'"
          />
        </div>
      </div>
      <div
        class="bg-[#F8F8F8] pt-[15px] pb-[12px] pl-[25px] flex justify-start gap-[26px]"
      >
        <div class="avatar-info">
          <img
            src="/img/reason4/avatar.webp"
            class="comment-avatar"
            alt="アバター"
            loading="lazy"
            decoding="async"
          />
          <div class="text-center w-fix-content">
            <span class="text-sm">高谷 蒼汰</span>
            <span class="text-xs">さん</span>
          </div>
          <p class="person-info">20代 / 男性 / 生徒</p>
        </div>
        <div class="">
          <div class="flex justify-start gap-2 items-center mb-[5px]">
            <p class="bg-white grid place-content-center h-[22px] w-[53px]">
              ジャンル
            </p>
            <p>音楽</p>
          </div>
          <div class="flex justify-start gap-2 items-center mb-[5px]">
            <p class="bg-white grid place-content-center h-[22px] w-[53px]">
              コース
            </p>
            <p>ギター</p>
          </div>
          <div class="flex justify-start gap-2 items-center mb-[15px]">
            <p class="bg-white grid place-content-center h-[22px] w-[53px]">
              講師
            </p>
            <p>古川香織 講師</p>
          </div>
          <p class="mb-1">
            無料体験レッスン受講日<span class="pl-[18px]"></span>2019年8月20日
          </p>
          <p>入会した時期<span class="pl-[14px]"></span>2019年8月20日</p>
        </div>
      </div>
      <ItemsReviewMark
        :title="'体験レッスン'"
        :review1="'設備・雰囲気'"
        :review2="'カリキュラム'"
        :review3="'コスパ'"
        :review4="'講師'"
        :review5="'予約システム'"
        :mark1="4.0"
        :mark2="5.0"
        :mark3="4.0"
        :mark4="5.0"
        :mark5="5.0"
        :description="'初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。'"
      />
      <div class="border border-t-0 border-[#DDDDDD] mx-5"></div>
      <ItemsReviewMark
        :title="'体験レッスン'"
        :review1="'設備・雰囲気'"
        :review2="'カリキュラム'"
        :review3="'コスパ'"
        :review4="'講師'"
        :review5="'予約システム'"
        :mark1="4.0"
        :mark2="3.0"
        :mark3="4.0"
        :mark4="3.0"
        :mark5="4.0"
        :description="'初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできる'"
      />
      <ItemsMoreComments
        :text="'詳しく見る'"
        :color="'#4E463D'"
        class="m-auto mt-[12px]"
      />
    </div>
  </div>
</template>

<style scoped>
.star {
  width: 26px;
  z-index: 20;
}

.hiragino {
  font-family: "Hiragino Sans", sans-serif;
}

.circle {
  position: absolute;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  transform: translateX(-50%);
  left: 50%;
  top: -40px;
  background-color: #f5f3f1;
}

.comment-avatar {
  box-shadow: 0px 5px 10px #b7b7b7fa;
  border-radius: 50%;
  max-width: 90px;
}

.person-info {
  font-size: 10px;
  text-align: center;
}

p {
  font-size: 10px;
}

.apart {
  font-size: 13px;
}

.mark-lg {
  font-size: 17px;
  color: red;
}

.voice-slider .swiper-slide-active {
  position: relative;
  z-index: 10;
}
.voice-slider .swiper-slide:not(.swiper-slide-active) {
  opacity: 0.6;
  position: relative;
  top: 66px;
}
</style>
