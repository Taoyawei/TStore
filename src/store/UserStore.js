/**
 * 这是一个具体的 Store 类，管理用户信息，并展示如何使用异步操作和计算属性。
 */

import Store from './Store';

class UserStore extends Store {
  constructor() {
    super({ user: { name: 'John', age: 30 }, loading: false });
  }

  // 更新用户信息
  updateUser(newUser) {
    this.setState({ user: newUser });
  }

  // 异步获取用户数据
  async fetchUserData() {
    await this.runAsync(async () => {
      const user = await fetchUserFromAPI();
      this.updateUser(user);
    });
  }

  // 设置计算属性
  setUserFullName() {
    this.setComputed('fullName', () => `${this.state.user.name} Smith`);
  }
}

// 模拟 API 请求
const fetchUserFromAPI = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: 'Alice', age: 25 }), 2000)
  );
};

export default UserStore;
