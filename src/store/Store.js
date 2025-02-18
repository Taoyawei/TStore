/**
 * 基类，定义 Store 的基本行为
 * Store 是一个基类，所有具体的 Store 都将继承自它，支持状态的响应式更新、异步操作、中间件、计算属性等功能。
 */

class Store {
  constructor(initialState = {}) {
    this.state = this.makeObservable(initialState);
    // 存储中间件
    this.middlewares = [];
    // 存储计算属性
    this.computed = {};
  }

  // 使用Proxy使状态变得响应式
  makeObservable(state) {
    const handler = {
      get: (target, prop) => {
        if (prop in this.computed) {
          // 如果是计算属性，返回计算结果
          return this.computed[prop]();
        }
        return target[prop];
      },
      set: (target, prop, value) => {
        if (this.middlewares.length) {
          // 执行所有中间件
          this.middlewares.forEach((middleware) => {
            middleware(this.state, prop, value);
          })
        }
        target[prop] = value;
        return true;
      }
    };
    return new Proxy(state, handler);
  };

  // 获取状态
  getState() {
    return this.state;
  }

  // 设置状态
  setState(newState) {
    Object.assign(this.state, newState);
  }

  // 添加中间件
  addMiddleware(middleware) {
    this.middlewares.push(middleware);
  }

  // 设置计算属性
  setComputed(name, fn) {
    this.computed[name] = fn;
  }

  // 运行异步操作
  async runAsync(action) {
    this.setState({ loading: true });
    await action();
    this.setState({ loading: false });
  }
}

export default Store;
