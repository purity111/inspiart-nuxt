<template>
  <div class="star-rating">
    <span
      v-for="star in 5"
      :key="star"
      class="star"
      :style="{ fontSize: starSize }"
      :class="getStarClass(star)"
    >
      <span v-if="getStarClass(star) === 'filled'">★</span>
      <span v-else-if="getStarClass(star) === 'half-filled'">★</span>
      <span v-else>☆</span>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: Number,
  starSize: String,
});

const emit = defineEmits();
const hovered = ref(null);

const currentRating = computed(() => {
  return hovered.value !== null
    ? hovered.value
    : Math.round(props.modelValue * 2) / 2;
});

const getStarClass = (star) => {
  const fullStars = Math.floor(currentRating.value);
  const hasHalfStar = currentRating.value % 1 >= 0.25;

  if (star <= fullStars) {
    return "filled";
  } else if (star === fullStars + 1 && hasHalfStar) {
    return "half-filled";
  }
  return "empty";
};
</script>

<style scoped>
.star {
  font-size: 24px;
  color: lightgray;
}

.filled {
  color: #FBC661;
}

.half-filled {
  color: #FBC661;
}

.empty {
  color: lightgray;
}
</style>
