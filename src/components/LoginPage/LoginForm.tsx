import React from "react";
import useLoginHook from "../../hooks/useLoginHook";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, InputGroup, FormControl } from "react-bootstrap";

interface SubmitType {
  userName: string;
}

function Login() {
  const { register, handleSubmit } = useForm();
  const { onSetUserName } = useLoginHook();

  const onSubmit: SubmitHandler<SubmitType> = ({ userName }: SubmitType) => {
    onSetUserName(userName);
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
