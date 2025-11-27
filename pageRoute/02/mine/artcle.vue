<script setup>
import icon from '~/assets/images/o2.png'

</script>

<template>
    <div class="page-content">
        <van-nav-bar title="特卖会" left-arrow @click-left="$router.back()" />


        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item>
                <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                    style="width: 100%; height: 200px; object-fit: cover;" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
                    style="width: 100%; height: 200px; object-fit: cover;" />
            </van-swipe-item>
        </van-swipe>

        <div class="custom-card">
            <van-card num="2" price="268.00" desc="设计师联名款" title="限定款卫衣"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
                <template #tags>
                    <van-tag type="primary" plain>新品</van-tag>
                    <van-tag type="danger" plain>热门</van-tag>
                </template>
                <template #footer>
                    <van-button size="mini">加入购物车</van-button>
                    <van-button size="mini" type="primary">立即购买</van-button>
                </template>
            </van-card>
        </div>

        <div style="padding: 0 16px;">
            <van-button type="primary" color="linear-gradient(to right, #ff9f1c, #ff6b6b)" block>
                抢购更多优惠
            </van-button>
        </div>
        <img :src="icon" alt="">

    </div>
</template>

<style scoped lang="scss">
.page-content {
    padding-bottom: 20px;
}

// 为卡片组件微调
:deep(.van-card__price) {
    font-weight: bold;
}
</style>