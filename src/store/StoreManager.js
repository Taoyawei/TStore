// 管理所有 Store 实例的类：StoreManager 用于统一管理不同命名空间下的 Store 实例。
class StoreManager {
  constructor() {
    this.stores = {}; // 存储所有的Store实例
  }

  // 获取或创建一个指定命名空间的 Store 实例
  getStore(namespace, StoreClass) {
    if (!this.stores[namespace]) {
      // 创建命名空间下的 Store 实例
      this.stores[namespace] = new StoreClass();
    }
    return this.stores[namespace];
  }

  // 获取所有的 Store 实例
  getAllStores() {
    return this.stores;
  }

  // 销毁某个命名空间下的Store实例
  destroyStore(namespace) {
    delete this.stores[namespace];
  }
}

const storeManager = new StoreManager();

export default storeManager;
