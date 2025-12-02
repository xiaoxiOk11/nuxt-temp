// nuxt.config.ts
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt", // 新增: Pinia 持久化
  ],
  ui: {
    global: true,
    primary: 'emerald',
    gray: 'cool'
  } as any,   
  build: {
    transpile: ["vant"],
  },
  devServer: {
    host: "0.0.0.0",
    port:3001
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
