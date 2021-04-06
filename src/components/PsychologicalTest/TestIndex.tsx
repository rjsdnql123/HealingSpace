import WorryCheck from "./WorryCheck";
import MainTest from "./MainTest";
import useLoginHook from "../../hooks/useLoginHook";
import React from "react";
import { Redirect } from "react-router-dom";

//user의 status가 false면 로그인이 안되어 있으므로 로그인 페이지로 이동
//user의 Worry가 비어있으면 check 페이지로 Worry가 있으면 MainTest페이지로 이동

function TestIndex() {
  const { proFile } = useLoginHook();

  return (
    <div>
      {proFile.status === false ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <div>{proFile.error === "" ? <WorryCheck /> : <MainTest />}</div>
      )}
    </div>
  );
}

export default TestIndex;
