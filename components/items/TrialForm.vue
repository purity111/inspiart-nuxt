<script setup lang="ts">
import { ref, computed } from "vue";

/* フォーム */
const firstName = ref("");
const lastName = ref("");
const firstNameKana = ref("");
const lastNameKana = ref("");
const phoneNumber = ref("");
const email = ref("");
const selectedMethod = ref("");
const selectedDayType = ref("");
const selectedTimeSlot = ref("");
const selectedWeekdays = ref(false);
const selectedWeekends = ref(false);
const selectedMorning = ref(false);
const selectedAfternoon = ref(false);
const selectedEvening = ref(false);
const campaignCode = ref("");
const selectedOnline = ref(false);

interface Studio {
  name: string;
  access: string;
  latitude: number;
  longitude: number;
}

interface Area {
  name: string;
  studios: Studio[];
}

const props = defineProps<{
  areas: Area[];
}>();

const selectedTab = ref("area");

const distance = ref(10);
const currentPosition = ref<GeolocationPosition | null>(null);
const loading = ref(false);
const error = ref(false);

const filteredStudiosByLocation = computed(() => {
  if (!currentPosition.value) {
    return [];
  }

  const { latitude, longitude } = currentPosition.value.coords;
  return getAllStudios().filter((studio) => {
    const studioDistance = getDistance(
      latitude,
      longitude,
      studio.latitude,
      studio.longitude
    );
    return studioDistance <= distance.value;
  });
});

const getCurrentLocation = () => {
  loading.value = true;
  error.value = false;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentPosition.value = position;
      loading.value = false;
    },
    () => {
      error.value = true;
      loading.value = false;
    }
  );
};

const keyword = ref("");

const filteredStudiosByKeyword = computed(() => {
  if (keyword.value === "") {
    return [];
  }

  const lowercaseKeyword = keyword.value.toLowerCase();
  return getAllStudios().filter((studio) => {
    const lowercaseName = studio.name.toLowerCase();
    const lowercaseAccess = studio.access.toLowerCase();
    return (
      lowercaseName.includes(lowercaseKeyword) ||
      lowercaseAccess.includes(lowercaseKeyword)
    );
  });
});

const getAllStudios = () => {
  const studios: {
    name: string;
    access: string;
    latitude: number;
    longitude: number;
  }[] = [];

  props.areas.forEach((area) => {
    area.studios.forEach((studio) => {
      studios.push(studio);
    });
  });

  return studios;
};

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // 地球の半径（km）
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const openPanel = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const nextcontent = target.nextElementSibling as HTMLElement;
  if (nextcontent.style.maxHeight) {
    nextcontent.removeAttribute("style");
  } else {
    nextcontent.style.maxHeight = nextcontent.scrollHeight + "px";
  }
};

const emit = defineEmits(["submitFormData"]);

