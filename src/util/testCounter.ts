import { LoginState } from "../feature/loginForm/loginSlice";
import { writeUserData } from "./firebase";
import { questions } from "./userAPI";
import { PsychologicalType } from "../feature/Psychological/psychologicalSlice";
import { History } from "history";

interface TestCounterType {
  num: number;
  onSetUserScore: (userScore: number) => void;
  setCount: (count: number) => void;
  userProfile: LoginState;
  psychological: PsychologicalType;
  history: History;
  count: number;
}

export const testCounter = ({
  num,
  onSetUserScore,
  setCount,
  userProfile,
  psychological,
  history,
  count
}: TestCounterType) => {
  if (count < questions.length - 1) {
    onSetUserScore(num);
    setCount(count + 1);
  } else {
    writeUserData(
      userProfile.uid,
      userProfile.userName,
      psychological.userScore,
      psychological.userWorry
    );
    history.push("/result");
  }
};
