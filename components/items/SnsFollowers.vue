<template>
  <div class="sns-followers">
    <h2>
      <span>Followers</span>
      <span>Up!</span>
    </h2>
    <img
      src="/img/common/star.png"
      alt="星"
      width="26"
      height="26"
      loading="lazy"
      decoding="async"
      class="w-[26px] h-auto mx-auto mt-[6px]"
    />
    <h3 class="!font-medium">未来こそ可能性！</h3>
    <h4 class="!font-medium">チャレンジする姿が、ファンを作ります!</h4>
    <h5>
      素人状態から頑張ってチャレンジする姿…<br />そんなあなたをファンは応援したいのです！
    </h5>
    <img
      src="/img/reason6/sns-followers.avif"
      alt="フォロウー"
      width="417"
      height="384"
      loading="lazy"
      decoding="async"
      class="min-w-[417px] h-auto mx-[-21px] mt-[24px]"
    />
  </div>
</template>
<style scoped>
.sns-followers {
  padding-top: 46px;
  width: 100%;
  overflow: hidden;
}

.sns-followers > h2 {
  text-align: center;
  font-size: 52px;
  font-family: "Satoshi-BoldItalic", sans-serif;
}

.sns-followers > h2 > span:first-child {
  color: #c2b4a1;
}

.sns-followers > h2 > span:last-child {
  color: transparent;
  -webkit-text-stroke: 1px #c2b4a1;
  margin-left: 8px;
}

.sns-followers > h3 {
  font-size: 24px;
  font-weight: 600;
  margin-top: 14px;
  width: max-content;
  height: 32px;
  margin-inline: auto;
  text-align: center;
  position: relative;
  border-bottom: 6px solid white;
}

.sns-followers > h4 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
  text-align: center;
}

.sns-followers > h5 {
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  margin-top: 18px;
}
</style>
