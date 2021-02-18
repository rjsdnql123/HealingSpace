import userProFile, {
  setUserName,
  setUserScore,
  setUserWorry,
  resetScore,
} from "./userProFile";

describe("UserProFile 리듀서", () => {
  it("INIT STATE", () => {
    expect(userProFile(undefined, { type: "" })).toEqual({
      error: "",
      status: false,
      userName: "",
      userScore: 0,
      userWorry: "",
    });
  });
  it("LOGIN", () => {
    const state = userProFile(undefined, setUserName("건우"));
    expect(state.userName === "건우");
  });
  it("Worry Check", () => {
    const state = userProFile(undefined, setUserWorry("학업"));
    expect(state.userWorry === "학업");
  });
  it("Set User Score", () => {
    const state = userProFile(undefined, setUserScore(3));
    expect(state.userScore === 3);
  });
  it("Reset Score", () => {
    let state = userProFile(undefined, setUserScore(3));
    expect(state.userScore === 3);

    state = userProFile(undefined, resetScore());
    expect(state.userScore === 0);
  });
});
