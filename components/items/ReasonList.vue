<template>
  <div class="reason-list">
    <div class="reason-list-title">
      <img
        src="/img/common/star.png"
        alt="星"
        loading="lazy"
        decoding="async"
      />
      <h2>Reason</h2>
      <p class="text-base text-[#4E463D] font-medium hiragino-pro">
        Inspiart Zモデルコースが支持される
      </p>
      <h5 class="text-[28px] text-[#4E463D] font-medium">8つの理由</h5>
    </div>
    <div class="relative z-20">
      <img
        src="/img/reason12/reason1-sm.webp"
        class="w-full"
        alt="理由-sm"
        loading="lazy"
        decoding="async"
      />
      <div class="r-title1">
        <h2 class="number-right satoshi-title">01</h2>
        <h5 class="content-right">
          事務所に依存しない<br />
          モデルが育っているから
        </h5>
      </div>
      <a href="#reason1">
        <img
          src="/img/reason12/toBottom.png"
          class="to-Bottom1"
          alt="下へ"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
    <div class="r-title2 z-30">
      <h2 class="number-left satoshi-title">02</h2>
      <h5 class="content-left">
        カリキュラムが<br />
        しっかりしているから
      </h5>
      <a href="#reason2">
        <img
          src="/img/reason12/toBottom.png"
          class="to-Bottom2"
          alt="下へ"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
    <img
      src="/img/reason12/reason23-sm.avif"
      class="mt-[-120px]"
      alt="理由23-sm"
      loading="lazy"
      decoding="async"
    />
    <div class="r-title3">
      <h2 class="number-right satoshi-title">03</h2>
      <h5 class="content-right">
        クラス分けが<br />
        レベルに応じて丁寧だから
      </h5>
      <a href="#reason3">
        <img
          src="/img/reason12/toBottom.png"
          class="to-Bottom3"
          alt="下へ"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.reason-list {
  padding-top: 60px;
  position: relative;
  background-color: #F5F3F1;
}

.reason-list-title {
  width: 100%;
  position: absolute;
  top: 205px;
  text-align: center;
  z-index: 30;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reason-list-title h2 {
  font-size: 60px;
  padding-bottom: 20px;
  font-family: "Satoshi-BoldItalic" sans-serif;
  font-weight: 700;
  -webkit-text-stroke: 1px #cdbfac;
  color: #fcfbfb;
  font-style: italic;
  line-height: 1;
  opacity: 0.6;
}

.reason-list-title img {
  height: 28px;
  width: 28px;
  margin: auto;
}

.r-title1 {
  transform: translate(-5%, -107%);
}

.number-left {
  text-align: left;
  font-size: 68px;
}

.content-left {
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
}

.number-right {
  text-align: right;
  font-size: 68px;
}

.content-right {
  text-align: right;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
}

.to-Bottom1 {
  border-color: white;
  border-radius: 50%;
  box-shadow: 1px 5px 12px #00000029;
  position: absolute;
  left: 35px;
  bottom: 120px;
  height: 36px;
  width: 36px;
}

.to-Bottom2 {
  border-color: white;
  border-radius: 50%;
  box-shadow: 1px 5px 12px #00000029;
  position: absolute;
  right: -156px;
  bottom: -90px;
  height: 36px;
  width: 36px;
}

.to-Bottom3 {
  border-color: white;
  border-radius: 50%;
  box-shadow: 1px 5px 12px #00000029;
  position: absolute;
  left: 55px;
  bottom: -22px;
  height: 36px;
  width: 36px;
}

.r-title2 {
  position: absolute;
  left: 20px;
  top: 48%;
}

.r-title3 {
  transform: translate(-20px, -205px);
}
</style>
