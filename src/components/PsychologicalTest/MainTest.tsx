import React, { useState, useEffect } from "react";
import { questions } from "../../util/userAPI";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import ButtonList from "./ButtonList";
import styled from "styled-components";
import useLoginHook from "../../hooks/useLoginHook";
import usePsychologicalHook from "../../hooks/usePsychologicalHook";
import { testCounter } from "../../util/testCounter";

//onSetUserScore = 유저의 우울함의 척도를 저장
//onResetScore = MainTest 페이지 렌더링 시 Score 초기화
//counter = 진행하고 있는 검사의 순서를 나타냄
//counter의 길이가 question API의 길이보다 커지면 result페이지로 재 렌더링

function MainTest() {
  const [count, setCount] = useState(0);
  let history = useHistory();
  const { userProfile } = useLoginHook();

  const {
    onResetScore,
    onSetUserScore,
    Psychological
  } = usePsychologicalHook();

  const counter = (num: number) => {
    testCounter({
      num,
      onSetUserScore,
      setCount,
      userProfile,
      Psychological,
      history,
      count
    });
  };

  useEffect(() => {
    onResetScore();
  }, []);

  return (
    <div>
      <TestComment>{questions[count].ask}</TestComment>
      <ProgressBar
        animated
        now={Math.round((count / questions.length) * 100)}
      />
      {questions[count].answer.map((questionsList: string, index: number) => {
        return (
          <ButtonList
            key={index}
            clickBase={counter}
            list={questionsList}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default MainTest;

const TestComment = styled.div`
  color: white;
  margin: 5px;
`;
