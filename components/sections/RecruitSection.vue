<template>
  <div class="relative bg-[#FCFBFB]">
    <div class="circle"></div>
    <div class="recruit-top z-20 relative text-center pt-5">
      <img src="/img/common/star.png" class="w-[26px] m-auto" alt="star" />
      <h2 class="text-2xl py-5">募集要項</h2>
      <h5 class="text-[#8E795D] text-base satoshi opacity-60">Application Requirements</h5>
    </div>
    <div class="pt-[60px] pb-[100px] relative z-20">
      <ItemsRecruitItem :left="'受講資格'" :right="'中学校卒業以上〜24歳まで'" />
      <ItemsRecruitItem :left="'期間'" :right="'4ヶ月（全２4回）'" />
      <ItemsRecruitItem :left="'授業時間'" :right="'1授業90分×週２回'" />
      <ItemsRecruitItem :left="'受講資格'" :right="'1月・4月・7月・10月'" />
      <ItemsRecruitItem :left="'受講料'" :right="'¥148,000(税込)'" />
      <ItemsRecruitItem :left="'入学金'" :right="'¥17,000(税込)'" />
    </div>
  </div>
</template>

<style scoped>
.star {
  width: 26px;
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
  background-color: #FCFBFB;
}

</style>
