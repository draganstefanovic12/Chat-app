import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IconState = {
  minimize: boolean;
  close: boolean;
  name: string;
};

const initialState = {
  name: "Chatroom",
  minimize: true,
  close: true,
} as IconState;

export const chatroomIconSlice = createSlice({
  name: "chatroomIcon",
  initialState,
  reducers: {
    handleClose: (state, action: PayloadAction<boolean>) => {
      state.close = action.payload;
      state.minimize = action.payload;
    },
    handleMinimize: (state, action: PayloadAction<boolean>) => {
      state.minimize = action.payload;
    },
  },
});

export const { handleClose, handleMinimize } = chatroomIconSlice.actions;
export const chatroomIconState = (state: RootState) => state.chatroomIcon;

export default chatroomIconSlice.reducer;
