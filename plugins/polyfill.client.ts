import "core-js/stable";
import "regenerator-runtime/runtime";

// Vant 4 内部用了 BigInt，极老浏览器没有，手动补一个最小 polyfill
if (typeof BigInt === "undefined") {
  (window as any).BigInt = (v: any) => v;
}
export default defineNuxtPlugin((nuxtApp) => {
  // 这个插件的目的就是为了在构建时引入样式文件
  // 所以函数体内部可以为空
});
