import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { resultComment, ResultCommentType } from "../util/api/userAPI";

function testResultHook() {
  const user = useSelector((state: RootState) => state.userProFile);
  let resultCommentList: ResultCommentType = resultComment(
    user.userName,
    user.userScore,
    user.userWorry
  );
  return {
    user,
    resultCommentList,
  };
}

export default testResultHook;
