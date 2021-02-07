import React from "react";
import { useProFile } from "../../hooks/userProFileHooks";
import { useSetUserWorry } from "../../hooks/userProFileHooks";
import { worryListApi } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { Redirect } from "react-router-dom";

function WorryCheck() {
  const users = useProFile();
  const setUesrWorry = useSetUserWorry();
  return (
    <div>
      {users.status === false ? (
        <Redirect to={{ pathname: "/" }}></Redirect>
      ) : (
        <div>
          <div>{users.userName}의 고민거리는 뭐야?</div>

          {worryListApi.map((worryList: string, index: number) => {
            return (
              <ChoiceButton key={index} onClick={() => setUesrWorry(worryList)}>
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
