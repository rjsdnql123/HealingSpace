import React from "react";
import { useProFile } from "../../hooks/userProFile";
import { userSetUserWorry } from "../../hooks/userProFile";
import { worryListApi } from "../../util/api/userAPI";
// import { Button, InputGroup, FormControl } from "react-bootstrap";
import { ChoiceButton } from "../../util/styled";

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
              <ChoiceButton key={index} onClick={() => setUserName(worryList)}>
                {worryList}
              </ChoiceButton>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WorryCheck;
