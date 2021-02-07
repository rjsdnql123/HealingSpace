import {
  SET_USER_NAME,
  SET_USER_SCORE,
  SET_USER_WORRY,
  GOOGLE_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./actionTypes";
import { createAction, ActionType, createReducer } from "typesafe-actions";

export const setUserName = createAction(SET_USER_NAME)<string>();
export const setUserScore = createAction(SET_USER_SCORE)<number>();
export const setUserWorry = createAction(SET_USER_WORRY)<string>();
export const loginSuccess = createAction(LOGIN_SUCCESS)();
export const loginError = createAction(LOGIN_ERROR)<string>();
export const setGoogleLogin = createAction(GOOGLE_LOGIN)();

const actions = {
  setUserName,
  setUserScore,
  setUserWorry,
  setGoogleLogin,
  loginSuccess,
  loginError,
};
export type UserAction = ActionType<typeof actions>;
