<script lang="ts" setup>
import PomodoroDisplay from "./PomodoroDisplay.vue";
import PomodoroClock from "./PomodoroClock.vue";
import PomodoroButton from "./PomodoroButton.vue";
</script>

<template>
  <div class="pomodoro_card">
    <PomodoroDisplay />
    <PomodoroClock />
    <PomodoroButton />
  </div>
</template>

<style lang="scss" scoped>
.pomodoro_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: calc(var(--app-width) - 160px);
  height: calc(var(--app-height) - 120px);
  border-radius: var(--app-border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
