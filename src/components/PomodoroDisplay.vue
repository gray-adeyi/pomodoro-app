<script lang="ts" setup>
import { usePomodoroStore } from "../store";
import { storeToRefs } from "pinia";

const pomodoroStore = usePomodoroStore();
const { subtitle } = storeToRefs(pomodoroStore);
</script>

<template>
  <div class="pomodoro__display">
    <h1 class="pomodoro__display__title-text">Pomodoro App</h1>
    <h3 class="pomodoro__display__subtitle-text">
      {{ subtitle }}
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.pomodoro__display {
  text-align: center;

  &__title-text,
  &__subtitle-text {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: var(--app-display-text-color);
  }
}
</style>
