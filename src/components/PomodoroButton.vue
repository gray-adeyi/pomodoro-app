<script lang="ts" setup>
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";

import { usePomodoroStore } from "../store";
import { storeToRefs } from "pinia";

const pomodoroStore = usePomodoroStore();
const { isPlaying } = storeToRefs(pomodoroStore);
const { toggleButton } = usePomodoroStore();
</script>

<template>
  <button class="pomodoro__button" @click="toggleButton">
    <PlayIcon v-if="!isPlaying" />
    <PauseIcon v-else />
  </button>
</template>

<style lang="scss" scoped>
.pomodoro__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  background: var(--app-bg);
  box-shadow: 1px 2px 7px rgba($color: #000000, $alpha: 0.5);
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 1px 2px 7px rgba($color: #000000, $alpha: 0.9);
  }
}
</style>
