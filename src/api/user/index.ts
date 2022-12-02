import http, { Response } from '@/utils/http';

export interface LoginParams {
  userCode: string;
  password: string;
}

interface UserInfo {
  id: number;
  username: string;
  mobile: number;
  email: string;
}

export default {
  async login(params: LoginParams) {
    return await http.post<Response<UserInfo>>('/user/login', params);
  }
};
