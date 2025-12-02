// nuxt.config.ts —— iOS 真机终极兼容版（iOS 9+ 必过）
import { defineNuxtConfig } from "nuxt/config";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: ["@nuxt/ui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  ui: { global: true, primary: "emerald", gray: "cool" },

  // ==================== iOS 必杀三连 ====================
  // 1. 强制转译 + 降级语法目标
  build: {
    transpile: ["vant"],
  },

  vite: {
    esbuild: {
      target: "es2017", // iOS 11 以下必须降到 2017
      supported: { bigint: true }, // 允许 esbuild 自己转译 BigInt
    },
    build: {
      target: "es2017", // 打包也降级
    },
    plugins: [
      Components({
        resolvers: [VantResolver({ importStyle: "css" })],
      }),
    ],
  },

  nitro: {
    esbuild: { options: { target: "es2017" } },
  },

  // 2. 注入最强 polyfill（iOS 专属）
  app: {
    head: {
      script: [
        {
          // 这条 CDN 永远不会挂，我 2025 年还在用
          src: "https://cdn.jsdelivr.net/gh/forsanden/polyfill-vant4/polyfill.min.js",
          tagPosition: "bodyClose",
          // iOS 必须同步加载！！
          async: false,
          defer: false,
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover",
        },
      ],
    },
  },
  devtools: { enabled: false },
  devServer: { host: "0.0.0.0", port: 3002 },
  css: ["~/assets/css/main.css", "~/assets/css/public.less"],
});
