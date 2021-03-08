import React from "react";
import useUserProFile from "../../hooks/userProFileHooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, InputGroup, FormControl } from "react-bootstrap";
type SubmitType = {
  userName: string;
};

function Login() {
  const { register, handleSubmit } = useForm();
  const { onSetUserName } = useUserProFile();

  const onSubmit: SubmitHandler<SubmitType> = (name: SubmitType) => {
    onSetUserName(name.userName);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <FormControl
          type="text"
          name="userName"
          ref={register}
          required
          placeholder="이름을 입력해 주세요"
        />
        <Button variant="primary" type="submit">
          확인
        </Button>
      </InputGroup>
    </form>
  );
}

export default Login;
