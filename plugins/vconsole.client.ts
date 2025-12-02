export default defineNuxtPlugin((nuxtApp) => {
  // 获取运行时配置或环境变量
  const config = useRuntimeConfig();

  // 判断条件：
  // 1. 显式判断环境 (例如只在 development 或 test 开启)
  // 2. 或者通过 URL 参数动态开启 (例如 ?debug=true)
  const shouldLoad =
    import.meta.env.MODE === "development" ||
    import.meta.env.MODE === "staging" ||
    window.location.search.includes("debug=true");

  if (shouldLoad) {
    // 动态导入 vConsole，减少生产包体积
    // import("vconsole").then((module) => {
    //   const VConsole = module.default;
    //   const vConsole = new VConsole();

    //   // 可选：将 vConsole 实例挂载到全局，方便后续调用
    //   // window.vConsole = vConsole;
    // });
  }
});
