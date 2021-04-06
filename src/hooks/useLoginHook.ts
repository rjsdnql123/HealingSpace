import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";
import { setUserName, setGoogleLogin } from "../feature/loginForm/loginSlice";

function useLoginHook() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state: RootState) => state.userProfile);

  const onSetUserName = useCallback(
    (userName: string) => dispatch(setUserName(userName)),
    [dispatch]
  );

  const onSetGoogleLogin = useCallback(() => dispatch(setGoogleLogin()), [
    dispatch
  ]);
  return {
    userProfile,
    onSetUserName,
    onSetGoogleLogin
  };
}

export default useLoginHook;
