// stores/counter.js
import { defineStore } from "pinia";
import { Ref, computed, ref } from "vue";

const WORK_DURATION = 25 * 60;
const WORK_SUBTITLE = "Go to work champ! 😎";
const REST_DURATION = 5 * 60;
const REST_SUBTITLE = "Take a break champ! 😎";

export const usePomodoroStore = defineStore("pomodoro", () => {
  const subtitle = ref("press the play button to start the clock");
  const appState: Ref<PomodoroState> = ref("uninitialized");
  const appMode: Ref<PomodoroMode | null> = ref(null);
  const timeRemaining: Ref<number> = ref(0);
  const tickScheduler: Ref<number | null> = ref(null);

  function toggleButton() {
    switch (appState.value) {
      case "uninitialized":
        appState.value = "playing";
        appMode.value = "work";
        timeRemaining.value = WORK_DURATION;
        subtitle.value = WORK_SUBTITLE;
        startTick();
        return;
      case "playing":
        appState.value = "paused";
        subtitle.value = "You paused the timer, Hit the play button to resume";
        stopTick();
        return;
      case "paused":
        appState.value = "playing";
        subtitle.value =
          appMode.value === "work" ? WORK_SUBTITLE : REST_SUBTITLE;
        startTick();
    }
  }

  const isPlaying = computed(() => {
    return appState.value === "playing";
  });

  function startTick() {
    tickScheduler.value = setInterval(() => {
      if (timeRemaining.value <= 0) {
        timeRemaining.value =
          appMode.value === "work" ? REST_DURATION : WORK_DURATION;
        appMode.value = appMode.value === "work" ? "rest" : "work";
        subtitle.value =
          appMode.value === "work" ? WORK_SUBTITLE : REST_SUBTITLE;
      } else {
        timeRemaining.value--;
      }
    }, 1000) as any as number;
  }

  function stopTick() {
    clearInterval(tickScheduler.value as number);
  }

  return {
    subtitle,
    toggleButton,
    isPlaying,
    timeRemaining,
  };
});
