export interface MomentItem {
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
