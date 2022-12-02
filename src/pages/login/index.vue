<template>
  <div class="login">
    <div class="content">
      <div class="logo">
        <img src="@/assets/moment.svg" alt="logo" />
      </div>
      <van-form @submit="onSubmit" @failed="onFailed">
        <van-field
          v-model.trim="loginInfo.userCode"
          name="userCode"
          clearable
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请输入账号' }]"
        />
        <van-field
          v-model="loginInfo.password"
          :type="inputType"
          name="password"
          clearable
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #button>
            <div @click="onShowPassword">
              <van-icon v-if="showPassword" name="eye-o" />
              <van-icon v-else name="closed-eye" />
            </div>
          </template>
        </van-field>
        <van-button type="primary" size="large" native-type="submit" class="submit-btn">
          登录
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FieldType, Toast } from 'vant';
  import { LoginParams } from '@/api/user';
  import { useLoading } from '@/hooks';
  import { UserStore } from '@/store/modules/user';
  import { MomentItem } from '@/types/wechatMoment';

  const userStore = UserStore();

  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  const inputType = ref<FieldType>('password');
  const showPassword = ref(false);
  const loginInfo = reactive<LoginParams>({
    userCode: '',
    password: ''
  });
  const onShowPassword = () => {
    showPassword.value = !showPassword.value;
    inputType.value = showPassword.value ? 'text' : 'password';
  };
  const onSubmit = async () => {
    const userId = ref(0);
    const username = ref('');
    const userAvator = ref('');
    const state = reactive<{ momentList: MomentItem[] }>({
      momentList: []
    });
    userStore.userList.forEach((item) => {
      if (item.userCode === loginInfo.userCode) {
        userId.value = item.id;
        username.value = item.username;
        userAvator.value = item.avator;
        state.momentList = item.momentList;
      }
    });
    if (!userId) {
      Toast('该用户不存在');
      return;
    }
    startLoading();
    stopLoading();
    userStore.updateName(username.value);
    userStore.updateUserId(userId.value);
    userStore.updateUserAvator(userAvator.value);
    router.push('/wechatMoment');
  };
  const onFailed = (errorInfo = {}) => {
    console.log('failed', errorInfo);
  };
</script>

<style lang="less" scoped>
  .login {
    height: 100%;
    display: flex;
    overflow: auto;

    .content {
      margin: auto;
      width: 500px;
      padding: 40px;
      background-color: #eee;
      .logo {
        display: flex;
        justify-content: center;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .van-form {
        .van-cell {
          margin-top: 40px;
        }
        .submit-btn {
          margin-top: 40px;
          // height: 60px;
          // font-size: 32px;
        }
      }
    }
  }
</style>
