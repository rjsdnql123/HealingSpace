import React from "react";
import useUserProFile from "../../hooks/userProFileHooks";
import { worryListApi } from "../../util/userAPI";
import ButtonList from "./ButtonList";
import styled from "styled-components";

const WorryComment = styled.div`
  color: white;
  margin: 5px;
`;

// 유저의 걱정거리를 리듀서 스토어에 저장
function WorryCheck() {
  const { user, onSetUserWorry } = useUserProFile();
  return (
    <div>
      <div>
        <WorryComment>{user.userName}의 고민거리는 뭐야?</WorryComment>
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
    </div>
  );
}

export default WorryCheck;
