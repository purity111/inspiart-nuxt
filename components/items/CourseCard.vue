<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
const props = defineProps<{
  course: {
    bgColor: string;
    baseColor1: string;
    baseColor2: string;
    baseColor3: string;
    num: string;
    cardBadge: string;
    title1: string;
    title2: string;
    imgSrc: string;
    badgeSrc: string;
    courseDescription: string;
    recommend1Up: string;
    recommend1Down: string;
    recommend2Up: string;
    recommend2Down: string;
    recommendImg1: string;
    recommendImg2: string;
    hissuTitle1: string;
    hissuTitle2: string;
    hissuCaption: string;
    showNum: number;
    session: {
      imgSrc: string;
      sessionNum: string;
      sessionTitle: string;
      sessionItems: string[];
      point: string;
    }[];
  };
}>();

const showNumber = ref(props.course?.showNum);
const activeIndex = ref(0);

onMounted(() => {
  showNumber.value = props.course?.showNum;
  console.log(props.course?.baseColor1);
  
});

const showAllSessions = () => {
  if (showNumber.value === props.course?.showNum)
    showNumber.value = props.course?.session?.length;
  else showNumber.value = props.course?.showNum;
};

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};

const getItemStyle = (index : number) => {
  return activeIndex.value === index
    ? { backgroundColor: props.course?.baseColor1, color: 'white', padding: '15px 17px 8px 17px', borderRadius: '0 12px 0 0'} 
    : { backgroundColor: 'white', color: '#8E795D', padding: '15px 10px 8px 10px'}; 
};
</script>

<template>
  <div
    class="relative mx-5 pt-[50px] rounded-bl-[28px]"
    :style="{ backgroundColor: course?.bgColor }"
  >
    <div class="absolute top-[-20px] right-[-10px]">
      <div class="relative">
        <img
          :src="course?.badgeSrc"
          class="w-[92px]"
          alt="プロバッジ"
          loading="lazy"
          decoding="async"
        />
        <h2 class="badge-num">{{ course?.num }}</h2>
      </div>
    </div>
    <div class="card-badge" :style="{ backgroundColor: course?.baseColor1 }">
      {{ course?.cardBadge }}
    </div>
    <h2
      class="title1"
      :style="{ WebkitTextStroke: '1px ' + course?.baseColor2 }"
    >
      {{ course?.title1 }}
    </h2>
    <h2 class="title2" :style="{ color: course?.baseColor2 }">
      {{ course?.title2 }}
    </h2>
    <img
      :src="course?.imgSrc"
      class="mt-[-20px] w-[295px]"
      alt="プロメインビュー"
      loading="lazy"
      decoding="async"
    />
    <p class="pt-[40px] pb-[55px] px-5 text-sm">
      {{ course?.courseDescription }}
    </p>
    <hr class="border border-[#E6E1DD] border-b-0" />
    <h5 class="text-base text-center py-4 text-[#8E795D]">
      こんな方におすすめ
    </h5>
    <hr class="border border-[#E6E1DD] border-b-0" />
    <div class="pt-5 flex justify-center">
      <div class="recommend">
        <img
          :src="course?.recommendImg1"
          class="w-[80px] m-auto"
          alt="おすすめ1"
          loading="lazy"
          decoding="async"
        />
        <p>{{ course?.recommend1Up }}<br />{{ course?.recommend1Down }}</p>
      </div>
      <div class="mx-10 border border-[#E6E1DD] border-r-0"></div>
      <div class="recommend">
        <img
          :src="course?.recommendImg2"
          class="w-[80px] m-auto"
          alt="おすすめ2"
          loading="lazy"
          decoding="async"
        />
        <p>{{ course?.recommend2Up }}<br />{{ course?.recommend2Down }}</p>
      </div>
    </div>
    <hr class="border border-[#E6E1DD] mt-5 border-t-0" />
    <div class="my-[36px]">
      <img src="/img/common/star.png" class="w-[28px] m-auto" alt="星" />
      <h4 class="hissu-title1">{{ course?.hissuTitle1 }}</h4>
      <h4 class="text-2xl text-center">{{ course?.hissuTitle2 }}</h4>
      <h5
        class="text-center text-base pt-3 opacity-60 satoshi"
        :style="{ color: course?.baseColor3 }"
      >
        {{ course?.hissuCaption }}
      </h5>
    </div>
    <hr class="border border-[#E6E1DD] border-t-0" />
    <div v-for="(item, i) of course?.session.slice(0, showNumber)" :key="i">
      <ItemsSessionItem
        :num="item.sessionNum"
        :text="item.sessionTitle"
        :letterColor="'#CBA8A4'"
      />
    </div>
    <ItemsMoreBtn
      @click="showAllSessions"
      :color="'#B6B0AB'"
      class="m-auto mt-[30px] mb-[50px]"
      :text="'もっと見る'"
    />

    <div class="relative">
      <Swiper
        v-if="course?.session"
        :modules="[Navigation, Pagination]"
        :pagination="false"
        :navigation="{
          nextEl: '.session-swiper-button-next',
          prevEl: '.session-swiper-button-prev',
        }"
        :slidesPerView="1"
        :centered-slides="true"
        :loop="true"
        @slideChange="onSlideChange"
        class="!pt-[35px]"
      >
        <div class="custom-pagination">
          <div v-for="(item, index) in course?.session" :key="index">
            <span class="custom-bullet" :style="getItemStyle(index)">{{
              item.sessionNum
            }}</span>
          </div>
        </div>
        <SwiperSlide v-for="(item, index) in course?.session" :key="index">
          <ItemsSessionSlider
            :imgSrc="item?.imgSrc"
            :num="item?.sessionNum"
            :title="item?.sessionTitle"
            :items="item?.sessionItems"
            :point="item?.point"
            :baseColor="course?.baseColor1"
            v-if="course?.session"
          />
        </SwiperSlide>
      </Swiper>
      <button class="session-swiper-button-prev left-[-10px]">
        <img
          src="/img/common/btn.png"
          alt="ページネーション"
          class="w-[12px] h-auto mx-auto opacity-60 rotate-90"
        />
      </button>
      <button class="session-swiper-button-next right-[-10px]">
        <img
          src="/img/common/btn.png"
          alt="ページネーション"
          class="w-[12px] h-auto mx-auto opacity-60 -rotate-90"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.badge-num {
  font-size: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: 1px white;
  font-family: "Satoshi-BoldItalic", sans-serif;
  color: transparent;
}

.card-badge {
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
  background-color: #c2b4a1;
  width: 202px;
  height: 24px;
  font-size: 12px;
  display: grid;
  place-content: center;
}

.title1 {
  padding: 20px;
  padding-bottom: 0px;
  font-size: 52px;
  line-height: 1.2;
  color: transparent;
  font-family: "Satoshi-BoldItalic", sans-serif;
}

.title2 {
  padding: 0 20px;
  font-size: 52px;
  padding-right: 26px;
  text-align: right;
  line-height: 1.2;
  position: relative;
  z-index: 20;
  font-family: "Satoshi-BoldItalic", sans-serif;
}

.hissu-title1 {
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  letter-spacing: -0.16em;
}
.recommend p {
  padding-top: 15px;
  font-size: 13px;
}

.session-swiper-button-next,
.session-swiper-button-prev {
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.16);
  position: absolute;
  top: 90px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  z-index: 20;
}

.active {
  background-color: red;
}
</style>
