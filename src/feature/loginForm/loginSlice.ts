import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  userName: string;
  error: string;
  status: boolean;
  uid: string;
}

const initialState: LoginState = {
  userName: "",
  error: "",
  status: false,
  uid: ""
};

const LoginReducer = createSlice({
  name: "userProfile",
  initialState: initialState as LoginState,
  reducers: {
    setUserName(state, { payload: name }: PayloadAction<string>) {
      state.userName = name;
      state.status = true;
    },
    loginError(state, { payload: error }: PayloadAction<string>) {
      state.error = error;
    },
    setGoogleLogin() {},
    setUid(state, { payload: uid }: PayloadAction<string>) {
      state.uid = uid;
    }
  }
});

export const {
  setUserName,
  loginError,
  setGoogleLogin,
  setUid
} = LoginReducer.actions;

export default LoginReducer.reducer;
