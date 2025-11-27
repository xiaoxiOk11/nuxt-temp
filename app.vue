<!-- app.vue -->
<template>
  <div>
    <!-- NuxtPage 现在会使用我们动态生成的 pageTransition 对象 -->
    <UApp>
      <NuxtPage class="pageContainer" :transition="pageTransition" />

    </UApp>
    <van-backTop></van-backTop>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { themeRoute } from "~/stores/theme";
import gsap from "gsap";
import { getWebSite } from "~/api/home/home";
const usePublicStore = publicStore();


// start  页面切换 动画。待修复tabbar显示问题
const animations = [
  {
    name: "slide-up",
    enter: { opacity: 0, y: 50 },
    leave: { opacity: 0, y: -50 },
  },
  {
    name: "slide-down",
    enter: { opacity: 0, y: -50 },
    leave: { opacity: 0, y: 50 },
  },
  {
    name: "slide-left",
    enter: { opacity: 0, x: 100 },
    leave: { opacity: 0, x: -100 },
  },
  {
    name: "zoom-in",
    enter: { opacity: 0, scale: 0.8 },
    leave: { opacity: 0, scale: 0.8 },
  },
  {
    name: "fade",
    enter: { opacity: 0 },
    leave: { opacity: 0 },
  },
];

let lastAnimationIndex = -1;
const getRandomAnimation = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * animations.length);
  } while (animations.length > 1 && randomIndex === lastAnimationIndex);

  lastAnimationIndex = randomIndex;
  return animations[randomIndex];
};

const currentAnimation = ref(getRandomAnimation());

const router = useRouter();
router.beforeEach((to, from, next) => {
  // 仅在实际发生页面切换时才更新动画（跳过初始加载）
  if (from.name) {
    currentAnimation.value = getRandomAnimation();
  }
  next(); // 必须调用 next() 以继续导航
});

const pageTransition = reactive({
  name: "dynamic-gsap",
  mode: "out-in",

  // onEnter(el, done) {
  //   // 使用当前选定动画的 enter 参数
  //   gsap.from(el, {
  //     duration: 0.5,
  //     ease: 'power2.inOut',
  //     ...currentAnimation.value.enter,
  //     onComplete: done
  //   })
  // },

  // onLeave(el, done) {
  //   gsap.to(el, {
  //     duration: 0.5,
  //     ease: 'power2.inOut',
  //     ...currentAnimation.value.leave,
  //     onComplete: done
  //   })
  // }
});
//  end 

const getWebSiteData = () => {
  getWebSite().then((res) => {
    usePublicStore.webSiteData = res;
  });
};
onMounted(() => {
  console.log(222);
  getWebSiteData();
});
</script>

<style>
/* 可选：为了防止页面切换时因滚动条消失/出现导致的页面抖动 */
html.page-leave-active {
  overflow: hidden;
}

.van-popup {
  background: #000 !important;
}
</style>
