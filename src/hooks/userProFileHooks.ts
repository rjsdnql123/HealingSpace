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
  const onSetUserName: any = useCallback(
    (userName: string) => dispatch(setUserName(userName)),
    [dispatch]
  );
  const onSetUserWorry: any = useCallback(
    (userWorry: string) => dispatch(setUserWorry(userWorry)),
    [dispatch]
  );
  const onSetUserScore: any = useCallback(
    (userScore: number) => dispatch(setUserScore(userScore)),
    [dispatch]
  );
  const onResetScore: any = useCallback(() => dispatch(resetScore()), [
    dispatch,
  ]);
  const onSetGoogleLogin: any = useCallback(() => dispatch(setGoogleLogin()), [
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
