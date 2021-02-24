import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import prepareMockReduxWrapper from "../../lib/prepareMockReduxWrapper";
import LoginForm from "./LoginForm";
import React from "react";
import { setUserName } from "../../store/reducers/userProFile";
import { act } from "react-dom/test-utils";

describe("LoginRender", () => {
  const setup = () => {
    const [Wrapper, store] = prepareMockReduxWrapper();
    render(
      <Wrapper>
        <LoginForm></LoginForm>
      </Wrapper>
    );
    return { store };
  };
  it("renders properly", () => {
    setup();
  });
  it("fffff", async () => {
    const { store } = setup();
    const input = await screen.getByPlaceholderText("이름을 입력해 주세요");
    const button = await screen.findByText("확인");

    fireEvent.change(input, {
      target: {
        value: "건우",
      },
    });
    expect(input).toHaveValue("건우");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(
      store.getActions().filter((action) => action.type === setUserName.type)
    ).toHaveLength(1);
  });
});
