import { RootState } from "./store";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = {
  message: string | undefined;
  user: string | null;
  room: string | null;
};

type RoomSocket = {
  socketIo: Socket<DefaultEventsMap, DefaultEventsMap>;
  currentRoom: null | string;
};

const socketIo = io("http://localhost:3000");
const initialState = { socketIo } as RoomSocket;

export const socketSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    changeRoom: (state, action: PayloadAction<string>) => {
      socketIo.emit("join_room", action.payload);
      state.currentRoom = action.payload;
    },
    send: (state, action: PayloadAction<Message>) => {
      socketIo.emit("send_message", {
        message: action.payload.message,
        user: action.payload.user,
        room: action.payload.room,
      });
    },
  },
});

export const { changeRoom, send } = socketSlice.actions;
export const socketState = (state: RootState) => state.socket;

export default socketSlice.reducer;
