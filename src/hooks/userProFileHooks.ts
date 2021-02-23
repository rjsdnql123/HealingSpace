import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";
import {
  setUserName,
  setUserWorry,
  setUserScore,
  resetScore,
  setGoogleLogin,
} from "../store/reducers/userProFile";

function useUserProFile() {
  const user = useSelector((state: RootState) => state.userProFile);
  const dispatch = useDispatch();
  const onSetUserName = useCallback(
    (userName: string) => dispatch(setUserName(userName)),
    [dispatch]
  );
  const onSetUserWorry = useCallback(
    (userWorry: string) => dispatch(setUserWorry(userWorry)),
    [dispatch]
  );
  const onSetUserScore = useCallback(
    (userScore: number) => dispatch(setUserScore(userScore)),
    [dispatch]
  );
  const onResetScore = useCallback(() => dispatch(resetScore()), [dispatch]);
  const onSetGoogleLogin = useCallback(() => dispatch(setGoogleLogin()), [
    dispatch,
  ]);
  return {
    user,
    onSetUserName,
    onSetUserScore,
    onSetUserWorry,
    onResetScore,
    onSetGoogleLogin,
  };
}

export default useUserProFile;
