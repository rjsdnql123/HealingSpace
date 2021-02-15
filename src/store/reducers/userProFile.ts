import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  userName: string;
  userScore: number;
  userWorry: string;
  error: string;
  status: boolean;
};

const initialState: UserState = {
  userName: "",
  userScore: 0,
  userWorry: "",
  error: "",
  status: false,
};

const UserReducer = createSlice({
  name: "userProFile",
  initialState: initialState as UserState,
  reducers: {
    setUserName(state, { payload: name }: PayloadAction<string>) {
      state.userName = name;
      state.status = true;
    },
    setUserWorry(state, { payload: worry }: PayloadAction<string>) {
      state.userWorry = worry;
    },
    setUserScore(state, { payload: score }: PayloadAction<number>) {
      state.userScore += score;
    },
    loginError(state, { payload: error }: PayloadAction<string>) {
      state.error = error;
    },
    setGoogleLogin() {},
  },
});
export const {
  setUserName,
  setUserScore,
  setUserWorry,
  loginError,
  setGoogleLogin,
} = UserReducer.actions;

export default UserReducer.reducer;
