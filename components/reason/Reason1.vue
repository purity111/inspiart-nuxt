<template>
  <section class="reason1-section bg-[#F5F3F1]">
    
    <img
      src="/img/common/Ribbon.webp"
      class="w-full mb-15"
      alt="ブランド"
      loading="lazy"
      decoding="async"
    />
    <ItemsParallelTitle
      :color="'#C2B4A1'"
      :fSize="18"
      :text="'理想のモデル像って？'"
      class="mt-[60px] mb-[15px]"
      style="width: 255px;"
    />
    <img
      src="/img/reason12/ideal.avif"
      class="w-full pb-10"
      alt="理想"
      loading="lazy"
      decoding="async"
    />
    <h5 class="pt-5 text-center pb-[50px] px-5 text-sm leading-loose tracking-tight">
      今、モデルの寿命も活動の幅も<br />
      どんどん広くなっています！<br />
      事務所の営業活動に依存せず、<br />
      自ら仕事を勝ち取り、充実したモデルライフを<br />
      送っている人がたくさんいます。
    </h5>
    <div class="ideal-model">
      <div class="ideal-model-title">
        <img
          src="/img/common/star.png"
          class="w-[26px] h-[26px] m-auto"
          alt="星"
          loading="lazy"
          decoding="async"
        />
        <h5>InspiartZ卒業生が</h5>
        <h2>理想のモデルになれた理由</h2>
        <p>Ideal model</p>
      </div>
      <div class="relative">
        <ItemsIdealModel
          :cardNumber="'01'"
          :imgSrc="'/img/reason12/ideal-model1.avif'"
          :failText1="'見た目だけに固執している'"
          :failText2="'素材だけで勝負している'"
          :descTitle1="'スキルをマスターしたから！'"
          :descTitle2="'InspiartZ卒業生'"
          :descContent1="'モデルスキルと教養の両方がある'"
          :descContent2="'努力した分の自信がある'"
        />
        <img
          src="/img/reason12/dots-1.png"
          class="w-[64px] absolute bottom-[-90px] right-0 opacity-50"
          alt="dots"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="relative">
        <ItemsIdealModel
          :cardNumber="'02'"
          :imgSrc="'./img/reason12/ideal-model2.webp'"
          :failText1="'周りからの指示が薄い'"
          :failText2="'自分一人では何もできない'"
          :descTitle1="'事務所に依存しなかったから！'"
          :descTitle2="'InspiartZ卒業生'"
          :descContent1="'セルフプロデュース力が高い'"
          :descContent2="'幅広いお仕事に対応できる'"
        />
        <img
          src="/img/reason12/dots-2.png"
          class="z-5 w-[64px] absolute bottom-[-120px] left-0 opacity-50"
          alt="dots"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="relative">
        <ItemsIdealModel
          :cardNumber="'03'"
          :imgSrc="'./img/reason12/ideal-model3.webp'"
          :failText1="'収入源がモデル1本だけ'"
          :failText2="'将来の不安が見た目にも'"
          :descTitle1="'稼ぐ手段を学んだから！'"
          :descTitle2="'InspiartZ卒業生'"
          :descContent1="'稼ぐ手段を何種類か持っている'"
          :descContent2="'年代毎に活躍の仕方を変えられる'"
        />
        <img
          src="/img/reason12/dots-1.png"
          class="absolute bottom-0 right-0 opacity-50"
          alt="dots"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <SectionsChallengeSection style="padding-bottom: 160px" />
  </section>
</template>

<style scoped>
.ideal {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* .ideal-model {
  margin-bottom: 140px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0px 32px 0px 32px;
} */

.ideal-model {
  padding-top: 40px;
  margin: 0 20px;
  background-color: white;
  border-radius: 0px 32px 0px 32px;
}

.ideal-model-title {
  text-align: center;
}

.ideal-model-title h5 {
  font-size: 16px;
  padding-top: 15px;
  line-height: 1;
}

.ideal-model-title h2 {
  font-size: 24px;
  line-height: 1;
  padding-top: 10px;
}

.ideal-model-title p {
  color: #8e795d;
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 40px;
  opacity: 0.6;
}
</style>
