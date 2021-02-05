import WorryCheck from "./WorryCheck";
import MainTest from "./MainTest";
import { useProFile } from "../../hooks/userProFile";
import React from "react";
const userproFile = ({ history }: any) => {
  const users = useProFile();

  return (
    <div>
      {users.userWorry === "" ? <WorryCheck /> : <MainTest history={history} />}
    </div>
  );
};

export default userproFile;
