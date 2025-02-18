// 中间件实现
export const loggerMiddleware = (state, prop, value) => {
  console.log(`State updated: ${prop} = ${value}`);
};

export const persistMiddleware = (state, prop, value) => {
  // 模拟将状态保存到 localStorage
  localStorage.setItem(prop, value);
}