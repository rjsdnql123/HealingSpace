import React from "react";
import { ChoiceButton } from "../../util/styled";

//중복으로 사용되는 버튼 리스트 모듈화
function ButtonList({ clickBase, list, index }: any) {
  return <ChoiceButton onClick={() => clickBase(index)}>{list}</ChoiceButton>;
}

export default ButtonList;
