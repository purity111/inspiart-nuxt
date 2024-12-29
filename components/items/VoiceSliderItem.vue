<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  snsUrl?: string;
  avatarUrl?: string;
  voiceString: string;
  name?: string;
  timeAgo?: number;
  shareNum?: number;
  commentNum?: number;
  allLikes?: number;
  mvUrl: string;
}>();
</script>

<template>
  <div class="w-[240px] drop-shadow-[0_0_10px_#00000033]">
    <div class="bg-white rounded-tl-[10px] rounded-tr-[10px]">
      <div class="px-5 pt-2 flex justify-start gap-[10px] items-center">
        <div class="flex justify-center">
          <img :src="snsUrl" alt="sns" class="w-[30px] h-[30px]" />
          <img
            :src="avatarUrl"
            alt="声ー画像"
            class="w-[30px] h-[30px] ml-[-4px]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <h5 class="name">{{ name }}</h5>
          <p class="time-ago">{{ timeAgo }}分前</p>
        </div>
      </div>
      <p class="voice-text px-[10px]">{{ voiceString }}</p>
      <img
        :src="mvUrl"
        alt="声メイン画像"
        class="w-full"
        loading="lazy"
        decoding="async"
      />
      <div class="flex justify-between px-[10px] pt-2">
        <div class="flex gap-[5px] justify-start">
          <img
            src="/img/reason4/like-icons.png"
            alt="アイコンズ"
            class="h-[16px]"
          />
          <div class="like-num">{{ allLikes }}</div>
        </div>
        <div class="share-comment">
          コメント{{ commentNum }}件 シェア{{ shareNum }}件
        </div>
      </div>
      <div
        class="mx-[10px] my-[5px] border border-[#DDDDDD] h-[1px] border-t-0"
      ></div>
      <div class="flex items-center justify-around mb-[5px]">
        <div class="flex items-center justify-start gap-[5px]">
          <img src="/img/reason4/like-icon.svg" alt="いいね" class="h-[16px]" />
          <div class="bar-icon">いいね!</div>
        </div>
        <div class="flex items-center justify-start gap-[5px]">
          <img
            src="/img/reason4/comment-icon.svg"
            alt="コメント"
            class="h-[16px]"
          />
          <div class="bar-icon">コメントする</div>
        </div>
        <div class="flex items-center justify-start gap-[5px]">
          <img
            src="/img/reason4/share-icon.svg"
            alt="シェア"
            class="h-[16px]"
          />
          <div class="bar-icon">シェア!</div>
        </div>
      </div>
      <div class="bg-[#4267B2] w-full h-[5px]"></div>
    </div>
    <div class="menu-bubble"></div>
  </div>
</template>

<style>
.name {
  font-size: 13px;
}

.time-ago {
  font-size: 9px;
  color: #666666;
}

.voice-text {
  font-size: 10px;
  color: #222222;
  padding-top: 10px;
  padding-bottom: 20px;
  font-family: "Hiragino Sans", sans-serif;
}

.like-num {
  font-size: 9px;
  color: #666666;
}

.share-comment {
  font-size: 8px;
  color: #666666;
}

.bar-icon {
  color: #666666;
  font-size: 9px;
}

.menu-bubble {
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  width: 24px;
  height: 18px;
  background-color: #4267b2;
  margin: auto;
  margin-top: -1px;
}
</style>
