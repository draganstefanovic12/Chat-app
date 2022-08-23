import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type SocketIo = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};
