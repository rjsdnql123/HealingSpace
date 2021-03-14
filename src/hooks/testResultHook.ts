import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { resultComment, ResultCommentType } from "../util/api/userAPI";
import { useCallback } from "react";
import { loadPreviousTest } from "../store/reducers/userProFile";
import { getUserTestCount } from "../util/firebase";

function testResultHook() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userProFile);
  let resultCommentList: ResultCommentType = resultComment(
    user.userName,
    user.userScore,
    user.userWorry
  );
  //비동기로 저장

  const onPreviousTest = useCallback(
    (uid: string) => {
      return dispatch(loadPreviousTest(uid));
    },
    [dispatch]
  );
  return {
    user,
    resultCommentList,
    onPreviousTest,
  };
}

export default testResultHook;
