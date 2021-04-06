import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface PreviousTest {
  userName: string;
  userScore: number;
  userWorry: string;
}

export interface TestResultType {
  previousTest: PreviousTest[];
}

const initialState: TestResultType = {
  previousTest: []
};

const TestResultReducer = createSlice({
  name: "testResult",
  initialState: initialState as TestResultType,
  reducers: {
    PreviousTestAsync(state, { payload: uid }: PayloadAction<string>) {},
    setPreviousTests(state, { payload: previousTest }) {
      for (let key in previousTest) {
        state.previousTest.push(previousTest[key]);
      }
    }
  }
});

export const { PreviousTestAsync, setPreviousTests } = TestResultReducer.actions;

export default TestResultReducer.reducer;
