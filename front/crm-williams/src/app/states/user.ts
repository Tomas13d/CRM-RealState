import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  password: string | null;
}

export const setUser = createAction<UserState>("SET_USER");

const userInitialState: UserState = {
  email: null,
  password: null,
};

export const userReducer = createReducer(userInitialState, (builder) => {
  builder.addCase(setUser, (state, action: PayloadAction<UserState>) => {
    return action.payload;
  });
});
