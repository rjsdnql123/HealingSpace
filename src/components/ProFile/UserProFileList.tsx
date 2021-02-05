import React from "react";
import {
  userSetUserName,
  userSetgoogle,
  useProFile,
} from "../../hooks/userProFile";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, InputGroup, FormControl } from "react-bootstrap";

type SubmitType = {
  userName: string;
};

const UserProfileList = ({ history }: any) => {
  const { register, handleSubmit } = useForm();
  const setUserName = userSetUserName();
  const user = useProFile();
  const setUsetNameGoogle = userSetgoogle();
  const onSubmit: SubmitHandler<SubmitType> = (name: SubmitType) => {
    setUserName(name.userName);
  };
  const click = () => {
    setUsetNameGoogle();
  };
  return (
    <div>
      {user.userName === "" ? (
        <Redirect to={{ pathname: "/" }}></Redirect>
      ) : (
        <Redirect to={{ pathname: "/test" }}></Redirect>
      )}
      <button onClick={click}>로그인</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>불러줬음 하는 이름이나 별명을 적어줘!</h2>
        <InputGroup>
          <FormControl type="text" name="userName" ref={register} required />
          <Button variant="primary" type="submit">
            확인
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default UserProfileList;
