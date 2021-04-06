import React from "react";
import useLoginHook from "../../hooks/useLoginHook";
import GoogleLoginLogo from "../../../public/GoogleLoginLogo.png";

function SocialLogin() {
  const { onSetGoogleLogin } = useLoginHook();

  const googleLogin = () => {
    onSetGoogleLogin();
  };
  return (
    <div onClick={googleLogin}>
      <img src={GoogleLoginLogo} alt={"구글 로그인"}></img>
    </div>
  );
}

export default SocialLogin;
