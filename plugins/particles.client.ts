// plugins/particles.client.ts (新的，正确的方式)

import { defineNuxtPlugin } from "#app";
import Particles from "@tsparticles/vue3";

// 引入你需要的引擎
// loadFull 是完整版，包含了所有功能
import { loadFull } from "tsparticles";
// 如果想用轻量版，可以换成: import { loadSlim } from "tsparticles-slim";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use() 方法可以接受第二个参数作为插件的选项
  nuxtApp.vueApp.use(Particles, {
    // 这个 init 函数是关键
    init: async (engine) => {
      // 在这里加载你选择的引擎
      await loadFull(engine);
      // 或者: await loadSlim(engine);
    },
  });
});
