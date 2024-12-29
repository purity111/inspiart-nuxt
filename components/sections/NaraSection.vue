<template>
  <div class="relative bg-[#C8CCE1] pb-[90px]">
    <img src="/img/common/star.png" class="星" alt="star" />
    <div class="circle"></div>
    <img
      src="/img/reason3/nara-top.png"
      class="w-full pr-[30px] relative z-20"
      alt="nara-top"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/img/reason3/nara-mv.webp"
      class="px-5 mt-[-30px] round-5 relative z-10"
      alt="nara-mv"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/img/common/nara-bg.avif"
      class="absolute top-[280px] right-[-80px]"
      alt="nara-背景"
      loading="lazy"
      decoding="async"
    />
    <div
      class="p-[15px] pb-[30px] leading-none bg-white ml-10 mr-5 rounded-2xl relative mt-[-35px] name-card z-20"
    >
      <ItemsNameCard
        :font1="'18px'"
        :font2="'20px'"
        :font3="'14px'"
        :font4="'11px'"
        :title="`大人の楽器サックスに<br>憧れて。いきなり「ルパ<br>ン三世’79」に挑戦？`"
        :nameEng="'Kimiko Matsuda'"
        :nameJp="'松田 公子'"
        :info="'ショップ店員 / 24歳 / 挑戦コース：1億円'"
      />
      <img
        src="/img/reason3/nara-photo1.webp"
        class="absolute h-[286px] right-[30px] bottom-[-40px]"
        alt="nara-mv"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="flex justify-around mt-[34px] px-5">
      <div class="relative w-[160px] h-[235px]">
        <img
          src="/img/reason3/nara-photo2.webp"
          class="absolute top-0 left-0 w-[140px] h-[210px]"
          style="border-radius: 20px"
          alt="nara-mv"
          loading="lazy"
          decoding="async"
        />
        <div class="right-0 bottom-0 absolute">
          <h2 class="trial">体験記</h2>
          <ItemsNameCard
            :font1="'14px'"
            :font2="'13px'"
            :font3="'11px'"
            :font4="'9px'"
            :title="`大人の楽器サック`"
            :nameEng="'Kazuho Ishida'"
            :nameJp="'石田 一帆'"
            :info="'ショップ店員 / 24歳 / 挑戦楽器：サックス'"
            class="p-3 bg-white w-[140px] rounded-2xl"
          />
        </div>
      </div>
      <div class="relative w-[160px] h-[235px] mt-[30px]">
        <img
          src="/img/reason3/nara-photo3.webp"
          class="absolute top-0 left-0 w-[140px] h-[210px]"
          style="border-radius: 20px"
          alt="nara-mv"
          loading="lazy"
          decoding="async"
        />
        <div class="right-0 bottom-0 absolute">
          <h2 class="trial">体験記</h2>
          <ItemsNameCard
            :font1="'14px'"
            :font2="'13px'"
            :font3="'11px'"
            :font4="'9px'"
            :title="`大人の楽器サック`"
            :nameEng="'Kazuho Ishida'"
            :nameJp="'石田 一帆'"
            :info="'ショップ店員 / 24歳 / 挑戦楽器：サックス'"
            class="p-3 bg-white w-[140px] rounded-2xl"
          />
        </div>
      </div>
    </div>
    <img
      src="/img/common/player-bg.svg"
      class="mt-[-70px] ml-[-60px]"
      alt="nara-mv"
      loading="lazy"
      decoding="async"
    />
    <ItemsMoreBtn
      :text="'もっと見る'"
      :color="'#4E463D'"
      class="m-auto mt-[-170px] mb-[50px]"
    />
    <div class="article">
      <div class="relative">
        <div class="title relative z-20">
          <p>ta-me-runo 体験記</p>
          <h5>人気の記事</h5>
        </div>
        <img
          src="/img/reason3/article.svg"
          class="article-icon !w-[78px]"
          alt="記事"
        />
      </div>
      <div class="relative">
        <img
          src="/img/common/player-bg.svg"
          class="absolute top-[60px] right-[-60px] h-[220px]"
          alt="記事背景"
          loading="lazy"
          decoding="async"
        />
        <ItemsArticleCard
          :imgSrc="'/img/reason3/article1.webp'"
          :date="'2019/08/06'"
          :author="'石田 一帆'"
          :title="'第１回：記事タイトル記事タイトル記事タイトル記事タイトル'"
          :content="'記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...'"
          class="mt-[30px] relative z-10"
        />
        <ItemsArticleCard
          :imgSrc="'/img/reason3/article2.webp'"
          :date="'2019/08/06'"
          :author="'石田 一帆'"
          :title="'第１回：記事タイトル記事タイトル記事タイトル記事タイトル'"
          :content="'記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...'"
          class="relative z-10"
        />
        <ItemsArticleCard
          :imgSrc="'/img/reason3/article3.webp'"
          :date="'2019/08/06'"
          :author="'石田 一帆'"
          :title="'第１回：記事タイトル記事タイトル記事タイトル記事タイトル'"
          :content="'記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...'"
          class="relative z-10"
        />
      </div>
    </div>
    <div class="player">
      <div class="relative">
        <div class="title relative z-20">
          <p>ta-me-runo 体験記</p>
          <h5>人気のプレイヤー</h5>
        </div>
        <img
          src="/img/reason3/player.svg"
          class="player-icon"
          alt="プレイヤー"
        />
      </div>
      <div class="relative">
        <img
          src="/img/common/player-bg.svg"
          class="absolute top-0 left-[-60px] h-[220px]"
          alt="プレイヤー背景"
          loading="lazy"
          decoding="async"
        />
        <ItemsPlayerCard
          :imgSrc="'/img/reason3/nara-player1.webp'"
          :nameEng="'Kazuho Ishida'"
          :nameJp="'石田 一帆'"
          :shop="'ショップ店員'"
          :age="'24歳'"
          :instrument="'挑戦楽器：サックス'"
          class="mt-0 relative z-10"
        />
        <ItemsPlayerCard
          :imgSrc="'/img/reason3/nara-player2.webp'"
          :nameEng="'Kazuho Ishida'"
          :nameJp="'石田 一帆'"
          :shop="'ショップ店員'"
          :age="'24歳'"
          :instrument="'挑戦楽器：サックス'"
          class="relative z-10"
        />
        <ItemsPlayerCard
          :imgSrc="'/img/reason3/nara-player3.webp'"
          :nameEng="'Kazuho Ishida'"
          :nameJp="'石田 一帆'"
          :shop="'ショップ店員'"
          :age="'24歳'"
          :instrument="'挑戦楽器：サックス'"
          class="relative z-10"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.star {
  position: absolute;
  width: 26px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  background-color: #c8cce1;
}

.trial {
  font-size: 42px;
  color: white;
  text-align: center;
  line-height: 1;
}

.article-icon,
.player-icon {
  width: 78px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.article p,
.player p {
  font-size: 15px;
  color: #514242;
  text-align: center;
}

.article h5,
.player h5 {
  font-size: 19px;
  color: #514242;
  text-align: center;
}

.player .title {
  padding-top: 50px;
  padding-bottom: 35px;
  color: #514242;
}

.player h5 {
  line-height: 1;
}

.name-card {
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
}
</style>
