import React from "react";
import WorryCheck from "../../components/PsychologicalTest/WorryCheck";
import MainTest from "../../components/PsychologicalTest/MainTest";
import useLoginHook from "../../hooks/useLoginHook";
import usePsychologicalHook from "../../hooks/usePsychologicalHook";
import { Redirect } from "react-router-dom";

//user의 status가 false면 로그인이 안되어 있으므로 로그인 페이지로 이동
//user의 Worry가 비어있으면 check 페이지로 Worry가 있으면 MainTest페이지로 이동

function PsychologicalView() {
  const { userProfile } = useLoginHook();
  const { Psychological } = usePsychologicalHook();

  return (
    <div>
      {userProfile.status === false ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <div>
          {Psychological.userWorry === "" ? <WorryCheck /> : <MainTest />}
        </div>
      )}
    </div>
  );
}

export default PsychologicalView;
