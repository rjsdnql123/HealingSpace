import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";
import {
  resetScore,
  setUserScore,
  setUserWorry
} from "../feature/Psychological/psychologicalSlice";

function useLoginHook() {
  const dispatch = useDispatch();
  const psychological = useSelector((state: RootState) => state.psychological);

  const onSetUserWorry = useCallback(
    (userWorry: string) => dispatch(setUserWorry(userWorry)),
    [dispatch]
  );
  const onSetUserScore = useCallback(
    (userScore: number) => dispatch(setUserScore(userScore)),
    [dispatch]
  );
  const onResetScore = useCallback(() => dispatch(resetScore()), [dispatch]);
  return {
    psychological,
    onSetUserWorry,
    onSetUserScore,
    onResetScore
  };
}

export default useLoginHook;
