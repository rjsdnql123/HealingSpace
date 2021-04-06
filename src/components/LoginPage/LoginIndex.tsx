import React from "react";
import useUserProFile from "../../hooks/userProFileHooks";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
import styled from "styled-components";

const Nameinput = styled.div`
  color: white;
`;
const Commet = styled.div`
  color: white;
  margin: 5px;
`;

function Login() {
  const { user } = useUserProFile();

  return (
    <div>
      {user.status === false ? (
        <Redirect to={{ pathname: "/" }}></Redirect>
      ) : (
        <Redirect to={{ pathname: "/test" }}></Redirect>
      )}
      <div>
        <Nameinput>불러줬음 하는 이름이나 별명을 적어주세요!</Nameinput>
        <LoginForm />
        <SocialLogin />
        <Commet>
          로그인 하시면 심리검사 점수가 저장돼 나중에 확인 하실수 있습니다.
        </Commet>
      </div>
    </div>
  );
}

export default Login;
