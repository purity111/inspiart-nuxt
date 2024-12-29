<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ref } from "vue";

interface Mentor {
  category: string;
  name: string;
  en_name: string;
  image: string;
  description: string;
  videos: string[];
}

defineProps<{
  mentors: Mentor[];
}>();
const crt_mentor = ref(0);
</script>

<template>
  <div class="border-t border-t-[#E6E1DD]">
    <div class="px-5">
      <ItemsParallelTitle
        :text="'メンター制度'"
        :color="'#C2B4A1'"
        :fSize="18"
        class="!mt-[40px] w-[255px] h-[32px]"
      />
      <p class="text-[13px] font-medium mt-[30px] tracking-[-0.12em] pb-[40px]">
        知識もスキルも兼ね備えた優秀なメンターが常に伴走して、アドバイスしてくれるから安心！
      </p>
    </div>
    <div class="pt-[4px]">
      <div class="flex justify-between items-center">
        <button
          @click="
            crt_mentor > 0 ? crt_mentor-- : (crt_mentor = mentors.length - 1)
          "
          class="w-[50px] h-[50px] content-center rounded-r-full bg-[#4E463D] opacity-80"
        >
          <img
            src="/img/common/arrow-left-white.svg"
            alt="メンターシステム"
            width="8"
            height="12"
            loading="lazy"
            decoding="async"
            class="w-2 h-auto mx-auto"
          />
        </button>
        <div class="flex items-center justify-center gap-[18px]">
          <img
            src="/img/common/star.png"
            alt="メンターシステム"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
            class="w-5 h-auto"
          />
          <h4
            class="text-lg text-[#8E795D] font-medium"
            v-if="mentors[crt_mentor]?.category"
          >
            {{ mentors[crt_mentor]?.category }}
          </h4>
          <img
            src="/img/common/star.png"
            alt="メンターシステム"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
            class="w-5 h-auto"
          />
        </div>
        <button
          @click="
            crt_mentor < mentors.length - 1 ? crt_mentor++ : (crt_mentor = 0)
          "
          class="w-[50px] h-[50px] content-center rounded-l-full bg-[#4E463D] opacity-80"
        >
          <img
            src="/img/common/arrow-left-white.svg"
            alt="メンターシステム"
            width="8"
            height="12"
            loading="lazy"
            decoding="async"
            class="w-2 h-auto rotate-180 mx-auto"
          />
        </button>
      </div>
      <div
        class="bg-white max-w-[355px] shadow-lg mx-auto mt-5 rounded-[7px] overflow-hidden"
      >
        <div class="relative">
          <img
            :src="mentors[crt_mentor]?.image"
            alt="Toshoko"
            width="355"
            height="200"
            loading="lazy"
            decoding="async"
            class="w-full h-auto"
            v-if="mentors[crt_mentor]?.image"
          />
          <h5
            style="writing-mode: vertical-lr"
            class="absolute top-0 left-8 text-xl tracking-[0.2em] font-semibold px-2.5 pt-5 h-full bg-gradient-to-b from-[#4E463D] to-transparent text-white"
            v-if="mentors[crt_mentor]?.name"
          >
            {{ mentors[crt_mentor]?.name }}
          </h5>
          <p
            class="absolute bottom-2 right-2.5 text-white satoshi-mi tracking-wider !font-thin"
          >
            {{ mentors[crt_mentor]?.en_name }}
          </p>
        </div>
        <p class="p-5 text-xs leading-[1.5]">
          {{ mentors[crt_mentor]?.description }}
        </p>
        <div
          class="border-[#EEEEEE] border border-t-0 mt-[20px] h-[1px] mx-5"
        ></div>
        <div class="pt-4 pb-5 px-5">
          <div class="w-full relative">
            <Swiper
              :modules="[Navigation]"
              :navigation="{
                nextEl: '.mentor-swiper-button-next',
                prevEl: '.mentor-swiper-button-prev',
              }"
              :slides-per-view="2"
              :space-between="5"
            >
              <swiper-slide
                v-for="(video, i) in mentors[crt_mentor]?.videos"
                :key="i"
                class="relative"
              >
                <img
                  :src="video"
                  alt="メンターシステム"
                  width="153"
                  height="272"
                  loading="lazy"
                  decoding="async"
                  class="w-[153px] h-auto mx-auto rounded-[7px] brightness-75"
                />
                <img
                  src="/img/reason3/play.png"
                  alt="プレイヤー"
                  class="h-[42px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                />
              </swiper-slide>
            </Swiper>
            <button class="mentor-swiper-button-prev">
              <img
                src="/img/common/arrow-left-bitbrown.svg"
                alt="arrow"
                width="8"
                height="12"
                class="w-2 h-auto mx-auto"
              />
            </button>
            <button class="mentor-swiper-button-next">
              <img
                src="/img/common/arrow-left-bitbrown.svg"
                alt="arrow"
                width="8"
                height="12"
                class="w-2 h-auto mx-auto rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mentor-swiper-button-next,
.mentor-swiper-button-prev {
  width: 30px;
  aspect-ratio: 1;
  border-radius: 100px;
  background-color: white;
  box-shadow: 0 3px 6px #00000033;
  position: absolute;
  top: 50%;
  z-index: 10;
}
.mentor-swiper-button-next {
  right: 0;
  transform: translate(50%, -50%);
}
.mentor-swiper-button-prev {
  left: 0;
  transform: translate(-50%, -50%);
}
</style>
