import { defineStore } from 'pinia';
import { UserState } from '@/types/storeState';
import { UserItem } from '@/types/user';
import piniaPersistConfig from '@/config/piniaPersist';

// MenuStore
export const UserStore = defineStore({
  id: 'UserState',
  state: (): UserState => ({
    username: '',
    userId: 0,
    userAvator: '',
    userList: []
  }),
  getters: {
    nameLength: (state) => state.username.length
  },
  actions: {
    async updateName(username: string) {
      this.username = username;
    },
    async updateUserId(userId: number) {
      this.userId = userId;
    },
    async updateUserAvator(userAvator: string) {
      this.userAvator = userAvator;
    },
    async updateUserList(userList: UserItem[]) {
      this.userList = userList;
    }
  },
  persist: piniaPersistConfig('UserState')
});
