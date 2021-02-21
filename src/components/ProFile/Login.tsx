import React from "react";
import useUserProFile from "../../hooks/userProFileHooks";
import { Redirect } from "react-router-dom";
import GoogleLoginLogo from "../../../public/GoogleLoginLogo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, InputGroup, FormControl } from "react-bootstrap";

type SubmitType = {
  userName: string;
};

function Login() {
  const { register, handleSubmit } = useForm();
  const { onSetUserName, user, onSetGoogleLogin } = useUserProFile();

  const onSubmit: SubmitHandler<SubmitType> = (name: SubmitType) => {
    onSetUserName(name.userName);
  };
  const googleLogin = () => {
    onSetGoogleLogin();
  };
  return (
    <div>
      {user.status === false ? (
        <Redirect to={{ pathname: "/" }}></Redirect>
      ) : (
        <Redirect to={{ pathname: "/test" }}></Redirect>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>불러줬음 하는 이름이나 별명을 적어줘!</h2>
        <InputGroup>
          <FormControl type="text" name="userName" ref={register} required />
          <Button variant="primary" type="submit">
            확인
          </Button>
        </InputGroup>
      </form>
      <div onClick={googleLogin}>
        <img src={GoogleLoginLogo}></img>
      </div>
      로그인 하시면 심리검사 점수가 저장돼 나중에 확인 하실수 있습니다.
    </div>
  );
}

export default Login;
