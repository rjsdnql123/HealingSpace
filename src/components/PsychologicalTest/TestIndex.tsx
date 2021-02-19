import WorryCheck from "./WorryCheck";
import MainTest from "./MainTest";
import { useProFile } from "../../hooks/userProFileHooks";
import React from "react";
import { Redirect } from "react-router-dom";

function TestIndex() {
  const users = useProFile();

  return (
    <div>
      {users.status === false ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <div>{users.userWorry === "" ? <WorryCheck /> : <MainTest />}</div>
      )}
    </div>
  );
}

export default TestIndex;
