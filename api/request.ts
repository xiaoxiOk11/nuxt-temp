import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { showToast } from "vant";
import { publicStore } from "~/stores/publicData";

interface HttpResponse<T> {
  code: number;
  message: string;
  data: T;
}

// 存储所有进行中的请求
const pendingRequests = new Map<string, AbortController>();

/**
 * 生成请求的唯一标识
 */
function generateRequestKey(config: AxiosRequestConfig): string {
  const { method, url, params, data } = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join("&");
}

function addPendingRequest(config: AxiosRequestConfig) {
  // 检查是否可取消
  const cancelable = config.headers?.["X-Cancelable"] !== "false";

  if (!cancelable) {
    return; // 不可取消的请求，不添加到 pending 列表
  }

  const requestKey = generateRequestKey(config);

  if (pendingRequests.has(requestKey)) {
    const controller = pendingRequests.get(requestKey);
    controller?.abort();
  }

  const controller = new AbortController();
  config.signal = controller.signal;
  pendingRequests.set(requestKey, controller);
}
/**
 * 从 pending 列表中移除请求
 */
function removePendingRequest(config: AxiosRequestConfig) {
  const requestKey = generateRequestKey(config);

  if (pendingRequests.has(requestKey)) {
    pendingRequests.delete(requestKey);
  }
}

/**
 * 取消所有 pending 请求
 */
export function cancelAllPendingRequests(
  message = "Route changed, request cancelled"
) {
  pendingRequests.forEach((controller) => {
    controller.abort(message);
  });
  pendingRequests.clear();
}

/**
 * 取消指定的请求
 */
export function cancelRequest(config: AxiosRequestConfig) {
  const requestKey = generateRequestKey(config);
  const controller = pendingRequests.get(requestKey);

  if (controller) {
    controller.abort();
    pendingRequests.delete(requestKey);
  }
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let lang = "en";
    let token = "";
    if (typeof window !== "undefined") {
      lang = localStorage.getItem("lang") || "en";
      token = localStorage.getItem("authorization") || "";
    }
    config.headers = {
      ...config.headers,
      lang: lang,
      authorization: token || "",
    };

    // 添加到 pending 列表
    addPendingRequest(config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<HttpResponse<any>>) => {
    // 请求完成，从 pending 列表中移除
    removePendingRequest(response.config);

    const { data } = response;
    const { code, message } = data;

    if (code !== 401 && code !== 1002) {
      if (typeof window !== "undefined") {
        let curVersion = localStorage.getItem("APP_VERSION");
        if (data.version !== curVersion) {
          localStorage.setItem("APP_VERSION", data.version);
        }
        // window.location.reload();
      }
    }

    // 服务异常
    if (response.status === 502) {
      return Promise.reject({ message: "Abnormal service" });
    }

    // 未找到
    if (response.status === 404) {
      return Promise.reject({ message: `[404] ${response.config.url}` });
    }

    // 成功
    if (response.status === 200) {
      const publicStoreDetail = publicStore();
      publicStoreDetail.$state.showLoading = false;
      publicStoreDetail.$state.actionLoading = false;

      switch (code) {
        case 1000:
          return data.data;

        case 1002:
          publicStoreDetail.show209Modal(true);
          return Promise.reject({ message: response.message });

        case 2000:
          showToast(message);
          return Promise.reject({ message, code, data });

        default:
          return Promise.reject({ message, code, data });
      }
    }

    return response;
  },
  (error) => {
    // 请求失败，从 pending 列表中移除
    if (error.config) {
      removePendingRequest(error.config);
    }

    // 如果是取消请求，不做处理
    if (axios.isCancel(error)) {
      console.log("Request cancelled:", error.message);
      return Promise.reject({ message: "Request cancelled", cancelled: true });
    }

    if (error.response?.status === 401) {
      const currentRoute = window.location.pathname;
      // 如果当前不在登录页面，则跳转到登录页

      if (!currentRoute.includes("/login")) {
        window.location.href = "/login/beforeLogin";
      }
    }

    if (error.response?.status === 500) {
      showToast(error.message);
      return Promise.reject({ message: error.message });
    }

    return Promise.reject({ message: error.message });
  }
);

// export default function request<T>(options: AxiosRequestConfig): Promise<T> {
//   return axiosInstance.request<T>({
//     ...options,
//     method: options.method || "GET",
//     url: options.url,
//   });
// }

export default function request<T>(
  options: AxiosRequestConfig & { cancelable?: boolean }
): Promise<T> {
  const { cancelable = true, ...axiosConfig } = options;

  return axiosInstance.request<T>({
    ...axiosConfig,
    method: axiosConfig.method || "GET",
    url: axiosConfig.url,
    // 添加自定义标记
    headers: {
      ...axiosConfig.headers,
      "X-Cancelable": cancelable.toString(),
    },
  });
}
