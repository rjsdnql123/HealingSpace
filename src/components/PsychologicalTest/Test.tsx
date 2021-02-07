import WorryCheck from "./WorryCheck";
import MainTest from "./MainTest";
import { useProFile } from "../../hooks/userProFileHooks";
import React from "react";

function Test() {
  const users = useProFile();

  return <div>{users.userWorry === "" ? <WorryCheck /> : <MainTest />}</div>;
}

export default Test;
