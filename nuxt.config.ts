// nuxt.config.ts
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt", // 新增: Pinia 持久化
    "@nuxtjs/i18n", // 新增: i18n
    "@vite-pwa/nuxt", // 新增: PWA
  ],
  ui: {
    global: true,
    primary: 'emerald',
    gray: 'cool'
  } as any,   // 加这句直接干掉 TS 报错（官方都这么干）
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
    host: "0.0.0.0",
    port:3001
  },
  
  pwa: {
   workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',  // 重要：解决 import 报错
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
  css: ["~/assets/css/main.css","~/assets/css/public.less"],

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
});
