<template>
  <section class="reason5-section bg-[#F5F3F1] shadow-md">
    
    <SectionsScoutsSections />
    <SectionsAuditionSection />
    <SectionsChallengeSection />
    <div class="points">
      <ItemsParallelTitle
        :color="'#C2B4A1'"
        :fSize="18"
        :text="'3つのサポート'"
        class="!mt-0 !w-[255px] !p-0"
      />
      <h4 class="text-base text-center pt-[30px] pb-[20px] leading-[1] tracking-[-0.14em]">
        デイリーチャットコーチングで
      </h4>
      <h2 class="text-center text-2xl mb-[60px]">
        スクール生を<br />
        毎日徹底サポート
      </h2>
      <ItemsPointItem
        :imgSrc="'/img/reason4/point1.webp'"
        :iconSrc="'/img/common/star.png'"
        :title="'毎日のケア'"
        :content="'オーディション前後に限らず、普段から何気ないやり取りを重ねて、僅かなメンタルの変化もキャッチ'"
        :dir="'left'"
      />
      <ItemsPointItem
        :imgSrc="'/img/reason4/point2.webp'"
        :iconSrc="'/img/common/star.png'"
        :title="'チャットサポート'"
        :content="'一人だと継続が難しい体型管理も、マネージャーが二人三脚で目標達成まで徹底的にサポート'"
        :dir="'right'"
      />
      <ItemsPointItem
        :imgSrc="'/img/reason4/point3.webp'"
        :iconSrc="'/img/common/star.png'"
        :title="'コーチング'"
        :content="'敏感な年頃だからこそ、家族や友達ににも言えない悩みがあります。そんな時はマネージャーが相談相手に'"
        :dir="'left'"
        class="mt-[50px]"
      />
      <div class="continue">
        <h3 class="satoshi-bi">If you want to<br />Change the future,<br />keep going</h3>
        <h2 class="leading-[1.3]">
          継続すると<br />
          未来が変わる！
        </h2>
        <img
          src="/img/reason5/point4.avif"
          class="absolute bottom-[-50px] right-[13px] w-[118px] w-[266px]"
          alt="sitting"
          loading="lazy"
          decoding="async"
        />
      </div>
      <SectionsReviewSection />
    </div>
  </section>
</template>

<style scoped>
.challenge {
  background: url("/img/common/challenge-bg.avif");
  position: relative;
  padding-bottom: 80px;
  margin-top: 140px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: white;
}

.check-it {
  color: #e1cbc8;
  transform: rotate(-5deg);
  font-size: 64px;
}

.points {
  padding-top: 70px;
  background-color: white;
}

.continue {
  margin-top: 50px;
  position: relative;
  width: 100%;
}

.continue h3 {
  padding: 5px;
  font-size: 60px;
  color: #F5F3F1;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 120px;
}

.continue h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
}
</style>
