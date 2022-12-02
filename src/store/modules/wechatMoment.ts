import { defineStore } from 'pinia';
import { MomentState } from '@/types/storeState';
import { MomentItem } from '@/types/wechatMoment';
import piniaPersistConfig from '@/config/piniaPersist';

// MenuStore
export const MomentStore = defineStore({
  id: 'MomentState',
  state: (): MomentState => ({
    momentList: []
  }),
  getters: {},
  actions: {
    async updateMomentList(momentList: MomentItem[]) {
      this.momentList = momentList;
    }
  },
  persist: piniaPersistConfig('MomentState')
});
