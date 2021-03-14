import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  userName: string;
  userScore: number;
  userWorry: string;
  error: string;
  status: boolean;
  previousTest: any;
  uid: string;
};

const initialState: UserState = {
  userName: "",
  userScore: 0,
  userWorry: "",
  error: "",
  status: false,
  previousTest: [],
  uid: "",
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
      console.log(score, "soroe");
      state.userScore += score;
    },
    resetScore(state) {
      state.userScore = 0;
    },
    loginError(state, { payload: error }: PayloadAction<string>) {
      state.error = error;
    },
    setGoogleLogin() {},
    setUid(state, { payload: uid }: PayloadAction<string>) {
      console.log("uid");
      state.uid = uid;
    },
    loadPreviousTest(state, { payload: uid }): any {},
    setPreviousTests(state, { payload: previousTest }) {
      for (let key in previousTest) {
        state.previousTest.push(previousTest[key]);
      }
    },
  },
});
export const {
  setUserName,
  setUserScore,
  setUserWorry,
  loginError,
  setGoogleLogin,
  resetScore,
  loadPreviousTest,
  setPreviousTests,
  setUid,
} = UserReducer.actions;

export default UserReducer.reducer;
