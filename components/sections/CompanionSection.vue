<template>
  <div
    class="max-w-[335px] w-full mx-auto bg-white rounded-bl-[32px] rounded-tr-[32px] pt-10 mt-10 overflow-hidden"
  >
    <img
      src="/img/common/star.png"
      alt="仲間"
      width="26"
      height="26"
      loading="lazy"
      decoding="async"
      class="w-[26px] h-auto mx-auto"
    />
    <h2 class="text-2xl text-center font-medium mt-[10px]">コンパニオン編</h2>
    <h3 class="text-center satoshi text-[#8E795D96] mt-[14px] opacity-60">
      Companion
    </h3>
    <h4 class="text-lg text-center mt-9 font-medium">
      コンパニオン派遣で高時給収入
    </h4>
    <p class="text-sm text-center mt-[11px]">
      イベント・ショールームコンパニオン<br />として派遣します
    </p>
    <div class="pt-9">
      <div
        v-for="(companion, i) in companions"
        :key="i"
        class="w-full py-[30px] border-t border-t-[#E6E1DD] pl-[30px] pr-5 flex gap-[23px] items-center relative"
      >
        <span class="ranking">0{{ i + 1 }}</span>
        <img
          :src="companion.banner"
          alt="仲間"
          width="110"
          height="110"
          loading="lazy"
          decoding="async"
          class="w-[110px] h-auto rounded-full"
        />
        <div>
          <h5 class="font-medium leading-[22px]" v-html="companion.title" />
          <h6
            class="font-medium mt-3 text-[13px] leading-5"
            v-html="companion.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ranking {
  font-size: 26px;
  font-family: "Satoshi-BoldItalic", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #c2b4a1;
  position: absolute;
  top: 30px;
  left: 20px;
  line-height: 35px;
}
</style>
<script lang="ts" setup>
const companions = [
  {
    title: "受付・<br>インフォメーション",
    banner: "/img/reason7/company-1.avif",
    description: "ブース来場者の応対<br>案内業務",
  },
  {
    title: "ブース対応&<br>商品展示コーナー",
    banner: "/img/reason7/company-2.avif",
    description: "ブース誘引、<br>説明員業務",
  },
  {
    title: "サンプリング",
    banner: "/img/reason7/company-3.webp",
    description: "ブース周辺での<br>サンプリング業務",
  },
];
</script>
