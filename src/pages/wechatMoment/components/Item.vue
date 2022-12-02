<template>
  <div class="moment-item">
    <div class="moment-item-avator">
      <img :src="momentItem.avator" alt="" />
    </div>
    <div class="moment-item-main">
      <div class="moment-item-username">{{ momentItem.username }}</div>
      <div class="moment-item-content">{{ momentItem.content }}</div>
      <div class="moment-item-footer">
        <div class="moment-item-time"
          >{{ momentItem.time }}
          <div class="delete" v-if="momentItem.usreId === userId" @click="handleDelete">删除</div>
        </div>
        <div class="moment-item-func"></div>
      </div>
    </div>
  </div>
</template>

<script setup ts>
  const props = defineProps({
    momentItem: {
      type: Object,
      required: true,
      default: () => ({})
    },
    userId: {
      type: Number,
      required: true,
      default: 0
    },
    index: {
      type: Number,
      required: true,
      default: 0
    }
  });

  const emit = defineEmits(['delete']);
  const handleDelete = () => {
    emit('delete', { index: props.index });
  };
</script>

<style scoped lang="less">
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
          display: flex;
          color: #999999;
          font-size: 26px;
          align-items: center;

          .delete {
            color: #053d76;
            font-size: 24px;
            margin-left: 20px;
            cursor: pointer;
          }
        }

        .moment-item-func {
          color: #999999;
          font-size: 32px;
        }
      }
    }
  }
</style>
