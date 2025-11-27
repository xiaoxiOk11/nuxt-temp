// nuxt.config.ts
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  devtools: { enabled: false },

  // [保留] 你的全局 CSS

  // [合并] 在 modules 数组中添加新的模块
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt", // 新增: Pinia 持久化
    "@nuxtjs/i18n", // 新增: i18n
    "@vite-pwa/nuxt", // 新增: PWA
  ],

  // [新增] 为 i18n 模块提供配置
  i18n: {
    langDir: "./", // 语言文件目录
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.ts" },
      { code: "es", iso: "es-ES", name: "Español", file: "es.ts" },
      { code: "zh", iso: "zh-CN", name: "简体中文", file: "zh.ts" },
    ],
    defaultLocale: "en",
  },

  build: {
    transpile: ["vant"],
  },
  devServer: {
    host: "127.0.0.1",
  },

  pwa: {
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
    srcDir: "public",
    filename: "sw.ts",
    strategies: "injectManifest",
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico,txt,json}"],
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [VantResolver({ importStyle: true })],
      }),
    ],
  },
  css: ["~/assets/css/public.scss"],

  nitro: {
    externals: {
      traceInclude: ["node_modules/vue/server-renderer/**"],
    },
  },
  app: {
    pageTransition: true, // 或者 pageTransition: {}
    layoutTransition: true, // 同理
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },

        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ],
    },
  },
  routeRules: {},
});
