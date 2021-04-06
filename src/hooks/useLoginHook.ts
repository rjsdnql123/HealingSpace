import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";
import { setUserName, setGoogleLogin } from "../feature/loginForm/loginSlice";

function useLoginHook() {
  const dispatch = useDispatch();
  const proFile = useSelector((state: RootState) => state.login);

  const onSetUserName = useCallback(
    (userName: string) => dispatch(setUserName(userName)),
    [dispatch]
  );

  const onSetGoogleLogin = useCallback(() => dispatch(setGoogleLogin()), [
    dispatch
  ]);
  return {
    proFile,
    onSetUserName,
    onSetGoogleLogin
  };
}

export default useLoginHook;
