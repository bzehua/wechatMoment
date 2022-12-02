import { MomentItem } from './wechatMoment';
import { UserItem } from './user';
export interface GlobalState {
  token: string;
  userInfo: object;
}

export interface UserState {
  username: string;
  userId: number;
  userAvator: string;
  userList: UserItem[];
}

export interface MomentState {
  momentList: MomentItem[];
}
