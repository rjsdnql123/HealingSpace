import React, { useEffect } from "react";
import { useProFile } from "../../hooks/userProFile";
import { resultComment } from "../../../util/api/userAPI";

function TestResult() {
  const users = useProFile();
  let results = resultComment(users.userName, users.userScore);
  let why = <div>ss</div>;
  useEffect(() => {
    console.log(results[users.userWorry]);
    console.log(users);
  });
  if (users.userScore >= 25) {
    why = <div>{users.userName} (이)는 굉장히 심한 우울감을 느끼고 있어</div>;
  } else if (users.userScore >= 21) {
    why = <div>{users.userName} (이)가 중증도의 우울감을 느끼고 있어.</div>;
  } else if (users.userScore >= 16) {
    why = <div>{users.userName} (이)가 조금 우울함을 느끼고 있어.</div>;
  } else {
    why = <div>{users.userName} (이)는 굉장히 마음이 건강한 상태야!.</div>;
  }
  return (
    <div>
      <div>{users.userName} (이)의 우울 지수는?</div>
      <h1>{users.userScore}</h1>
      <div>{why}</div>
      {typeof results === "undefined" ? (
        <div>오류</div>
      ) : (
        <div>
          {results[users.userWorry]}
          <button>다시 검사하기</button>
        </div>
      )}
    </div>
  );
}

export default TestResult;
