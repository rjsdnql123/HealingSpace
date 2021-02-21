import React, { useEffect } from "react";
import useUserProFile from "../../hooks/userProFileHooks";
import { resultComment, ResultCommentType } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import kakaoGeolocation from "../../util/kakaoGeolocation";
import { Link } from "react-router-dom";

//검사 결과 페이지로 resultCommentAPI에 검색 결과를 요청
//렌더링 시 kakao Map API를 요청
function TestResult() {
  const { user } = useUserProFile();
  useEffect(() => {
    kakaoGeolocation();
  }, []);

  let resultCommentList: ResultCommentType = resultComment(
    user.userName,
    user.userScore,
    user.userWorry
  );
  return (
    <div>
      <h3>{user.userName} (이)의 우울 지수는?</h3>
      <h1>{user.userScore}</h1>
      {typeof resultCommentList === undefined ? (
        <div>오류</div>
      ) : (
        <div>
          <h5>{resultCommentList.firstComment}</h5>
          <div>{resultCommentList.mainComment}</div>
          <div id="map" style={{ height: "500px" }} />
          <div>
            본 자가 진단은 보건 복지부의 심리상담 질문지를 각색한 것으로 주 1회
            평가를 권장하며, 25점 이상 상태가 2주 이상 지속될 시에 전문가와
            상담을 추천합니다. 상황에 따라 점수가 다를수 있으니 주1회 꾸준히
            검사하는것을 권장합니다.
          </div>

          <Link to="/test">
            <ChoiceButton>다시 검사하기</ChoiceButton>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TestResult;
