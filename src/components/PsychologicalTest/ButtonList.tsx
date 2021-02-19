import React from "react";
import { useProFile } from "../../hooks/userProFileHooks";
import { useSetUserWorry } from "../../hooks/userProFileHooks";
import { worryListApi } from "../../util/api/userAPI";
import { ChoiceButton } from "../../util/styled";
import { Redirect } from "react-router-dom";

function ButtonList({ clickBase, list, index }: any) {
  return <ChoiceButton onClick={() => clickBase(index)}>{list}</ChoiceButton>;
}

export default ButtonList;
