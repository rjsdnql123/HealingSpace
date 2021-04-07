import { useDispatch, useSelector } from "react-redux";
import { resultComment } from "../util/userAPI";
import { useCallback } from "react";
import { PreviousTestAsync } from "../feature/testResult/testSlice";
import { RootState } from "../store";

function useResultHook() {
  const previousTest = useSelector(
    (state: RootState) => state.testResult.previousTest
  );
  const dispatch = useDispatch();
  
  const comment = (userName: string, userScore: number, userWorry: string) =>
    resultComment(userName, userScore, userWorry);

  //비동기로 저장
  const onPreviousTest = useCallback(
    (uid: string) => {
      return dispatch(PreviousTestAsync(uid));
    },
    [dispatch]
  );
  return {
    previousTest,
    onPreviousTest,
    comment
  };
}

export default useResultHook;
