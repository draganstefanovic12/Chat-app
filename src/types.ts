import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type SocketIo = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};

export type Message = {
  message: string | undefined;
  user: string | null;
  room?: string;
};
