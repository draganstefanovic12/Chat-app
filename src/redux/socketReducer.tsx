import { RootState } from "./store";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RoomSocket = {
  socketIo: Socket<DefaultEventsMap, DefaultEventsMap>;
  currentRoom: string | null;
};

const socketIo = io("https://dragpersonalproj.xyz", {
  path: "/chat-app/socket.io",
});
console.log(socketIo);
const initialState = { socketIo } as RoomSocket;

export const socketSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    changeRoom: (state, action: PayloadAction<string | null>) => {
      socketIo.emit("change_room", action.payload);
      state.currentRoom = action.payload;
    },
  },
});

export const { changeRoom } = socketSlice.actions;
export const socketState = (state: RootState) => state.socket;

export default socketSlice.reducer;
