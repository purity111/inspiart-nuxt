<template>
  <div class="relative bg-[#F5F3F1]">
    <div class="circle"></div>
    <div class="recruit-top z-20 relative text-center pt-5">
      <img src="/img/common/star.png" class="w-[26px] m-auto" alt="星" />
      <h2 class="text-2xl py-5 tracking-[-0.08em]">お申し込みステップ</h2>
      <h5 class="text-[#8E795D] text-base opacity-60">Step</h5>
    </div>
    <div class="pt-[60px] pb-[60px] relative z-20">
      <ItemsStepItem
        :num="'01'"
        :title="'見学・面談'"
        :content="'メール、電話等でお申込下さい。'"
        :imgSrc="'/img/reason3/01.webp'"
      />
      <ItemsStepItem
        :num="'02'"
        :title="'スクール説明'"
        :content="'当モデルスクールのご説明させて頂きます。'"
        :imgSrc="'/img/reason3/02.svg'"
      />
      <ItemsStepItem
        :num="'03'"
        :title="'必要書類のご提出'"
        :content="'申込書、身分証明書、同意書、誓約書等ご提出お願い致します。'"
        :imgSrc="'/img/reason3/03.webp'"
      />
      <ItemsStepItem
        :num="'04'"
        :title="'入学金・受講料ご納入'"
        :content="'ご納入が確認取れましたらレッスンスケジュールをお送り致します'"
        :imgSrc="'/img/reason3/04.webp'"
      />
      <ItemsStepItem
        :num="'05'"
        :title="'受講開始'"
        :content="'コースの説明や自己紹介などがあります。'"
        :imgSrc="'/img/reason3/05.webp'"
      />
      <ItemsStepItem
        :num="'06'"
        :title="'撮影'"
        :content="'プロのカメラマンによる撮影を致します。目指す方向性を確認しながらそれに合った撮影をしていきます。'"
        :imgSrc="'/img/reason3/06.svg'"
      />
    </div>
  </div>
</template>

<style scoped>
.star {
  width: 26px;
  z-index: 20;
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
</style>
