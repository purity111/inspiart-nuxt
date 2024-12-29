<template>
  <div class="menu">
    <div class="p-2.5 px-3 bg-white flex items-center justify-between">
      <div class="gap-[15px] flex items-center justify-center">
        <img
          src="/img/reason12/logo.webp"
          alt="ロゴ"
          class="h-[30px]"
          loading="lazy"
          decoding="async"
        />
        <p class="logo-title">powered by EYS-STYLE</p>
      </div>
      <div class="hamburger"></div>
    </div>
    <div class="sub-menu">
      <h5>コース一覧</h5>
      <div
        class="w-[1px] h-[15px] border border-[#444444] border-l-0 mt-[4px]"
      ></div>
      <h5>受講料金</h5>
      <div
        class="w-[1px] h-[15px] border border-[#444444] border-l-0 mt-[4px]"
      ></div>
      <h5>スタジオ</h5>
      <div
        class="w-[1px] h-[15px] border border-[#444444] border-l-0 mt-[4px]"
      ></div>
      <h5>講師紹介</h5>
    </div>
    <!-- <div class="bg-[#444444] h-[30px] w-full text-[10px]">
      <p class="color-[#CCCCCC]">Inspiart ＞ コース一覧 ＞ <span class="color-white">モデルコース</span></p>
    </div> -->
    <div class="bg-[#444444] text-[#CCCCCC] pl-[10px] text-[10px] py-2 hiragino-kaku-pro">
      Inspiart ＞ コース一覧 ＞ <span class="text-white">モデルコース</span>
    </div>
    <!-- <div class="breadcrumb"></div> -->
  </div>
</template>

<style scoped>
.logo-title {
  font-size: 9px;
  color: #999999;
  font-weight: 400;
  font-family: "Hiragino Sans" sans-serif;
}

.hamburger {
  height: 13px;
  width: 20px;
  border: 1px solid black;
  border-left: none;
  border-right: none;
}

.sub-menu {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: black;
  padding: 12px 20px;
}

.sub-menu h5 {
  font-size: 13px;
  color: white;
  font-weight: 400;
  font-family: "Hiragino Kaku Gothic Pro W6", sans-serif;
}
</style>
