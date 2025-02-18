/**
 * 这是另一个具体的 Store 类，管理 UI 状态（如主题、加载状态等），演示如何使用中间件和计算属性。
 */
import Store from './Store';

class UIStore extends Store {
  constructor() {
    super({ theme: 'light', loading: false });
  }

  // 切换主题
  toggleTheme() {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: newTheme });
  }

  // 设置加载状态
  setLoading(loading) {
    this.setState({ loading });
  }

  // 使用中间件来记录每次状态的变化
  logChanges(state, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
  }

  // 设置中间件
  addLogMiddleware() {
    this.addMiddleware(this.logChanges);
  }
}

export default UIStore;
