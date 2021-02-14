import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";
import {
  setUserWorry,
  setUserScore,
  setUserName,
  setGoogleLogin,
  loginSuccess,
} from "../actions/index";

export function useProFile() {
  const user = useSelector((state: RootState) => state.userProFile);
  return user;
}

export function useSetUserName() {
  const dispatch = useDispatch();
  return useCallback((userName: string) => dispatch(setUserName(userName)), [
    dispatch,
  ]);
}
export function useLoginSuccess() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(loginSuccess()), [dispatch]);
}

export function useSetUserWorry() {
  const dispatch = useDispatch();
  return useCallback((userWorry: string) => dispatch(setUserWorry(userWorry)), [
    dispatch,
  ]);
}
export function useSetUserScore() {
  const dispatch = useDispatch();
  return useCallback((userScore: number) => dispatch(setUserScore(userScore)), [
    dispatch,
  ]);
}
export function useSetgoogle() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setGoogleLogin()), [dispatch]);
}
