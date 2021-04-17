import React, { useEffect } from "react";
import { ChoiceButton } from "../../common/styled";
import kakaoGeolocation from "../../util/kakaoGeolocation";
import { Link } from "react-router-dom";
import useResultHook from "../../hooks/useResultHook";
import styled from "styled-components";
import useLoginHook from "../../hooks/useLoginHook";
import usePsychologicalHook from "../../hooks/usePsychologicalHook";
import Chart_Line from "../../components/testResult/Chart_Line";
//검사 결과 페이지로 resultCommentAPI에 검색 결과를 요청
//렌더링 시 kakao Map API를 요청

function TestResult() {
  const { onPreviousTest, comment, previousTest } = useResultHook();

  const { userProfile } = useLoginHook();
  const { psychological } = usePsychologicalHook();

  const { userName, uid } = userProfile;
  const { userWorry, userScore } = psychological;

  const resultCommentList = comment(userName, userScore, userWorry);

  useEffect(() => {
    kakaoGeolocation();
    onPreviousTest(uid);
  }, []);

  return (
    <TestComment>
      <h3>{userName} (이)의 우울 지수는?</h3>
      <h1>{userScore}</h1>
      <div>
        <h5>{resultCommentList.firstComment}</h5>
        <div>{resultCommentList.mainComment}</div>
        <KaKaoMap id="map" style={{ height: "500px" }} />
        <div>
          본 자가 진단은 보건 복지부의 심리상담 질문지를 각색한 것으로 주 1회
          평가를 권장하며, 25점 이상 상태가 2주 이상 지속될 시에 전문가와 상담을
          추천합니다. 상황에 따라 점수가 다를수 있으니 주1회 꾸준히 검사하는것을
          권장합니다.
        </div>
        <Link to="/test">
          <ChoiceButton>다시 검사하기</ChoiceButton>
        </Link>
      </div>
      <div>
        <Chart_Line data={previousTest} />
      </div>
      <div>이전 검사 기록을 살펴 보실수 있습니다.</div>
    </TestComment>
  );
}

export default TestResult;

const TestComment = styled.section`
  color: white;
  margin: 5px;
`;

const KaKaoMap = styled.div`
  color: black;
`;
