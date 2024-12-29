<template>
  <div class="bg-[#F5F3F1] pt-[26px] px-[30px] pb-24 relative">
    <div
      class="w-[184px] aspect-square bg-[#F5F3F1] rounded-full absolute top-[-35px] left-1/2 -translate-x-1/2"
    />
    <div class="relative z-10">
      <img
        src="/img/common/star.png"
        alt="星"
        width="26"
        height="26"
        loading="lazy"
        decoding="async"
        class="w-[26px] h-auto mx-auto"
      />
      <h3 class="text-center mt-3">よくわかる！</h3>
      <h4 class="text-2xl text-center mt-1">
        成功するモデルガイド
      </h4>
      <h5 class="text-center text-sm satoshi text-[#8E795D96] mt-[15px]">
        Guide
      </h5>
    </div>
    <div class="flex mt-9 justify-between flex-wrap gap-x-[15px] gap-y-[52px]">
      <div
        v-for="i in 4"
        :key="i"
        class="w-[150px] bg-white rounded-tl-[20px] rounded-br-[20px] relative drop-shadow-lg"
      >
        <img
          src="/img/reason8/guide-photo.webp"
          alt="ガイド"
          width="150"
          height="150"
          loading="lazy"
          decoding="async"
          class="w-full h-auto rounded-tl-[20px]"
        />
        <div class="mt-[10px] mb-6">
          <p class="text-center text-xs">キャチコピーが<br />入ります</p>
          <a
            class="block w-[30px] aspect-square content-center rounded-full bg-[#C2B4A1] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            href="#"
          >
            <img
              src="/img/reason6/button-arrow.svg"
              alt="arrow"
              width="12"
              height="10"
              loading="lazy"
              decoding="async"
              class="w-3 h-auto mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
    <div>
      <button
        class="block w-[275px] h-[52px] bg-transparent text-sm rounded-full relative border border-[#B6B0AB] mt-[55px] mx-auto"
      >
        もっと見る
        <img
          src="/img/reason8/arrow-down.svg"
          alt="arrow"
          width="12"
          height="8"
          loading="lazy"
          decoding="async"
          class="w-3 h-auto absolute right-5 top-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  </div>
</template>
