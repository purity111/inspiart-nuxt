<template>
  <section class="top bg-[#F5F3F1]">
    <ItemsMenu />
    <div class="relative w-full">
      <img
        class="w-full h-[600px]"
        src="/img/reason12/MV.avif"
        alt="ファーストビュー"
        loading="lazy"
        decoding="async"
      />
      <img
        class="absolute top-[25px] px-4 left-0"
        src="/img/reason12/logo-sm.webp"
        alt="白いロゴ"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="feature">
      <h2>Features</h2>
      <img
        src="/img/reason12/3-spec.webp"
        class="spec"
        alt="特徴"
        loading="lazy"
        decoding="async"
      />
      <hr />
      <img
        src="/img/reason12/campaign.webp"
        class="campaign"
        alt="キャンペーン"
        loading="lazy"
        decoding="async"
      />
    </div>
  </section>
</template>

<style scoped>
.feature {
  padding-top: 40px;
}

.feature h2 {
  line-height: 0;
  font-size: 60px;
  color: white;
  margin-top: 20px;
  margin-left: -5px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.feature hr {
  margin-top: 84px;
  margin-bottom: -84px;
  position: relative;
  border: 1px solid #716d6a;
  width: 100%;
  height: 1px;
}

.spec {
  margin-top: 10px;
  width: 375px;
  height: 170px;
  padding: 0 5px 30px 5px;
}

.campaign {
  width: 375px;
  height: 712px;
  box-shadow: 0 3px 6px #00000029;
  position: relative;
  z-index: 30;
}
</style>
