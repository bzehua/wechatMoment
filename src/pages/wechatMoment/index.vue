<template>
  <div class="wechat-moment">
    <div class="background-wall">
      <img class="background-wall-bg" src="@/assets/images/bg-wall-2.png" alt="" />
    </div>
    <div class="user-avator">
      <div class="username">夕阳南下</div>
      <div class="avator">
        <img src="@/assets/images/avator1.png" alt="" />
      </div>
    </div>
    <div class="moment-list">
      <div class="moment-item" v-for="(item, index) in state.momentList" :key="index">
        <div class="moment-item-avator">
          <img src="@/assets/images/avator1.png" alt="" />
        </div>
        <div class="moment-item-main">
          <div class="moment-item-username">{{ item.username }}</div>
          <div class="moment-item-content">{{ item.content }}</div>
          <div class="moment-item-footer">
            <div class="moment-item-time">{{ item.time }}</div>
            <div class="moment-item-func"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { WechatMoment } from '@/types/wechatMoment';
  const state = reactive<{ momentList: WechatMoment[] }>({
    momentList: []
  });
  state.momentList = [
    {
      id: 1,
      username: '夕阳南下',
      avator: '@/asstes/images/avator1.png',
      content: '牙疼了一天，虽然没怎么看球。',
      time: '1分钟前',
      commentList: []
    },
    {
      id: 2,
      username: '夕阳南下',
      avator: '@/asstes/images/avator1.png',
      content:
        '春未老，风细柳斜斜。试上超然台上看，半壕春水一城花。烟雨暗千家。寒食后，酒醒却咨嗟。休对故人思故国，且将新火试新茶。诗酒趁年华。',
      time: '1分钟前',
      commentList: []
    },
    {
      id: 1,
      username: '夕阳南下',
      avator: '@/asstes/images/avator1.png',
      content:
        '世界上最远的距离， 是我站在你的面前 ，你却不知道我爱你 。世界上最远的距离 ，是想你痛彻心脾 ，却只能深埋心底。世界上最远的距离 ，是尚未相遇 ，便注定无法相聚。世界上最远的距离 ，是鱼与飞鸟的距离 ，一个在天 ，一个却深潜海底。——原来，海鸟跟鱼相爱，永远只是一场意外。',
      time: '1分钟前',
      commentList: []
    },
    {
      id: 1,
      username: '夕阳南下',
      avator: '@/asstes/images/avator1.png',
      content: '大地安宁，内心清明，全无倦意。时值正好，偶有蝉鸣，不见纷繁，岁月静好。',
      time: '1分钟前',
      commentList: []
    },
    {
      id: 1,
      username: '夕阳南下',
      avator: '@/asstes/images/avator1.png',
      content:
        '即使太阳从西边出来，我对你的爱也不会改变。有一种爱情，叫白头偕老，有一种幸福，叫有你相伴。',
      time: '1分钟前',
      commentList: []
    }
  ];
  console.log(state);
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
      .moment-item {
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        padding: 25px 40px 15px;
        &:last-child {
          border-bottom: 0;
        }

        .moment-item-avator {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          margin-right: 30px;

          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .moment-item-main {
          flex: 1;

          .moment-item-username {
            color: #053d76;
            font-size: 30px;
          }

          .moment-item-content {
            color: #222222;
            font-size: 30px;
            margin-top: 15px;
          }

          .moment-item-footer {
            display: flex;
            margin-top: 30px;
            justify-content: space-between;
            align-items: center;

            .moment-item-time {
              color: #999999;
              font-size: 26px;
            }

            .moment-item-func {
              color: #999999;
              font-size: 32px;
            }
          }
        }
      }
    }
  }
</style>
