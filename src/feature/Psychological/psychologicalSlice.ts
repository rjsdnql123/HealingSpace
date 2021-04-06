import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PsychologicalType {
  userWorry: string;
  userScore: number;
}

const initialState: PsychologicalType = {
  userWorry: "",
  userScore: 0
};

const PsychologicalReducer = createSlice({
  name: "psychological",
  initialState: initialState as PsychologicalType,
  reducers: {
    setUserWorry(state, { payload: worry }: PayloadAction<string>) {
      state.userWorry = worry;
    },
    setUserScore(state, { payload: score }: PayloadAction<number>) {
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