const submitForm = () => {
  // バリデーションと送信処理を実装
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    firstNameKana: firstNameKana.value,
    lastNameKana: lastNameKana.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    selectedMethod: selectedMethod.value,
    selectedWeekdays: selectedWeekdays.value,
    selectedWeekends: selectedWeekends.value,
    selectedMorning: selectedMorning.value,
    selectedAfternoon: selectedAfternoon.value,
    selectedEvening: selectedEvening.value,
    campaignCode: campaignCode.value,
    distance: distance.value,
    currentPosition: currentPosition.value,
    keyword: keyword.value,
  };
  emit("submitFormData", formData);
  window.location.href = "/"; // 仮のリンク
};
</script>
<template>
  <!-- まずは無料体験レッスン -->
  <div id="freetrial">
    <!-- 「まずは無料体験レッスン」のコンテンツ -->
    <div
      class="pb-[60px] bg-[#4E463D] text-[#C2B4A1] max-w-[100vw] pt-[26px] relative"
    >
      <div
        class="w-[184px] aspect-square rounded-full bg-[#4E463D] absolute top-[-35px] left-1/2 -translate-x-1/2"
      ></div>
      <div class="w-full relative">
        <img
          src="/img/common/star.png"
          alt="star"
          width="26"
          height="26"
          loading="lazy"
          decoding="async"
          class="w-[26px] h-auto mx-auto"
        />
        <h3 class="text-center text-white text-2xl mt-[10px]">
          お申し込みフォーム
        </h3>
        <h4 class="text-center text-[#FFFFFF96] satoshi mt-[14px]">Blog</h4>
      </div>
      <form @submit.prevent="submitForm">
        <div>
          <div class="pt-10">
            <!-- お名前（漢字） -->
            <div class="max-w-[840px] mx-auto px-5">
              <label
                class="tracking-wider flex items-center"
                for="lastName"
              >
                お名前（漢字）
                <span
                  class="text-white text-xs py-[2px] px-[6px] rounded bg-[#CBA8A4] -translate-x-[1px] -translate-y-[1px]"
                  >必須</span
                >
              </label>
              <label class="sr-only" for="firstName"
                >名（漢字）</label
              >
              <div class="flex gap-[15px] mt-[11px]">
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  required
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="山田"
                />
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  required
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="太郎"
                />
              </div>
            </div>
            <!-- /お名前（漢字） -->

            <!-- お名前（かな） -->
            <div class="max-w-[840px] mx-auto mt-[18px] px-5">
              <label
                class="tracking-wider flex items-center gap-2"
                for="lastNameKana"
              >
                お名前（かな）
              </label>
              <div class="flex gap-[15px] mt-2">
                <input
                  id="lastNameKana"
                  v-model="lastNameKana"
                  type="text"
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="やまだ"
                />
                <input
                  id="firstNameKana"
                  v-model="firstNameKana"
                  type="text"
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="たろう"
                />
              </div>
            </div>
            <!-- /お名前（かな） -->

            <div class="gap-[15px] max-w-[840px] mx-auto px-5">
              <!-- 電話番号 -->
              <div class="mt-5 w-full">
                <label
                  class="tracking-wider flex items-center gap-2"
                  for="phoneNumber"
                >
                  電話番号
                  <span
                    class="text-white text-xs py-[2px] px-[6px] rounded bg-[#CBA8A4]"
                    >必須</span
                  >
                </label>
                <input
                  id="phoneNumber"
                  v-model="phoneNumber"
                  type="tel"
                  required
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="03-1234-5678"
                />
              </div>
              <!-- /電話番号 -->
              <!-- メールアドレス -->
              <div class="mt-5 w-full">
                <label
                  class="tracking-wider flex items-center gap-2"
                  for="email"
                >
                  メールアドレス
                  <span
                    class="text-white text-xs py-[2px] px-[6px] rounded bg-[#CBA8A4]"
                    >必須</span
                  >
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="name@abcdefg.com"
                />
              </div>
              <!-- /メールアドレス -->
            </div>

            <!-- ご希望のコース -->
            <div class="mt-5">
              <div
                class="tracking-wider flex items-center gap-2 max-w-[840px] mx-auto px-5"
              >
                ご希望のコース
                <span
                  class="text-white text-xs py-[2px] rounded bg-[#CBA8A4]"
                  >必須</span
                >
              </div>
              <div class="w-full px-5 pt-[14px] pb-[20px]">
                <div class="flex justify-between">
                  <div
                    @click="selectedOnline = false"
                    class="w-[160px] bg-white rounded-[10px] overflow-hidden border border-[#CCCCCCC0] relative cursor-pointer"
                  >
                    <img
                      src="/img/reason8/select-classroom.webp"
                      alt="ガイド"
                      width="150"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-auto rounded-tl-[20px]"
                    />
                    <p
                      class="leading-[20px] text-center text-[#4E463D] pt-[11px] pb-[9px]"
                      :class="selectedOnline ? '' : 'relative z-10 !text-white'"
                    >
                      教室に来校して<br />レッスン
                    </p>
                    <img
                      v-if="!selectedOnline"
                      src="/img/reason8/selected.svg"
                      alt="教室"
                      width="158"
                      height="178"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full absolute top-0 left-0"
                    />
                  </div>
                  <div
                    @click="selectedOnline = true"
                    class="w-[160px] bg-white rounded-[10px] overflow-hidden border border-[#CCCCCCC0] relative cursor-pointer"
                  >
                    <img
                      src="/img/reason8/select-online.webp"
                      alt="ガイド"
                      width="150"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-auto rounded-tl-[20px]"
                    />
                    <p
                      class="leading-[20px] text-center text-[#4E463D] pt-[11px] pb-[9px]"
                      :class="selectedOnline ? 'relative z-10 !text-white' : ''"
                    >
                      オンラインでの<br />レッスン
                    </p>
                    <img
                      v-if="selectedOnline"
                      src="/img/reason8/selected.svg"
                      alt="教室"
                      width="158"
                      height="178"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full absolute top-0 left-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- /ご希望のコース -->

            <!-- ご希望のスペース -->
            <div class="mx-auto mt-5">
              <div
                class="tracking-wider flex items-center gap-2 px-5"
              >
                ご希望のスペース
                <span
                  class="text-white text-xs py-1 px-[6px] rounded bg-[#CBA8A4] -translate-x-[2px]"
                  >必須</span
                >
              </div>
              <div class="px-4 mt-[14px]">
                <div class="text-center">
                  <div
                    class="flex border border-[#CCCCCC] text-[#222222] rounded-full bg-white -translate-x-[3px]"
                  >
                    <div
                      :class="[
                        'relative w-1/3 h-[50px] text-sm tracking-wider grid place-items-center cursor-pointer',
                        { 'text-white': selectedTab === 'area' },
                      ]"
                      @click="selectedTab = 'area'"
                    >
                      <span class="relative z-10">エリア<br />から選ぶ</span>
                      <div
                        v-if="selectedTab === 'area'"
                        class="absolute inset-0 bg-[#C2B4A1] rounded-full z-0 before:border-transparent before:border-t-[#C2B4A1] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                    <div
                      :class="[
                        'relative w-1/3 h-[50px] text-sm tracking-wider grid place-items-center cursor-pointer',
                        {
                          'text-white':
                            selectedTab === 'location',
                        },
                      ]"
                      @click="selectedTab = 'location'"
                    >
                      <span class="relative z-10">現在地<br />から選ぶ</span>
                      <div
                        v-if="selectedTab === 'location'"
                        class="absolute inset-0 bg-[#C2B4A1] rounded-full z-0 before:border-transparent before:border-t-[#C2B4A1] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                    <div
                      :class="[
                        'relative w-1/3 h-[50px] text-sm tracking-wider grid place-items-center cursor-pointer',
                        {
                          'text-white': selectedTab === 'keyword',
                        },
                      ]"
                      @click="selectedTab = 'keyword'"
                    >
                      <span class="relative z-10">キーワード<br />で検索</span>
                      <div
                        v-if="selectedTab === 'keyword'"
                        class="absolute inset-0 bg-[#C2B4A1] rounded-full z-0 before:border-transparent before:border-t-[#C2B4A1] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="mt-[24px] translate-x-[0px]">
                  <div v-show="selectedTab === 'area'">
                    <div
                      v-for="(area, i) in areas"
                      :key="area.name"
                      class="mt-[10px] border border-[#AAAAAA]"
                    >
                      <h3
                        @click="openPanel"
                        class="text-white tracking-widest bg-[#AAAAAA] flex items-center gap-[15px] px-[18px] h-10 cursor-pointer"
                      >
                        {{ area.name
                        }}<span
                          class="w-[30px] h-[30px] rounded-full text-black bg-white shadow-md grid place-items-center -tracking-wider -translate-x-[10px]"
                          >{{ area.studios.length }}</span
                        >
                      </h3>
                      <div
                        class="grid grid-cols-1 max-h-0 overflow-hidden duration-300 ease-in-out"
                      >
                        <div
                          v-for="(studio, index) in area.studios"
                          :key="studio.name"
                          class="border-[0.5px] border-[#AAAAAA] relative"
                        >
                          <input
                            type="checkbox"
                            :id="`${i}${index}${studio.name}`"
                            :value="`${studio.name}`"
                            class="w-5 h-5 border-[#AAAAAA] rounded area-checkbox absolute left-[13px] top-1/2 -translate-y-1/2"
                          />
                          <label
                            :for="`${i}${index}${studio.name}`"
                            class="flex items-center pl-[30px] pr-[13px] py-2 h-full w-full bg-white text-[#222222]"
                          >
                            <span
                              class="tracking-widest flex items-center ml-3"
                            >
                              {{ studio.name }}
                              <span class="text-xs text-[#666666] ml-3">{{
                                studio.access
                              }}</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-show="selectedTab === 'location'">
                    <div>
                      <label for="location">
                        距離（km）：
                        <input
                          id="location"
                          v-model.number="distance"
                          type="number"
                          min="1"
                        />
                      </label>
                      <button @click="getCurrentLocation">
                        現在地から絞り込む
                      </button>
                    </div>
                    <div v-if="loading">位置情報を取得中...</div>
                    <div v-else-if="error">位置情報の取得に失敗しました。</div>
                    <div v-else-if="filteredStudiosByLocation.length > 0">
                      <h3>現在地から {{ distance }} km 以内のスタジオ</h3>
                      <div
                        v-for="studio in filteredStudiosByLocation"
                        :key="studio.name"
                      >
                        <label :for="studio.name">
                          <input
                            :id="studio.name"
                            type="checkbox"
                            :value="studio.name"
                          />
                          {{ studio.name }}
                          <span>{{ studio.access }}</span>
                        </label>
                      </div>
                    </div>
                    <div v-else>
                      現在地から {{ distance }} km 以内のスタジオはありません。
                    </div>
                  </div>

                  <div v-show="selectedTab === 'keyword'">
                    <div>
                      <label for="keyword">
                        キーワードで検索：
                        <input id="keyword" v-model="keyword" type="text" />
                      </label>
                    </div>
                    <div v-if="filteredStudiosByKeyword.length > 0">
                      <h3>検索結果</h3>
                      <div
                        v-for="studio in filteredStudiosByKeyword"
                        :key="studio.name"
                      >
                        <label :for="studio.name">
                          <input
                            :id="studio.name"
                            type="checkbox"
                            :value="studio.name"
                          />
                          {{ studio.name }}
                          <span>{{ studio.access }}</span>
                        </label>
                      </div>
                    </div>
                    <div v-else>一致するスタジオはありません。</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /ご希望のスペース -->

            <div class="max-w-[840px] mx-auto mt-5 px-5">
              <div
                class="tracking-wider flex items-center gap-2.5"
              >
                ご希望のスケジュール
                <span
                  class="text-white text-xs py-1 px-[6px] rounded bg-[#CBA8A4]"
                  >必須</span
                >
              </div>
              <div class="flex gap-x-10 px-4 mt-3.5 ml-[14px]">
                <div class="flex items-center gap-[15px]">
                  <input
                    id="weekdays"
                    v-model="selectedDayType"
                    type="radio"
                    value="weekdays"
                    name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="weekdays"
                    class="tracking-wider cursor-pointer translate-x-[2px] text-white"
                  >
                    平日
                  </label>
                </div>
                <div class="flex items-center gap-[15px] ml-[6px]">
                  <input
                    id="weekends"
                    v-model="selectedDayType"
                    type="radio"
                    value="weekends"
                    name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="weekends"
                    class="tracking-wider cursor-pointer translate-x-[2px] text-white"
                  >
                    祝休日
                  </label>
                </div>
              </div>
            </div>
            <div class="max-w-[840px] mx-auto mt-5 px-5">
              <div
                class="tracking-wider flex items-center gap-2.5"
              >
                ご希望の時間帯
                <span
                  class="text-white text-xs py-1 px-[6px] rounded bg-[#CBA8A4]"
                  >必須</span
                >
              </div>
              <div
                class="flex gap-x-11 gap-y-5 flex-wrap px-4 mt-3.5 ml-[10px]"
              >
                <div class="flex items-center gap-[15px]">
                  <input
                    id="morning"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="morning"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="morning"
                    class="tracking-wider cursor-pointer translate-x-[6px] text-white"
                  >
                    10時〜14時
                  </label>
                </div>
                <div class="flex items-center gap-[15px]">
                  <input
                    id="afternoon"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="afternoon"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="afternoon"
                    class="tracking-wider cursor-pointer translate-x-[6px] text-white"
                  >
                    14時〜18時
                  </label>
                </div>
                <div class="flex items-center gap-[15px]">
                  <input
                    id="evening"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="evening"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="evening"
                    class="tracking-wider cursor-pointer translate-x-[5px] text-white"
                  >
                    18時〜21時
                  </label>
                </div>
              </div>
            </div>
            <div class="flex flex-col max-w-[840px] mx-auto mt-5 px-5">
              <label class="tracking-wider" for="campaignCode">
                キャンペーンコード
              </label>
              <input
                id="campaignCode"
                v-model="campaignCode"
                type="text"
                class="appearance-none bg-[#FFFFFF32] rounded-lg w-full p-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
                placeholder="キャンペーンコードがあれば入力"
              />
            </div>
          </div>
          <hr
            class="mt-10 w-[335px] mx-auto border-t border-t-[#E6E1DD] border-dotted"
          />
          <button
            class="block group w-[295px] h-[60px] bg-transparent text-sm rounded-full relative bg-white hover:bg-[#C2B4A1] border border-[#B6B0AB] text-[#4E463D] mt-10 mx-auto"
          >
            申し込む
            <span
              class="w-9 aspect-square rounded-full bg-[#C2B4A1] content-center absolute right-[13px] top-1/2 -translate-y-1/2 group-hover:bg-white"
            >
              <img
                src="/img/reason6/button-arrow.svg"
                alt="arrow"
                width="12"
                height="8"
                loading="lazy"
                decoding="async"
                class="w-3 h-auto mx-auto group-hover:hidden"
              />
              <img
                src="/img/reason8/button-arrow-hover.svg"
                alt="arrow"
                width="12"
                height="8"
                loading="lazy"
                decoding="async"
                class="w-3 h-auto mx-auto hidden group-hover:block"
              />
            </span>
          </button>
        </div>
      </form>
    </div>
    <!-- 「まずは無料体験レッスン」のコンテンツ -->
  </div>
  <!-- /まずは無料体験レッスン -->
</template>
<style scoped>
.area-checkbox:checked + label {
  background-image: linear-gradient(to right, #c6d5e1, #e1cbc8);
}
</style>
