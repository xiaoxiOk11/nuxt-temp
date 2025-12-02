<template>
  <section>
   
    <div>
      <van-button @click="showToastHandle('Hello world')">
        hello world
      </van-button>
      <NuxtLink to="/login/beforeLogin">
        <van-button>
          goLogin
        </van-button>
      </NuxtLink>

      <div class="skeleton h-32 w-32"></div>

      <van-card num="2" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />

    </div>


  </section>
</template>

<script setup>
import { themeRoute } from '~/stores/theme'
const useThemeRoute = themeRoute();

const currentThemeComponent = computed(() => {
  if (!useThemeRoute.fileRoute) return null;
  return defineAsyncComponent(() => import(`~/pageRoute/${useThemeRoute.fileRoute}/index.vue`))
});

const changeTheme = () => {
  if (useThemeRoute.fileRoute === '01') {
    useThemeRoute.fileRoute = '02';
  } else {
    useThemeRoute.fileRoute = '01';
  }
}
import { showToast } from 'vant';
const showToastHandle = (message) => {
  // console.log('showToast', showToast);
  showToast('Hello World');
  console.log('111', 111);
};
</script>


<style lang="scss" scoped></style>