import { defineStore } from "pinia";
import { getUserInfo } from "~/api/home/home.ts";

export const publicStore = defineStore("publicStoreSCR", {
  state: () => ({
    userInfo: {},
    currency: "", //平台货币符号
    appData: {}, //app数据
    showLoading: false,
    actionLoading: false,
    loadingMsg: "",
    rechargeTypeList: [], //充值列表类型
    selectRechargeType: {},
    webSiteData: {}, // 网站信息
  }),

  actions: {
    initPlantData() {
      this.updateUserInfo();
    },
    updateUserInfo() {
      getUserInfo().then((res) => {
        this.userInfo = res;
      });
    },
  },
  persist: {
    key: "publicStore",
    storage: persistedState.localStorage, // 只在客户端加载
  },
});
