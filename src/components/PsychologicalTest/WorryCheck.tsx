import React from "react";
import { useProFile } from "../../hooks/userProFile";
import { userSetUserWorry } from "../../hooks/userProFile";
import { worryListApi } from "../../../util/api/userAPI";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function WorryCheck() {
  const users = useProFile();
  const setUserName = userSetUserWorry();
  console.log(users);
  return (
    <div>
      {users.userName === "" ? (
        <div>loding</div>
      ) : (
        <div>
          <div>{users.userName}의 고민거리는 뭐야?</div>

          {worryListApi.map((worryList: string, index: number) => {
            return (
              <Button key={index} onClick={() => setUserName(worryList)}>
                {worryList}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WorryCheck;
