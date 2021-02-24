import React from "react";
import useUserProFile from "../../hooks/userProFileHooks";
// import GoogleLoginLogo from "../../../public/GoogleLoginLogo.png";

function SocialLogin() {
  const { onSetGoogleLogin } = useUserProFile();

  const googleLogin = () => {
    onSetGoogleLogin();
  };
  return (
    <div onClick={googleLogin}>
      ss {/* <img src={GoogleLoginLogo}></img> */}
    </div>
  );
}

export default SocialLogin;
