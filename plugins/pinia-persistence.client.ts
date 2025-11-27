// plugins/pinia-persistence.client.ts

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(createPinia().use(piniaPluginPersistedstate))  <-- 错误用法
  // `@pinia/nuxt`模块会自动创建 Pinia 实例，我们只需访问它并添加插件

  nuxtApp.$pinia.use(piniaPluginPersistedstate);
});
