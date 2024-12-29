<template>
  <div>
    <p class="py-[50px] px-[40px] leading-[1.5]">
      成功するには視野を広く持ち多種多様なチャンスを自分のものにしていく必要があります。どれだけ多くのチャンスに挑み続けられるかが鍵になるのです、
    </p>
    <div class="scout-section">
      <div class="text-center">
        <img src="/img/common/star.png" class="w-[26px] m-auto" alt="星" />
        <h5 class="text-base text-center pb-[10px] pt-5">
          チャンスを掴める機会は度々!
        </h5>
        <h2 class="text-2xl pb-4">スカウト</h2>
        <h5 class="text-center pb-10 text-[#8E795D] opacity-60">Scout</h5>
        <p class="pb-[30px] tracking-[-0.1em]">
          InspiartZは普段のレッスンにも<br />
          有名事務所のスカウトマンが訪れます。
        </p>
      </div>
      <ItemsBrandItem
        :imgSrc="'/img/reason4/brand1.png'"
        :text="'個性を活かした活躍ができる創業数年のモデルエージェンシー'"
      />
      <ItemsBrandItem
        :imgSrc="'/img/reason4/brand2.webp'"
        :text="'モデル・俳優・クリエーター・文化人を育成している芸能事務所'"
      />
      <ItemsBrandItem
        :imgSrc="'/img/reason4/brand3.png'"
        :text="'芸能人（俳優・歌手・モデル・タレント）の老舗芸能事務所'"
      />
    </div>
  </div>
</template>

<style>
.scout-section {
  border-radius: 0 32px 0 32px;
  padding: 20px;
  margin: 0 20px;
  background-color: #FCFBFB;
}
</style>
