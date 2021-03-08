import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { resultComment, ResultCommentType } from "../util/api/userAPI";
import { useCallback } from "react";
import { setPreviousTests } from "../store/reducers/userProFile";
import { getUserTestCount } from "../util/firebase";

function testResultHook() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userProFile);
  let resultCommentList: ResultCommentType = resultComment(
    user.userName,
    user.userScore,
    user.userWorry
  );
  const onPreviousTest = useCallback(
    (preUserTest: any) => dispatch(setPreviousTests(preUserTest)),
    [dispatch]
  );
  const getTestList = () => {
    getUserTestCount(user.uid).then((res) => {
      console.log(res.val(), "resres");
      let result = res.val();
      onPreviousTest(result);
    });
  };
  return {
    user,
    getTestList,
    resultCommentList,
    onPreviousTest,
  };
}

export default testResultHook;
