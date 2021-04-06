import { LoginState } from "../feature/loginForm/loginSlice";
import { writeUserData } from "./firebase";
import { questions } from "./userAPI";
import { Psychological } from "../feature/Psychological/PsychologicalSlice";
import { History } from "history";

interface TestCounterType {
  num: number;
  onSetUserScore: (userScore: number) => void;
  setCount: (count: number) => void;
  userProfile: LoginState;
  Psychological: Psychological;
  history: History;
  count: number;
}

export const testCounter = ({
  num,
  onSetUserScore,
  setCount,
  userProfile,
  Psychological,
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
      Psychological.userScore,
      Psychological.userWorry
    );
    history.push("/result");
  }
};
