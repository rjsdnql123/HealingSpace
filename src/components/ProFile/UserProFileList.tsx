import React from "react";
import { userSetUserName } from "../../hooks/userProFile";
import { Link } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, InputGroup, FormControl } from "react-bootstrap";

type SubmitType = {
  userName: string;
};

const UserProfileList = ({ history }: any) => {
  const { register, handleSubmit } = useForm();
  const setUserName = userSetUserName();
  console.log("이름입력시 렌더링");
  const onSubmit: SubmitHandler<SubmitType> = (name: SubmitType) => {
    console.log(name);
    setUserName(name.userName);
    history.push("/test");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>불러줬음 하는 이름이나 별명을 적어줘!</h2>
      <InputGroup>
        <FormControl type="text" name="userName" ref={register} required />
        <Button variant="primary" type="submit">
          확인
        </Button>
      </InputGroup>
    </form>
  );
};

export default UserProfileList;
