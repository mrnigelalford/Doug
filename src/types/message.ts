interface User {
  displayName: string;
  name: string;
}

interface MessageText {
  text?: string;
}

interface Message {
  user: User;
  space: {
    name: string;
  };
  message: MessageText;
}

export type { User, MessageText, Message };
