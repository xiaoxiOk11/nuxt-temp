import { vMaska } from "maska/vue";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      maska: vMaska,
    },
  };
});
