import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string | null;
};

const initialState: UserState = { username: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<string>) => {
      user.username = action.payload;
      localStorage.setItem(
        "ChatUser",
        JSON.stringify({ user: action.payload })
      );
    },
    logout: (user) => {
      localStorage.removeItem("ChatUser");
      user.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
