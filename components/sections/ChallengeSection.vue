<template>
  <div class="challenge">
    <img
      src="/img/reason12/challenge.webp"
      class="w-full pl-5 absolute right-0 top-[-80px]"
      style="border-top-left-radius: 32px"
      alt="挑戦"
      loading="lazy"
      decoding="async"
    />
    <div class="relative z-10 pt-[70px]">
      <h2 class="lets satoshi-bi">Let's</h2>
      <h2 class="text-6xl text-white text-right pr-5 pb-[15px] satoshi-bi">Challenge</h2>
      <ItemsParallelTitle
        :color="'white'"
        :fSize="14"
        :text="'#モデル、インスタグラマーになろう！'"
        class="bg-white"
        style="margin-top: 0; margin-left: 40px"
      />
      <img
        src="/img/reason12/star2.png"
        class="w-6 m-auto pt-[15px] pb-[13px]"
        alt="白い星"
        loading="lazy"
        decoding="async"
      />
      <p class="white text-sm text-center text-white">
        Inspiart Zモデル専科が<br />
        あなたの夢を実現します
      </p>
    </div>
    <h2 class="check-it">Check it!</h2>
    <ItemsApplyCardCom
      :bgColor="'#E1CBC8'"
      :title1="'まずは試してみたい！という方へ'"
      :title2="'体験入学開催'"
      :leftContent="'Trial admission'"
      :rightContent="'For new students'"
      :imgSrc="'/img/reason12/premium.webp'"
      :btnTitle="'体験入学（有料）'"
      class="mb-[60px] mt-[70px]"
    />
    <ItemsApplyCardCom
      :bgColor="'#C7D5E1'"
      :title1="'まだちょっと迷っている…という方は'"
      :title2="'無料カウンセリング'"
      :leftContent="'Free counseling'"
      :rightContent="'Free counseling'"
      :imgSrc="'/img/reason12/free.webp'"
      :btnTitle="'無料カウンセリング'"
    />
  </div>
</template>

<style scoped>
.challenge {
  background: url("/img/common/challenge-bg.avif");
  position: relative;
  padding-bottom: 120px;
  margin-top: 140px;
}

.check-it {
  padding-top: 45px;
  color: #e1cbc8;
  transform: rotate(-5deg);
  font-size: 64px;
  line-height: 1;
  font-family: 'Antro Vectra', sans-serif;
  letter-spacing: -0.08em;
}

.lets {
  -webkit-text-stroke: 1px white;
  color: transparent;
  font-size: 60px;
  padding-left: 40px;
  line-height: 1;
}
</style>