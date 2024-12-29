<template>
  <div class="audition-section">
    <div class="text-center">
      <img src="/img/common/star.png" class="w-[26px] m-auto pb-5" alt="star" />
      <h2 class="text-2xl pb-4 leading-0 tracking-[-0.18em]">
        オーディション/ミスコン
      </h2>
      <h5 class="text-center pb-[30px] text-[#8E795D] opacity-60">
        Audition / Miss Contest
      </h5>
      <p
        class="pb-[60px] px-5 text-sm leading-[1.8] text-left tracking-[-0.2em]"
      >
        モデルオーディション、タレントやアイドのオーディション、各種ミスコンにチャレンジします
      </p>
      <div
        class="w-full h-[1px] border border-[#E6E1DD] border-b-0 mb-10"
      ></div>
      <img
        src="/img/reason4/audition.webp"
        class="px-5"
        alt="オーディション"
        loading="lazy"
        decoding="async"
      />
      <div class="interview">
        <h2 class="text-xl text-center leading-[1]">ポートフォリオ審査/面接</h2>
        <p class="tracking-[-0.12em]">
          お仕事をもらったとき、<br />また次もお仕事をもらえるかはあなた次第。
        </p>
        <div class="impossible">
          <h5 class="text-center text-xs pt-[30px]">
            本気のあなただから、<br />正直にお伝えします。
          </h5>
          <h2 class="text-xl text-center p-5">一発合格はほぼ不可能です</h2>
          <p>
            オーディションに来る人は全員本気。少なからず運の味方も必要になる、厳しい世界です。わかっていても、落ちると悲しくなってしまうもの。
            そしてチャレンジすることが怖くなってしまうのです。
          </p>
          <img
            src="/img/reason4/warn.png"
            class="absolute right-[-10px] top-[-10px] opacity-30"
            alt="警告"
            loading="lazy"
            decoding="async"
          />
        </div>
        <img
          src="/img/reason4/badge.png"
          class="badge"
          alt="バッジ"
          loading="lazy"
          decoding="async"
        />
        <div class="relative mt-8">
          <img
            src="/img/reason4/chance-bg.png"
            alt="チャンス"
            class="w-full pt-10 px-5"
            loading="lazy"
            decoding="async"
          />
          <div class="chance">
            <h5 class="text-base text-center pb-5">諦める人がいる、それは</h5>
            <h2 class="text-center text-2xl tracking-[-0.12em] leading-[1.5]">
              続ける人にとっての<br />
              チャンスです
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.audition-section {
  border-radius: 0 32px 0 32px;
  padding-top: 40px;
  margin: 0 20px;
  margin-top: 35px;
  background-color: #fcfbfb;
}

.interview {
  padding-top: 30px;
  padding-bottom: 50px;
}

.interview p {
  font-size: 13px;
  text-align: center;
  padding-top: 20px;
}

.impossible {
  position: relative;
  border-radius: 0 28px 0 28px;
  background-color: #e6e1dd;
  height: 320px;
  margin: 20px 20px 0;
}

.impossible p {
  font-size: 13px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  padding-top: 0 !important;
}

.badge {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.chance {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}
</style>
