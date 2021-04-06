import { useDispatch } from "react-redux";
import { resultComment } from "../util/userAPI";
import { useCallback } from "react";
import { PreviousTestAsync } from "../store/reducers/userProFile";

function useResultHook() {
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
    // resultCommentList,
    onPreviousTest,
    comment
  };
}

export default useResultHook;
