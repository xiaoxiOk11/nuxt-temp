import request from "~/api/request.ts";
/**
 * @description 手机号注册
 */
export function joinRegister(data) {
  return request({
    url: "/join/register",
    method: "POST",
    data,
  });
}
/**
 * @description 邮箱注册
 */
export function emailRegister(data) {
  return request({
    url: "/join/email/register",
    method: "POST",
    data,
  });
}
/**
 * @description 手机发送验证码
 */
export function sendPhoneCode(data) {
  return request({
    url: "/join/sms",
    method: "POST",
    data: data,
  });
}
/**
 * @description 邮箱发送验证码
 */
export function sendEmailCode(data) {
  return request({
    url: "/join/email/sms",
    method: "POST",
    data,
  });
}
/**
 * @description 获取注册信息
 */
export function registerSetting() {
  return request({
    url: "/setting/register",
  });
}
/**
 * @description 登陆
 */
export function joinLogin(data) {
  return request({
    url: "/join/login",
    method: "POST",
    data,
  });
}
/**
 * @description 邮箱登陆
 */
export function emailLogin(data) {
  return request({
    url: "/join/email/login",
    method: "POST",
    data,
  });
}
/**
 * @description 获取区号
 */
export function countryApi() {
  return request({
    url: "/setting/country",
  });
}

/**
 * @description 获取网站app内容
 */
export function getWebSite() {
  return request({
    url: "/setting/website",
  });
}
/**
 * @description 用户信息
 */
export function getUserInfo() {
  return request({
    url: "/user/index",
    cancelable: false, // 不可取消
  });
}
/**
 * @description 语言列表
 */
export function langListApi() {
  return request({
    url: "/setting/lang",
  });
}
/**
 * @description 获取上传配置
 */
export function getUploadHostService() {
  return request({
    url: "/setting/upload",
  });
}

/**
 * @description 获取平台货币符号  /setting/userAgreement
 */
export function getPlantCurrency() {
  return request({
    url: "/setting/currency",
  });
}

// /**
//  * @description 图片验证码
//  */
// export function imgVerifyConfigApi() {
//   return request({
//     url: "/join/imgVerifyConfig",
//     params,
//   });
// }

/**
 * @description 注册配置
 */
export function getRegisterConfig() {
  return request({
    url: "join/registerConfig",
  });
}

//

/**
 * @description 获取验证码
 */
export function sendCodeHandle(data) {
  return request({
    url: "user/send",
    method: "POST",
    data,
  });
}
