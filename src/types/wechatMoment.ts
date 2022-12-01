// 定义一个接口,约束state的数据类型
export interface WechatMoment {
  id: number;
  username: string;
  avator: string;
  time: string;
  content: string;
  commentList?: Comment[];
}

export interface Comment {
  id: number;
  username: string;
  avator: string;
  comment: string;
  time: string;
}
