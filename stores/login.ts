import { defineStore } from "pinia";
import {
  countryApi,
  registerSetting,
  getRegisterConfig,
} from "~/api/home/home";
interface stateFace {
  areaCode: object;
  countryList: Array<Object>;
  registerChanel: Array<Number>;
  registerInviteCode: boolean;
  loginType: Array<Object>;
  showCaptcha:Boolean
}
export const LoginStore = defineStore("loginStore", {
  state: (): stateFace => ({
    areaCode: {}, //当前地区码
    countryList: [], //地区码列表
    registerChanel: [], //登录注册 类型
    registerInviteCode: false, //是否需要邀请码
    loginType: [], //展示在页面的类型
    showCaptcha:false
  }),
  actions: {
    selectAreaCode(code: codeFace) {
      this.areaCode = code;
    },
    initLoginData() {
      countryApi().then((res: any) => {
        this.countryList = res;
        if (!this.areaCode.code) {
          this.areaCode = res[0];
        } else {
          let code = this.countryList.filter((item) => {
            return item.id == this.areaCode.id;
          });
          if (code.length > 0) {
            this.areaCode = code[0];
          } else {
            this.areaCode = res[0];
          }
        }
      });
      registerSetting().then((res: any) => {
        let channel = res.registerChannel.channel;
        this.registerInviteCode =
          res.registerInviteCode.status > 0 ? true : false;
        this.loginType = [];
        if (channel.includes(1)) {
          this.loginType.push("phone");
        }
        if (channel.includes(2)) {
          this.loginType.push('email');
        }
      });
      getRegisterConfig().then((res:any) => {
        this.showCaptcha = res.register_is_captcha == 1 ? true : false;
      });
    },
  },
  persist: {
    key: "publicStore", //如果需要对存储的密钥key进行命名
    storage: localStorage,
  },
});
