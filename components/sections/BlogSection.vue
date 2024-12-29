<template>
  <div class="bg-[#F5F3F1] pb-[95px]">
    <div class="px-5 relative pt-[5px]">
      <div
        class="w-[184px] aspect-square rounded-full bg-[#F5F3F1] -mt-10 pt-[60px] mx-auto"
      >
        <img
          src="/img/common/star.png"
          width="26"
          height="26"
          alt="星"
          loading="lazy"
          decoding="async"
          class="w-[26px] h-auto mx-auto"
        />
        <h2 class="text-2xl text-center mt-[10px]">ブログ</h2>
        <h3 class="text-center text-[#8E795D96] mt-[10px]">Blog</h3>
      </div>
    </div>
    <div class="w-full overflow-hidden px-5 mt-4">
      <Swiper
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.mentor-swiper-button-next',
          prevEl: '.mentor-swiper-button-prev',
        }"
        :slides-per-view="1.4"
        :space-between="20"
        class="!overflow-visible"
      >
        <swiper-slide v-for="(blog, i) in blogs" :key="i">
          <div
            class="min-w-[235px] max-w-[235px] bg-white overflow-hidden rounded-bl-[20px] rounded-tr-[20px] relative drop-shadow-lg"
          >
            <img
              :src="blog.image"
              :alt="blog.title"
              width="235"
              height="182"
              loading="lazy"
              decoding="async"
              class="w-full h-auto"
            />
            <div class="p-2.5">
              <p class="text-[10px] font-medium text-[#8E795D]">
                {{ blog.createdAt }}
              </p>
              <h5 class="text-[13px] font-semibold mt-2">{{ blog.title }}</h5>
              <p class="text-[11px] mt-2.5 font-medium">
                {{ blog.description }}
              </p>
              <button
                class="block w-[215px] h-[34px] bg-transparent font-medium text-xs rounded-full relative border border-[#B6B0AB] mt-7 mx-auto"
              >
                この記事を見る
                <img
                  src="/img/reason8/arrow-down.svg"
                  alt="arrow"
                  width="12"
                  height="8"
                  loading="lazy"
                  decoding="async"
                  class="w-3 h-auto absolute right-3 top-1/2 -translate-y-1/2 -rotate-90"
                />
              </button>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
      <button
        class="block w-[275px] h-[52px] bg-transparent font-semibold text-sm rounded-full relative border border-[#B6B0AB] mt-7 mx-auto"
      >
        もっと見る
        <img
          src="/img/reason8/arrow-down.svg"
          alt="arrow"
          width="12"
          height="8"
          loading="lazy"
          decoding="async"
          class="w-3 h-auto absolute right-5 top-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const blogs = [
  {
    title: "代官山スタジオ近辺のオススメスポット情報",
    description:
      "ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。…",
    image: "/img/reason8/blog-1.webp",
    createdAt: "2022/12/01",
  },
  {
    title: "代官山スタジオ近辺のオススメスポット情報",
    description:
      "ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。…",
    image: "/img/reason8/blog-2.webp",
    createdAt: "2022/12/01",
  },
  {
    title: "代官山スタジオ近辺のオススメスポット情報",
    description:
      "ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。…",
    image: "/img/reason8/blog-1.webp",
    createdAt: "2022/12/01",
  },
  {
    title: "代官山スタジオ近辺のオススメスポット情報",
    description:
      "ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。ブログ記事抜粋。…",
    image: "/img/reason8/blog-2.webp",
    createdAt: "2022/12/01",
  },
];
</script>
