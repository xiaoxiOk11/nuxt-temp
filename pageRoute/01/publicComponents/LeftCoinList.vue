<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const showLeftPop = ref(false)
const coinList = [
    {
    pro_name: "BTC",
    is_rise: 1,
    price: 123,
    rise_rate:50
    },
    {
        pro_name: "BTC",
        is_rise: 2,
        price: 12113,
        rise_rate: 10
    },
]

const selectCoin = item => {
    console.log('123',123);
}

defineExpose({
    showLeftPop
})
</script>

<template>
    <div>
        <van-popup v-model:show="showLeftPop" position="left">
            <div class="leftCoinList ">
                <div class="between borderB pdtb10 pdlr15 " style="background: var(--pageBg);">
                    <div>{{ t('all.s16') }}</div>
                    <div class="text_center">{{ t('all.s9') }}</div>
                    <div class="textRight">{{ t('tabbar.t59') }}</div>
                </div>

                <div class="  ">
                    <div class="between  coinListItemEL pdtb10 f16 toPointer" v-for="(item, index) in coinList"
                        :key="index" @click="selectCoin(item)">
                        <div class="  ">
                            {{ item.pro_name }}/USDT
                        </div>
                        <div class=" text_center" :class="item.is_rise > 1 ? ' colorUp2' : ' colorDown2'">{{ item.price
                            > 1 ?
                            Number(item.price).toFixed(2) : item.price }}
                        </div>
                        <div class="riseEl textRight   colorfff bbo5"
                            :class="item.is_rise > 1 ? ' colorUp2' : ' colorDown2'">
                            {{ (item.is_rise > 1 ? "+" : '-') + item.rise_rate + '%' }}
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>



<style lang="scss" scoped>
.leftCoinList {
    height: 100vh;
    overflow: scroll;
    width: 70vw;
    max-width: 20rem;
    color: #000;
    .borderB{
        border-bottom: 1px solid #E0E0E0;
    }
    .between {

        div {
            width: 50%;
        }

        div:nth-child(1),
        div:nth-child(3) {
            width: 25%;
        }
    }

    .coinListItemEL {
        padding: 15px;
        // background: var(--recordBg);
    }

    .coinListItemEL:not(:last-child) {
        border-bottom: 1px solid var(--borderColor);
    }
}
</style>