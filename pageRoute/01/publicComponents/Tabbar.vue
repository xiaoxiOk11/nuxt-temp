<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const route = useRoute()
const active = ref(0)

const tabs = computed(() => {
    return [
        {
            name: 'Home',
            path: '/',
        },
        {
            name:'Quantify',
            path: '/tabbar/quantify',
        },
        {
            name:'Invest',
            path: '/tabbar/invest',
        },
        {
            name:'Contract',
             path: '/tabbar/contract',
        },
        {
            name: 'Me',
             path: '/tabbar/me',
        }
    ]
})


const onChange = (index) => {
    active.value = index
    router.push(tabs.value[index].path)
}

// 根据当前路由设置激活的标签
const setActiveTab = () => {
    const currentPath = route.path
    const index = tabs.value.findIndex(tab => tab.path === currentPath)
    if (index !== -1) {
        active.value = index
    }
}
// 初始化时设置激活的标签
setActiveTab()

// 监听路由变化
router.afterEach(() => {
    setActiveTab()
})


</script>

<template>
    <div>
        <van-tabbar v-model="active" @change="onChange" class="tabbar" :safe-area-inset-bottom="true">
            <van-tabbar-item :name="0" :index="0">
                <template #icon="props">
                    <img :src="props.active ? tabs[0].selectIcon : tabs[0].icon" class="tabbar-icon" />
                    <div class="f12">{{ tabs[0].name }}</div>
                </template>
            </van-tabbar-item>
            <van-tabbar-item :index="1" :name="1" :dot="false">
                <template #icon="props">
                    <van-badge :content="tabs[1].badge" :show-zero="false">
                        <img :src="props.active ? tabs[1].selectIcon : tabs[1].icon" class="tabbar-icon" />
                        <div class="f12">{{ tabs[1].name }}</div>

                    </van-badge>
                </template>
            </van-tabbar-item>
            <van-tabbar-item :index="2" :name="2">
                <template #icon="props">
                    <img :src="props.active ? tabs[2].selectIcon : tabs[2].icon" class="tabbar-icon" />
                    <div class="f12">{{ tabs[2].name }}</div>
                </template>
            </van-tabbar-item>
            <van-tabbar-item :index="3" :name="3">
                <template #icon="props">
                    <img :src="props.active ? tabs[3].selectIcon : tabs[3].icon" class="tabbar-icon" />
                    <div class="f12">{{ tabs[3].name }}</div>
                </template>
            </van-tabbar-item>
            <van-tabbar-item :index="4" :name="4">
                <template #icon="props">
                    <img :src="props.active ? tabs[4].selectIcon : tabs[4].icon" class="tabbar-icon" />
                    <div class="f12">{{ tabs[4].name }}</div>
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <div style="height: 50px;"></div>
    </div>
</template>

<style lang="scss" scoped>
.tabbar {
    // position: absolute !important;
    bottom: 0 !important;
    max-width: var(--maxWidth);
    left: 50%;
    z-index: 990 !important;
    max-width: var(--pageWidth);
    transform: translateX(-50%);
    background: #312D3D;
    :deep(.van-tabbar-item--active) {
        background: transparent;
        .van-badge__wrapper {
            color: #fff !important;
        }
    }

    :deep(.van-tabbar-item) {
        .van-badge__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #979797;
        }

        .tabbar-icon {
            width: 24px;
            height: 24px;
            margin-bottom: 4px;
        }

        .tabbarCenter {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);

            z-index: 99;

            img {
                height: 40px;
                width: 40px;
            }
        }

        .f12 {
            text-align: center;
    font-size: 12px;
        }
    }
    height: 50px;
}

</style>