import { MomentItem } from './wechatMoment';
export interface UserItem {
  id: number;
  username: string;
  userCode?: string;
  avator: string;
  momentList: MomentItem[];
}
