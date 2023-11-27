<script lang="ts" setup>
import { usePomodoroStore } from "../store";
import { computed } from "vue";

const pomodoroStore = usePomodoroStore();

const minutesRemaining = computed(() =>
  Math.floor(pomodoroStore.timeRemaining / 60)
);

const minutesRemainingTen = computed(
  () => minutesRemaining.value.toString().padStart(2, "0")[0]
);

const minutesRemainingUnit = computed(
  () => minutesRemaining.value.toString().padStart(2, "0")[1]
);

const secondsRemaining = computed(() => pomodoroStore.timeRemaining % 60);

const secondsRemainingTen = computed(
  () => secondsRemaining.value.toString().padStart(2, "0")[0]
);

const secondsRemainingUnit = computed(
  () => secondsRemaining.value.toString().padStart(2, "0")[1]
);
</script>

<template>
  <div class="pomodoro__clock">
    <span class="pomodoro__clock__minutes-ten">{{ minutesRemainingTen }}</span>
    <span class="pomodoro__clock__minutes-unit">{{
      minutesRemainingUnit
    }}</span>
    <span class="pomodoro__clock__minutes-seconds-separator">:</span>
    <span class="pomodoro__clock__seconds-ten">{{ secondsRemainingTen }}</span>
    <span class="pomodoro__clock__seconds-unit">{{
      secondsRemainingUnit
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
.pomodoro__clock {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--app-width) - (160px + 80px));
  height: calc(var(--app-height) - (120px + 320px));
  background-color: rgb(62, 58, 58);
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 1);

  &__minutes-ten,
  &__minutes-unit,
  &__minutes-seconds-separator,
  &__seconds-ten,
  &__seconds-unit {
    font-family: "Dela Gothic One", sans-serif;
    font-size: 5rem;
  }
}
</style>
