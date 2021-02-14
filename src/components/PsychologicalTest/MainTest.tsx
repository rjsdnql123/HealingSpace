import React, { useState } from "react";
import { useSetUserScore } from "../../hooks/userProFileHooks";
import { questions } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

function MainTest() {
  const [count, setCount] = useState(0);
  let history = useHistory();
  const setuesr = useSetUserScore();
  const counter = (num: number) => {
    if (count < questions.length - 1) {
      setuesr(num);
      setCount(count + 1);
    } else {
      history.push("/result");
    }
  };

  return (
    <div>
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
