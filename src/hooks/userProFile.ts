import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useCallback } from "react";
import {
  setUserWorry,
  setUserScore,
  setRateUserName,
} from "../../store/reducers/userProFile";

export function useProFile() {
  const user = useSelector((state: RootState) => state.userProFile);
  return user;
}

export function userSetUserName() {
  const dispatch = useDispatch();
  return useCallback((userName) => dispatch(setRateUserName(userName)), [
    dispatch,
  ]);
}
export function userSetUserWorry() {
  const dispatch = useDispatch();
  return useCallback((userWorry) => dispatch(setUserWorry(userWorry)), [
    dispatch,
  ]);
}
export function userSetUserScore() {
  const dispatch = useDispatch();
  return useCallback((userScore) => dispatch(setUserScore(userScore)), [
    dispatch,
  ]);
}
