<template>
  <div class="wechat-moment">
    <div class="background-wall">
      <img class="background-wall-bg" src="@/assets/images/bg-wall-2.png" alt="" />
    </div>
    <div class="user-avator">
      <div class="username">{{ username }}</div>
      <div class="avator">
        <img :src="userAvator" alt="" />
      </div>
    </div>
    <div class="moment-list">
      <Item
        v-for="(item, index) in state.momentList"
        :momentItem="item"
        :userId="userId"
        :key="index"
        :index="index"
        @delete="handleDelete"
      >
      </Item>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Dialog } from 'vant';
  import Item from './components/Item.vue';
  import { MomentItem } from '@/types/wechatMoment';
  import { MomentStore } from '@/store/modules/wechatMoment';
  import { UserStore } from '@/store/modules/user';
  import { formatDate } from '@/utils/date';

  const momentStore = MomentStore();
  const userStore = UserStore();

  const username = userStore.username;
  const userAvator = userStore.userAvator;
  const userId = userStore.userId;

  const state = reactive<{ momentList: MomentItem[] }>({
    momentList: []
  });
  state.momentList = momentStore.momentList;
  state.momentList = state.momentList.map((item) => {
    const items = JSON.parse(JSON.stringify(item));
    items.time = formatDate(Number(item.time));
    return items;
  });

  const handleDelete = (data: { index: number }) => {
    Dialog.confirm({
      title: '提示',
      message: '确定要删除朋友圈？',
      confirmButtonColor: '#053d76'
    }).then(() => {
      state.momentList.splice(data.index, 1);
      momentStore.momentList.splice(data.index, 1);
      momentStore.updateMomentList(momentStore.momentList);
    });
  };
</script>

<style lang="less" scoped>
  .wechat-moment {
    position: relative;
    background: #ffffff;

    .background-wall {
      position: relative;
      width: 100%;
      height: 520px;
      overflow: hidden;

      .background-wall-bg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .user-avator {
      position: absolute;
      display: flex;
      top: 450px;
      right: 30px;

      .username {
        color: #ffffff;
        font-size: 28px;
        margin-top: 20px;
        margin-right: 20px;
      }

      .avator {
        width: 110px;
        height: 110px;
        overflow: hidden;
        border-radius: 8px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .moment-list {
      padding: 0 0 100px;
      margin-top: 140px;
    }
  }
</style>
