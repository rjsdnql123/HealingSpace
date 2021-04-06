import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Psychological {
  userWorry: string;
  userScore: number;
}

const initialState: Psychological = {
  userWorry: "",
  userScore: 0
};

const PsychologicalReducer = createSlice({
  name: "Psychological",
  initialState: initialState as Psychological,
  reducers: {
    setUserWorry(state, { payload: worry }: PayloadAction<string>) {
      state.userWorry = worry;
    },
    setUserScore(state, { payload: score }: PayloadAction<number>) {
      console.log(score, "soroe");
      state.userScore += score;
    },
    resetScore(state) {
      state.userScore = 0;
    }
  }
});

export const {
  resetScore,
  setUserScore,
  setUserWorry
} = PsychologicalReducer.actions;

export default PsychologicalReducer.reducer;
