export type Message = {
  uuid: string | undefined;
  name: string;
  user_uuid: string;
  message: string;
  like_count: number;
  created_at: Date;
  like_status: boolean;
};

export type Profile = {
  name: string;
  uuid: string;
  prifile_message: string | null;
  messages: Message[];
};
