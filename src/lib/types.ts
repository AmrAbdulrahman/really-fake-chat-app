export type User = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  text: string;
  last_updated: number;
  created_at: number;
  created_by: User;
};

export type Conversation = {
  id: string;
  name: string;
  last_updated: number;
  created_at: number;
  messages: Message[];
  user: User;
};
