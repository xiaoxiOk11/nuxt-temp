import request from "~/api/request.ts";

/**
 * @description 充值列表
 */
export function getRechargeTypeList(params) {
  return request({
    url: "/finance/product/list",
    method: "GET",
    params,
  });
}

/**
 * @description 充值详情
 */
export function getRechargeInfo(params) {
  return request({
    url: "/finance/product/info",
    method: "GET",
    params,
  });
}

//
/**
 * @description 提现详情
 */
export function getWithdrawInfo(params) {
  return request({
    url: "/finance/product/withdraw/info",
    method: "GET",
    params,
  });
}

/**
 * @description 检查用户信息
 */
export function getWithdrawAddressInfo(params) {
  return request({
    url: "/finance/product/withdraw/address",
    method: "GET",
    params,
  });
}
//

/**
 * @description 提交提现
 */
export function submitWithdraw(data) {
  return request({
    url: "/finance/product/withdraw/submit",
    method: "POST",
    data,
  });
}
