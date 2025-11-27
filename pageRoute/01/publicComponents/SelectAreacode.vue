<script setup>
import { LoginStore } from '@/stores/login'
const useLoginStore = LoginStore()
const showAreaCode = ref(false)
const props = defineProps({
    selectCodeHandle: {
        type: Function
    }
})
const areaCode = computed(() => useLoginStore.areaCode)

const countryList = computed(() => {
    return useLoginStore.countryList
})
const searchVal = ref("")
const selectAreaCode = (item) => {
    showAreaCode.value = false
    useLoginStore.selectAreaCode(item)
    props.selectCodeHandle(item)
}

const showCountryList = ref([])
// 输入框 输入事件
const searchHandle = () => {
    document.querySelector('.areaContent').scrollTo({
        top: 0,
        behavior:'smooth'
    })
    showCountryList.value = countryList.value.filter(item => item.country_code.includes(searchVal.value))
}

// 清空输入框
const clearSearchHandle = () => {
    searchVal.value = ""
    showCountryList.value = countryList.value
}
defineExpose({
    showAreaCode,
    showCountryList
})
</script>

<template>
    <div class="popComEl">
        <van-popup v-model:show="showAreaCode" position="bottom" round :style="{ maxHeight: '50vh' }">
            <div class="area-list popContentBox">
                <div class="pdlr16">
                    <div class="area-title text_center text_bold f16 pb16 pt30">{{ $t('login.r13') }}</div>
                    <div class="searchBox">
                        <div class="inpBoxEl between">
                            <input type="tel" class="flex1 f14 ml10" :placeholder="$t('login.r8') + $t('login.r15')"
                                v-model="searchVal" :focus="true" @input="searchHandle">
                            <UIcon name="bitcoin-icons:clear-character-filled" v-if="searchVal" class="toPointer"
                                width="1.5rem" color="#00d4ff" @click="clearSearchHandle">
                            </UIcon>
                        </div>
                    </div>
                    <div class="areaContent">
                        <div v-for="item in showCountryList" :key="item.code" class="area-item toPointer between f14 mb10"
                            :class="item.country_code == areaCode.country_code ? 'selectActEl' : ''"
                            @click="selectAreaCode(item)">
                            <div>{{ item.country_code }}</div>
                            <UIcon name="material-symbols:check-rounded"
                                v-if="item.country_code == areaCode.country_code" color="#fff">
                            </UIcon>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>


<style lang="scss" scoped>

.area-list {
    background: #fff;
    color: #000;
    
    .area-title {
        color: var(--mainColor);
        font-weight: bold;
    }
    
    .areaContent {
        margin-top: 20px;
        height: 30vh;
        overflow: scroll;

        .area-item {
            padding: 10px 8px;
            color: #000;
            // background: #2a2a2a;
            border-radius: 8px;
            margin-bottom: 4px;
            transition: all 0.2s ease;
            border: 1px solid #D2D2D2;
            
            &:hover {
                background: #744bde;
                color: #fff;
                border-color: #744bde;
            }
        }

        .selectActEl {
            background: var(--mainColor);
            color: #fff;
            border-radius: 8px;
            font-weight: 500;
            border: 1px solid var(--mainColor);
        }
    }

    .searchBox {
        margin-bottom: 16px;
    }

    .inpBoxEl {
        padding: 10px 8px;
        border-radius: 8px;
        // background: #2a2a2a;
        border: 1px solid #D2D2D2;
        transition: border-color 0.2s ease;

        &:focus-within {
            border-color: var(--mainColor);
        }

        input {
            background: transparent;
            // color: #fff;
            border: none;
            outline: none;
            
            &::placeholder {
                color: #888;
            }
        }
    }
}
</style>