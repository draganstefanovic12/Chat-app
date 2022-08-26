import { configureStore } from "@reduxjs/toolkit";
import chatroomIconReducer from "./chatroomIconReducer";
import socketReducer from "./socketReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    socket: socketReducer,
    chatroomIcon: chatroomIconReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
