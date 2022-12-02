import { createPinia } from 'pinia';
import { defineStore } from 'pinia';
import { GlobalState } from '@/types/storeState';
import piniaPersist from 'pinia-plugin-persist';
import piniaPersistConfig from '@/config/piniaPersist';

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'GlobalState',
  // state: 返回对象的函数
  state: (): GlobalState => ({
    token: '',
    userInfo: {}
  }),
  getters: {},
  actions: {
    // set token
    setToken(token: string) {
      this.token = token;
    },
    // set userInfo
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig('GlobalState')
});

// piniaPersist(持久化)
const store = createPinia();
store.use(piniaPersist);

export default store;
