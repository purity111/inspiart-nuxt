<template>
  <div>
    <div
      class="w-[184px] aspect-square rounded-full bg-[#F5F3F1] flex flex-col items-center mx-auto pt-[60px] -mt-[35px]"
    >
      <img
        src="/img/common/star.png"
        width="26"
        height="26"
        alt="sns"
        class="w-[26px] h-[26px]"
        loading="lazy"
        decoding="async"
      />
      <h3 class="text-center text-2xl mt-2.5 text-medium">SNS運用</h3>
      <h4 class="text-center text-sm satoshi text-[#8E795D] mt-[15px]">
        SNS
      </h4>
    </div>
    <h5 class="text-xl font-semiBold text-center tracking-tighter">フォロワーを伸ばせます！</h5>
    <div class="text-sm font-medium mt-3 text-center tracking-tighter leading-[1.8]">
      <p>あなたはユーチューバー？</p>
      <p>インフルエンサー？</p>
      <p>InsipiartZならどちらのフォロワーも</p>
      <p>伸ばすことができます!</p>
    </div>
    <div class="mt-[52px]">
      <ItemsNodeTitle
        title="専門講座で安心！"
        sm_title="SNS運用が苦手…？でも、"
      />
    </div>
    <div class="flex flex-col gap-5 px-5 mt-[30px]">
      <ItemsSnsCampas
        title="なりたい、を実現しよう"
        banner="/img/reason6/you-campas-banner.avif"
        sns_title="Youtube"
        btn_name="Youtube"
        mark_text="DM、登録者数<br>を増やす専門授業<br>が充実！"
      />
      <ItemsSnsCampas
        title="時代の先駆者を目指す"
        banner="/img/reason6/inf-campas-banner.avif"
        sns_title="Influencer"
        btn_name="インフルエンサー"
        mark_text="フォロワー数を<br>増やす秘訣を<br>伝授！"
      />
    </div>
    <div>
      <div class="pt-[10px] pb-[14px]">
        <ItemsAndDot />
      </div>
      <ItemsNodeTitle
        title="フォロワー獲得できる!？"
        sm_title="レッスンを受けると、一石二鳥で"
      />
      <div class="flex flex-col gap-5 mt-[30px] px-5">
        <ItemsSnsPanel
          v-for="(panel, i) in panels.slice(0, 3)"
          :key="i"
          :title="panel.title"
          :banner="panel.banner"
          :sub_title="panel.sub_title"
        />
      </div>
      <div class="pt-[10px] pb-[14px]">
        <ItemsAndDot />
      </div>
      <ItemsNodeTitle title="レッスンで稼げる！" sm_title="最先端システムで" />
      <div class="flex flex-col gap-5 mt-[30px] px-5">
        <ItemsSnsPanel
          :title="panels[3].title"
          :banner="panels[3].banner"
          :sub_title="panels[3].sub_title"
        />
        <div
          class="bg-white w-[335px] rounded-bl-[32px] rounded-tr-[32px] overflow-hidden mx-auto"
        >
          <img
            :src="panels[4].banner"
            :alt="panels[4].title"
            width="335"
            height="207"
            loading="lazy"
            decoding="async"
            class="w-full h-auto"
          />
          <div class="pt-6 px-5 pb-7 text-center">
            <h4
              class="text-lg text-[#8E795D] font-normal leading-[25px]"
              v-html="panels[4]?.title"
              v-if="panels[4]?.title"
            ></h4>
            <p
              class="text-[13px] text-[#4E463D] font-medium mt-3.5 leading-[20px]"
              v-html="panels[4].sub_title"
            ></p>
          </div>
          <div class="pt-[30px] bg-white border-t border-t-[#E6E1DD] pb-[32px]">
            <h4 class="polygon-title !font-medium">カルテってなに？</h4>
            <p class="mt-5 text-[13px] text-center font-medium">
              InspiartZ独自のレッスンシステム。<br />
              自分のレッスンを動画や写真で記録したり、<br />
              自身のスキルマップや講座の進捗まで、<br />
              ひと目で確認できます！
            </p>
            <img
              src="/img/reason6/what-chat.avif"
              alt="ポリゴン"
              width="255"
              height="348"
              class="w-[255px] mx-auto mt-[26px] drop-shadow-lg"
            />
          </div>
          <div class="pt-[30px] bg-white border-t border-t-[#E6E1DD] pb-[42px]">
            <h4 class="polygon-title !font-medium">NFTってなに？</h4>
            <p class="mt-5 text-[13px] text-center font-medium">
              いま大注目の画期的技術！<br />
              デジタルデータの新しい管理・販売方法です。<br />
              作品が販売・転売されるたびに、<br />
              著作権者のあなたに報酬が支払われます。
            </p>
            <img
              src="/img/reason6/what-net.svg"
              alt="ポリゴン"
              width="315"
              height="200"
              class="w-[315px] mx-auto mt-[26px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const panels = [
  {
    title: "レッスンをそのまま<br>ライブ配信として公開！",
    banner: "/img/reason6/reason-6-panel-1.avif",
    sub_title:
      "毎回のレッスンが撮影＆作品づくりの場に！<br>ライブ配信×SNS発信でファンを獲得！",
  },
  {
    title: "Inspiart公式チャンネルに<br>公開される！",
    banner: "/img/reason6/reason-6-panel-2.avif",
    sub_title:
      "更にInspiart公式チャンネルへ公開！<br>公式アカウントだから知名度もアップ！",
  },
  {
    title: "自分のSNSにも<br>投稿できる！",
    banner: "/img/reason6/reason-6-panel-3.avif",
    sub_title:
      "もちろん自分のアカウントにも投稿可能！<br>どんどんファンを増やしていこう！",
  },
  {
    title: "投げ銭で<br>応援してもらえる！",
    banner: "/img/reason6/reason-6-panel-4.avif",
    sub_title:
      "ライブ配信では「投げ銭」システムで<br>ファンから応援してもらえます！",
  },
  {
    title: "カルテを販売して<br>稼げる！",
    banner: "/img/reason6/reason-6-panel-5.avif",
    sub_title:
      "レッスン後に届く、あなただけの「カルテ」をNFTマーケットで販売できます！",
  },
];
</script>
<style scoped>
.polygon-title {
  width: 203px;
  font-size: 14px;
  color: white;
  font-weight: 600;
  background-color: #c2b4a1;
  text-align: center;
  margin-inline: auto;
  clip-path: polygon(100% 0%, 96% 100%, 0 100%, 4% 0);
}
</style>
