<template>
  <div class="relative">
    <h2 class="out-title">Classroom</h2>
    <div
      class="max-w-[335px] w-full mx-auto font-semibold bg-[#F5F3F1] mt-10 rounded-bl-[32px] rounded-tr-[32px] overflow-hidden"
    >
      <div
        class="w-full bg-[url('/img/reason8/classroom-top-bg.webp')] bg-contain bg-top bg-no-repeat relative pt-[51px] text-center overflow-hidden"
      >
        <span class="out-title-in">Classroom</span>
        <img
          src="/img/reason8/star.svg"
          alt="星"
          width="26"
          height="26"
          loading="lazy"
          decoding="async"
          class="w-[26px] h-auto mx-auto"
        />
        <h3 class="text-center font-medium mt-3">東京・大阪・名古屋の</h3>
        <h4 class="text-2xl text-center font-medium mt-1">教室で参加</h4>
        <h5 class="text-center text-sm satoshi text-white mt-[15px]">
          Classroom
        </h5>
        <img
          src="/img/reason8/classroom-top-banner.webp"
          alt="教室トップバーナー"
          width="295"
          height="209"
          loading="lazy"
          decoding="async"
          class="w-[295px] h-auto mx-auto mt-[26px] rounded-tr-[32px] rounded-bl-[32px]"
        />
      </div>
      <div class="pt-[42px]">
        <h3 class="text-center text-xl font-medium">
          リアルな繋がりが生まれる
        </h3>
        <p class="px-5 text-sm font-medium mt-2">
          リアルな教室空間で得られるものは、切磋琢磨できる仲間との絆と講師との繋がり
        </p>
        <div class="flex mt-[44px] justify-between">
          <img
            src="/img/reason8/classroom-b1.webp"
            alt="スマイル"
            width="83"
            height="83"
            loading="lazy"
            decoding="async"
            class="w-[83px] h-auto"
          />
          <img
            src="/img/reason8/classroom-b2.webp"
            alt="スマイル"
            width="83"
            height="83"
            loading="lazy"
            decoding="async"
            class="w-[83px] h-auto"
          />
          <img
            src="/img/reason8/classroom-b3.webp"
            alt="スマイル"
            width="83"
            height="83"
            loading="lazy"
            decoding="async"
            class="w-[83px] h-auto"
          />
          <img
            src="/img/reason8/classroom-b4.webp"
            alt="スマイル"
            width="83"
            height="83"
            loading="lazy"
            decoding="async"
            class="w-[83px] h-auto"
          />
        </div>
        <div class="flex flex-col px-5 pt-6 pb-[18px]">
          <div v-for="(region, i) in regions" :key="i" class="w-full">
            <h4 class="region-title !font-medium">{{ region.title }}</h4>
            <div
              v-for="(sub, j) in region.subs"
              :key="j"
              class="w-full mt-5 relative"
            >
              <div class="absolute bottom-0 right-0">
                <div class="relative">
                  <div class="ellipse">
                    <h5 class="text-center text-xs rotate-[45deg]">
                      {{ sub.title }}
                    </h5>
                  </div>
                </div>
              </div>
              <img
                :src="sub.banner"
                alt="教室"
                width="335"
                height="207"
                loading="lazy"
                decoding="async"
                class="w-full h-auto rounded-bl-[28px] rounded-tr-[28px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const regions = [
  {
    title: "東京",
    subs: [
      {
        title: "代官山",
        banner: "/img/reason8/classroom-1.avif",
      },
      {
        title: "銀座",
        banner: "/img/reason8/classroom-1.avif",
      },
    ],
  },
  {
    title: "大阪",
    subs: [
      {
        title: "梅田",
        banner: "/img/reason8/classroom-1.avif",
      },
    ],
  },
  {
    title: "愛知",
    subs: [
      {
        title: "名古屋",
        banner: "/img/reason8/classroom-1.avif",
      },
    ],
  },
];
</script>

<style scoped>
.out-title {
  font-size: 56px;
  line-height: 70px;
  font-family: "Satoshi-BoldItalic", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #c6d5e1;
  position: absolute;
  left: 20px;
  top: -44px;
}

.out-title-in {
  font-size: 56px;
  line-height: 70px;
  font-family: "Satoshi-BoldItalic", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  position: absolute;
  top: -44px;
  left: 0;
}

.region-title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 36px;
  width: max-content;
  margin-inline: auto;
  text-align: center;
  display: flex;
  gap: 20px;
}

.region-title::before,
.region-title::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 25px;
  border-radius: 1px;
  background-color: #c2b4a1;
  transform: rotate(30deg);
}

.ellipse {
  clip-path: ellipse(50% 26% at 50% 50%);
  width: 83px;
  height: 83px;
  transform: rotate(-45deg);
  background-color: #c6d5e1;
  display: grid;
  place-content: center;
}
</style>
