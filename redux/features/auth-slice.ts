import { AuthState, InitialState, LogInPayload } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    isAuth: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogIn: (state, action: PayloadAction<LogInPayload>) => {
      return {
        value: {
          email: action.payload.email,
          uid: action.payload.uid,
          isAuth: true,
        } as AuthState,
      };
    },
    onLogOut: () => {
      return initialState;
    },
  },
});

export const { onLogIn, onLogOut } = auth.actions;
export default auth.reducer;
