import React from "react";
import { useProFile } from "../../hooks/userProFileHooks";
import { useSetUserWorry } from "../../hooks/userProFileHooks";
import { worryListApi } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { Redirect } from "react-router-dom";
import ButtonList from "./ButtonList";

function WorryCheck() {
  const users = useProFile();
  const setUesrWorry = useSetUserWorry();
  return (
    <div>
        <div>
          <div>{users.userName}의 고민거리는 뭐야?</div>
          {worryListApi.map((worryList: string, index: number) => {
            return (
              <ButtonList
                key={index}
                clickBase={setUesrWorry}
                list={worryList}
                index={worryList}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WorryCheck;
