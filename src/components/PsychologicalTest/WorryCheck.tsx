import React from "react";
import  useUserProFile from "../../hooks/userProFileHooks";
import { worryListApi } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { Redirect } from "react-router-dom";
import ButtonList from "./ButtonList";

// 유저의 걱정거리를 리듀서 스토어에 저장
function WorryCheck() {

  const {user, onSetUserWorry} = useUserProFile()
  return (
    <div>
        <div>
          <div>{user.userName}의 고민거리는 뭐야?</div>
          {worryListApi.map((worryList: string, index: number) => {
            return (
              <ButtonList
                key={index}
                clickBase={onSetUserWorry}
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
