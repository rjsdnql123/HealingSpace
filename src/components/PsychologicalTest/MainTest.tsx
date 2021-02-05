import React, { useState } from "react";
import { userSetUserScore } from "../../hooks/userProFile";
import { Link } from "react-router-dom";
import { questions } from "../../../util/api/userAPI";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function MainTest({ history }: any) {
  const [count, setCount] = useState(0);
  const setuesr = userSetUserScore();
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
          <Button key={index} variant="primary" onClick={() => counter(index)}>
            {questionsList}
          </Button>
        );
      })}
    </div>
  );
}

export default MainTest;
