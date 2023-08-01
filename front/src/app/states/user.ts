import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  type: "admin" | "agent" | "";
  id: string;
}

export const setUser = createAction<UserState>("SET_USER");

const userInitialState: UserState = {
  email: null,
  firstname: null,
  lastname: null,
  type: "",
  id: "",
};

export const userReducer = createReducer(userInitialState, (builder) => {
  builder.addCase(setUser, (state, action: PayloadAction<UserState>) => {
    return action.payload;
  });
});
