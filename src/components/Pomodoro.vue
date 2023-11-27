<script setup lang="ts">
import PomodoroCard from "./PomodoroCard.vue";
</script>

<template>
  <div class="pomodoro">
    <div class="pomodoro__container">
      <PomodoroCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pomodoro {
  display: flex;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--app-bg);
    height: var(--app-height);
    width: var(--app-width);
    border-radius: var(--app-border-radius);
  }
}
</style>
