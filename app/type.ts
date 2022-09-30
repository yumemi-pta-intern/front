export type Message = {
  uuid: string | undefined;
  name: string;
  user_uuid: string;
  message: string;
  like_count: number;
  created_at: Date;
  like_status: boolean;
};
