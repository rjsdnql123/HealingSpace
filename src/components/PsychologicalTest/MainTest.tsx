import React, { useState } from "react";
import { useSetUserScore } from "../../hooks/userProFileHooks";
import { questions } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { useHistory } from "react-router-dom";

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
      <div>{questions[count].ask} 너의 고민은 이것 이구나</div>
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
