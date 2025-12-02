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
        <div>
          hajksdhkjsh
        </div>
        <van-button type="primary" @click="showAlert">hahah</van-button>
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    {{ counter }}

  </section>
</template>

<script setup>

const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
import { showToast } from 'vant';
const showToastHandle = (message) => {
  showToast('Hello World');
  console.log('111', 111);
};
const counter =ref(0)
const showAlert = () => {
  // alert("123")
  counter.value++;
}
</script>


<style lang="scss" scoped></style>