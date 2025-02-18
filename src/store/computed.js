// 计算属性实现：计算属性的实现，我们可以通过 Store 设置并动态计算值。
export const computed = (store, name, fn) => {
  store.setComputed(name, fn);
};