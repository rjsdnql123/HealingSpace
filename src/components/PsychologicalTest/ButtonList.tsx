import React from "react";
import { ChoiceButton } from "../../common/styled";

interface ButtonType {
  clickBase: (index: any) => void;
  list: string;
  index: number | string;
}

//중복으로 사용되는 버튼 리스트 모듈화
function ButtonList({ clickBase, list, index }: ButtonType) {
  return <ChoiceButton onClick={() => clickBase(index)}>{list}</ChoiceButton>;
}

export default ButtonList;
