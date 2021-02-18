import React, { useState, useEffect } from "react";
import { useSetUserScore, useResetScore } from "../../hooks/userProFileHooks";
import { questions } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

function MainTest() {
  const [count, setCount] = useState(0);
  let history = useHistory();
  const setuesr = useSetUserScore();
  const resetScore = useResetScore();
  const counter = (num: number) => {
    if (count < questions.length - 1) {
      setuesr(num);
      setCount(count + 1);
    } else {
      history.push("/result");
    }
  };
  useEffect(() => {
    console.log("몇번");
    resetScore();
  }, []);
  return (
    <div>
      <div>{questions[count].ask}</div>
      <ProgressBar
        animated
        now={Math.round((count / questions.length) * 100)}
      />
      {questions[count].answer.map((questionsList: string, index: number) => {
        return (
          <ChoiceButton
            key={index}
            variant="primary"
            onClick={() => counter(index)}
          >
            {questionsList}
          </ChoiceButton>
        );
      })}
    </div>
  );
}

export default MainTest;
