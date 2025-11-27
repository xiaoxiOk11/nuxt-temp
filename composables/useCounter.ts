export const useCounter = () => {
  // useState 是 Nuxt 提供的用于创建响应式且支持 SSR 的状态的函数
  // 'counter' 是一个唯一的 key，确保在应用的不同部分访问的是同一个状态
  // () => 0 是一个工厂函数，用于设置初始值（仅在状态首次创建时执行）
  return useState("counter", () => 0);
};
