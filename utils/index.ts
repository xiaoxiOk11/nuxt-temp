export const hello = () => console.log("Hello World");
import Compressor from "compressorjs";
import axios from "axios";
// 加密数据

export const openFlow = () => {
  if (window.deferredPrompt) {
    // You can use window.deferredPrompt here
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("用户接受了安装提示");
      } else {
        console.log("用户拒绝了安装提示");
      }
      deferredPrompt = null;
    });
  } else {
    // showToast("Please add to home screen");
    // console.log("window.deferredPrompt", window.deferredPrompt);
    // console.warn("deferredPrompt is not available");
  }
};

// 上传图片
export const uploadFile = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// 时间戳转时间
export function formatCountdown(timestamp) {
  // 计算小时、分钟、秒
  const hours = Math.floor(timestamp / 3600);
  timestamp %= 3600;

  const minutes = Math.floor(timestamp / 60);
  timestamp %= 60;

  const seconds = Math.floor(timestamp);

  // 补零函数
  const padZero = (num) => num.toString().padStart(2, "0");

  // 返回格式化的倒计时
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

export function timestampToDateTime(timestamp, type) {
  // 时间戳转时间
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  if (type == "HH:MM") {
    return hours + ":" + minutes;
  } else {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}

export function changeDataType(Arr) {
  const newArr = Arr.map((item) => {
    return (item = {
      timestamp: timestampToDateTime(item.id * 1000),
      open: item.open,
      low: item.low,
      high: item.high,
      close: item.close,
      volume: item.volume || item.vol,
    });
  });
  return newArr.reverse();
}

function formatTimestamp(timestamp) {
  // 如果是秒级时间戳，转换为毫秒
  if (String(timestamp).length === 10) {
    return timestamp * 1000;
  }
  // 如果已经是毫秒级时间戳，直接返回
  return timestamp;
}

export function exchangeKLineDta(data) {
  let tempData = data.timestamp.map((item, index) => {
    return {
      timestamp: item,
      open: data.indicators.quote[0].open[index],
      high: data.indicators.quote[0].high[index],
      low: data.indicators.quote[0].low[index],
      close: data.indicators.quote[0].close[index],
      volume: data.indicators.quote[0].volume[index],
    };
  });
  tempData.forEach((item, index) => {
    for (var key in item) {
      if (!item[key]) {
        let previousValue = index > 0 ? tempData[index - 1] : null; // 前一项
        let nextValue =
          index < tempData.length - 1 ? tempData[index + 1] : null;
        item[key] =
          previousValue !== null ? previousValue[key] : nextValue[key];
      }
    }
  });
  return tempData.reverse();
}

// 压缩图片

/**
 * 核心压缩函数
 * @param {File} file - 原始文件
 * @description {Promise<File>}
 */
export function compressFile(file) {
  return new Promise((resolve, reject) => {
    // 判断文件类型如果不是图片就直接返回不做压缩
    if (!file.type.includes("image")) {
      resolve(file);
      return;
    }

    // 使用 compressorjs 进行压缩
    new Compressor(file, {
      // 压缩质量，范围：0 - 1，默认为 0.8
      quality: 0.6,

      // 最大宽度
      maxWidth: 1920,
      // 最大高度
      maxHeight: 1080,

      // 其他配置项...
      // checkOrientation: true, // 是否检查 EXIF 的方向信息
      // convertSize: 5000000, // 超过 5MB 的图片才进行尺寸转换

      success(result) {
        console.log("before:", (file.size / 1024 / 1024).toFixed(2) + "MB");
        console.log("after:", (result.size / 1024 / 1024).toFixed(2) + "MB");

        // compressorjs 压缩后的结果是一个 Blob 对象，需要转回 File 对象
        // （新版 compressorjs 直接返回 File 对象，但为保险起见，可以做个判断）
        const newFile =
          result instanceof File
            ? result
            : new File([result], file.name, {
                type: result.type,
                lastModified: Date.now(),
              });

        resolve(newFile);
      },
      error(err) {
        console.error("压缩失败：", err.message);
        reject(err);
      },
    });
  });
}

export function formatBigNumber(number: number) {
  if (!number) return "0";
  const num = Number(number);
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 10) {
    return Number(num).toLocaleString("en-US", __Options__);
  }
}
