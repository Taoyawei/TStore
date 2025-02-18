// React Hook 用于获取 Store 实例：一个 React Hook 用来在组件中使用 Store。
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export const useStore = (namespace) => {
  const stores = useContext(StoreContext);
  return stores[namespace];
}