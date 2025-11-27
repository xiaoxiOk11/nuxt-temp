// stores/counter.ts
import { defineStore } from "pinia";

// `defineStore` 的第一个参数是 store 的唯一 ID
export const themeRoute = defineStore("themeRoute", {
  // State: 推荐使用箭头函数，以获得更好的类型支持
  state: () => ({
    fileRoute: "01",
  }),
  persist: {
    key: "my-app-settings",
  },
});
