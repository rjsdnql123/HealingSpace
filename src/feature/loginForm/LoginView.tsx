import React from "react";
import useLoginHook from "../../hooks/useLoginHook";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginPage/LoginForm";
import SocialLogin from "../../components/LoginPage/SocialLogin";
import styled from "styled-components";

function LoginView() {
  const { userProfile } = useLoginHook();
  console.log(userProfile);
  return (
    <div>
      {userProfile.status === false ? (
        <Redirect to={{ pathname: "/" }}></Redirect>
      ) : (
        <Redirect to={{ pathname: "/test" }}></Redirect>
      )}
      <section>
        <Nameinput>불러줬음 하는 이름이나 별명을 적어주세요!</Nameinput>
        <LoginForm />
        <SocialLogin />
        <Comment>
          로그인 하시면 심리검사 점수가 저장돼 나중에 확인 하실수 있습니다.
        </Comment>
      </section>
    </div>
  );
}

export default LoginView;

const Nameinput = styled.div`
  color: white;
`;
const Comment = styled.div`
  color: white;
  margin: 5px;
`;
