import { renderHook, act } from "@testing-library/react-hooks/dom";
import prepareReduxWrapper from "../lib/prepareReduxWrapper";
import useUserProFile from "./userProFileHooks";

describe("useHook", () => {
  const setup = () => {
    const [wrapper, store] = prepareReduxWrapper();
    const { result } = renderHook(() => useUserProFile(), { wrapper });
    return { store, result };
  };
  it("Hooks 초기 값 검사", () => {
    const { result } = setup();
    expect(result.current.user.status).toBe(false);
    expect(result.current.user.error).toBe("");
    expect(result.current.user.userScore).toBe(0);
    expect(result.current.user.userWorry).toBe("");
    expect(result.current.user.userName).toBe("");
  });
  it("HookTesting", () => {
    const { result } = setup();
    act(() => {
      result.current.onSetUserName("건우");
      result.current.onSetUserWorry("학업");
      result.current.onSetUserScore(3);
    });
    expect(result.current.user.userName).toBe("건우");
    expect(result.current.user.userWorry).toBe("학업");
    expect(result.current.user.userScore).toBe(3);
    act(() => {
      result.current.onResetScore();
    });
    expect(result.current.user.userScore).toBe(0);
  });
});
